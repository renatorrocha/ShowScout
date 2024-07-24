"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) router.push("/dashboard");

  return (
    <main>
      HomePage
      <div className="flex w-full gap-4">
        <button onClick={() => signIn("spotify")}>Login</button>
      </div>
      <button onClick={() => console.log(session)}>See the data</button>
    </main>
  );
}
