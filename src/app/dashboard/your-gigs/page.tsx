"use client";

import { useSession } from "next-auth/react";
import ArtistsContainer from "../_components/artists-container";
import ShowsContainer from "../_components/shows-container";
import { Separator } from "~/components/ui/separator";

export default function YourGigs() {
  const { data: session } = useSession();

  if (!session) return <div>Loading...</div>;

  return (
    <main className="flex size-full flex-1 flex-col gap-4 md:flex-row">
      <section className="flex h-full w-full flex-col overflow-hidden py-4 md:w-[400px] md:py-8">
        <ArtistsContainer accessToken={session?.accessToken} />
      </section>

      <Separator
        orientation="vertical"
        className="hidden rounded-md shadow-2xl md:block"
      />

      <section className="flex h-full flex-1 flex-col overflow-hidden py-4 md:py-8">
        <ShowsContainer />
      </section>
    </main>
  );
}
