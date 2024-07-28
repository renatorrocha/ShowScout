"use client";

import { useSession } from "next-auth/react";
import ArtistsContainer from "../_components/artists-container";
import ShowsContainer from "../_components/shows-container";
import { Separator } from "~/components/ui/separator";

export default function YourGigs() {
  const { data: session } = useSession();

  if (!session) return <div>Loading...</div>;

  return (
    <main className="flex size-full flex-1 gap-4">
      <section className="flex h-full w-[400px] flex-col overflow-hidden md:py-8">
        <ArtistsContainer accessToken={session?.accessToken} />
      </section>

      <Separator orientation="vertical" className="rounded-md shadow-2xl" />

      <section className="flex h-full flex-1 flex-col overflow-hidden md:py-8">
        <ShowsContainer />
      </section>
    </main>
  );
}
