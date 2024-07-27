"use client";

import { useSession } from "next-auth/react";
import ArtistsContainer from "../_components/artists-container";
import { useSearchParams } from "next/navigation";

export default function YourGigs() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const artistName = searchParams.get("artistName") ?? "";

  if (!session) return <div>Loading...</div>;

  return (
    <main className="flex size-full flex-1">
      <section className="flex h-full w-[400px] flex-col overflow-hidden">
        <ArtistsContainer accessToken={session?.accessToken} />
      </section>
      
      <section>{artistName}</section>
    </main>
  );
}
