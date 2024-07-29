import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import StatusBadge from "~/components/status-badge";
import { Separator } from "~/components/ui/separator";
import { useGigs } from "~/hooks/use-gigs";
import { formatDate } from "~/lib/utils";

export default function ShowsContainer() {
  const searchParams = useSearchParams();
  const artistName = searchParams.get("artistName") ?? "";
  const { data: showsData, isLoading } = useGigs(artistName);

  return (
    <div className="flex size-full items-center justify-center">
      {showsData && showsData.length > 0 ? (
        <div className="flex size-full flex-col justify-start gap-4 overflow-y-auto pr-4 pt-1">
          {showsData.map((show) => (
            <ShowComponent key={show.id} show={show} />
          ))}
        </div>
      ) : (
        <>
          {isLoading ? (
            <Loader2 className="size-16 animate-spin text-primary" />
          ) : (
            <div className="rounded-2xl border bg-primary-light p-4 shadow-md">
              <p className="text-center font-bold text-white">
                {artistName !== ""
                  ? "This artist has no scheduled shows"
                  : "Select a artist to view scheduled shows"}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function ShowComponent({ show }: { show: Gig }) {
  return (
    <Link
      href={show.url || ""}
      className="flex w-[800px] items-center gap-8 rounded-lg border border-gray-200 p-4 shadow-md"
    >
      <figure>
        <Image
          src={
            show.images.find((image) =>
              image.url.startsWith("https://s1.ticketm.net"),
            )?.url ?? ""
          }
          alt={`${show.name}'s picture`}
          width={200}
          height={200}
          className="rounded-lg border-2 border-primary"
        />
      </figure>

      <div className="w-full">
        <p className="text-wrap font-bold">{show.name}</p>

        <div className="flex justify-between">
          <p>
            {`${show._embedded.venues[0]?.city?.name ?? "Unknown location"} - ${show._embedded.venues[0]?.country?.countryCode ?? "Not Available"}`}
          </p>

          <div className="mr-4 flex items-center gap-2">
            <p className="text-gray-600">
              {formatDate(show.dates.start.dateTime)}
            </p>

            <Separator orientation="vertical" className="h-4" />

            <StatusBadge status={show.dates.status.code} />
          </div>
        </div>
      </div>
    </Link>
  );
}
