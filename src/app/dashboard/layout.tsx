import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import { LeftSidebar } from "./_components/left-sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session) redirect("/");

  return (
    <div className="flex h-screen w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 md:flex-row">
      <LeftSidebar />

      <div className="flex flex-1 md:p-2">
        <div className="flex flex-1 flex-col rounded-2xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 pl-4">
          {children}
        </div>
      </div>
    </div>
  );
}
