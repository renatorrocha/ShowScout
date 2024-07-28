import Image from "next/image";
import { useSearchParams } from "next/navigation";
import StatusBadge from "~/components/status-badge";
import { Separator } from "~/components/ui/separator";
import { useGigs } from "~/hooks/use-gigs";
import { formatDate } from "~/lib/utils";

export default function ShowsContainer() {
  const searchParams = useSearchParams();
  const artistName = searchParams.get("artistName") ?? "";
  const { data: showsData } = useGigs(artistName);

  return (
    <div className="flex flex-col gap-4 overflow-y-auto pr-4 pt-1">
      {showsData?.length != 0 ? (
        showsData?.map((show) => <ShowComponent key={show.id} show={show} />)
      ) : (
        <p>Nao tem shows</p>
      )}
    </div>
  );
}

function ShowComponent({ show }: { show: Gig }) {
  return (
    <div className="flex w-[800px] items-center gap-8 border border-red-400">
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
          className="rounded-lg"
        />
      </figure>

      {/* mostrar cidade e pais */}

      <div className="w-full space-y-2">
        <p className="font-semibold">{show.name}</p>

        <div className="flex gap-2">
          <p>{formatDate(show.dates.start.dateTime)}</p>
          <Separator />
          <StatusBadge status={show.dates.status.code} />
        </div>
      </div>
    </div>
  );
}
