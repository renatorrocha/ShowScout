"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "~/components/ui/skeleton";
import { useFollowedArtists } from "~/hooks/use-followed-artists";
import { cn } from "~/lib/utils";

export default function ArtistsContainer({
  accessToken,
}: {
  accessToken: string;
}) {
  const { data: artistsData, isPending } = useFollowedArtists(accessToken);
  const searchParams = useSearchParams();
  const router = useRouter();
  const artistName = searchParams.get("artistName") ?? "";

  function handleArtistChange(artistName: string) {
    const params = new URLSearchParams(searchParams);
    params.set("artistName", artistName);

    router.replace(`?${params.toString()}`);
  }

  return (
    <section className="flex h-full flex-col gap-4 overflow-y-auto pr-4 pt-1">
      {isPending
        ? Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-[80px] w-[400px]" />
          ))
        : artistsData?.map((artist) => (
            <div
              key={artist.id}
              onClick={() => handleArtistChange(artist.name)}
              className={cn(
                "flex w-[364px] cursor-pointer items-center gap-4 rounded-lg border border-primary/30 bg-primary/10 p-4 shadow-sm transition-all",
                artistName === artist.name
                  ? "cursor-default bg-primary-light/60 shadow-xl hover:bg-none"
                  : "hover:bg-primary-light/40",
              )}
            >
              <Image
                src={artist.images[0]?.url ? artist.images[0]?.url : ""}
                alt={`${artist.name}'s picture`}
                width={100}
                height={100}
                className="inline-block size-16 rounded-full ring-2 ring-primary"
              />

              <p className="font-bold">{artist.name}</p>
            </div>
          ))}
    </section>
  );
}
