"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) router.push("/");

  return (
    <div>
      Dashboard
      <button onClick={() => signOut()}>Sign-Out</button>
    </div>
  );
}
