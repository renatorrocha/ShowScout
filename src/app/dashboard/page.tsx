import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import AuthBtn from "~/components/auth-btn";
import { getFollowedArtists } from "~/lib/actions/spotfiy.actions";
import { getServerAuthSession } from "~/server/auth";

export default async function Dashboard() {
  const session = await getServerAuthSession();

  if (!session) return redirect("/");

  const res = await getFollowedArtists(session.accessToken);

  console.log(res);

  console.log(session.accessToken);

  return (
    <div>
      Dashboard
      <AuthBtn
        authType="sign-out"
        className="flex h-fit items-center gap-3 rounded-2xl"
        variant={"destructive"}
      >
        <LogOut className="size-6 md:size-8" />
        <p className="text-lg font-semibold md:text-3xl">Sign-out</p>
      </AuthBtn>
    </div>
  );
}
