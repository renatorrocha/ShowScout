"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "~/components/ui/sidebar";
import { AudioLines, Ticket, Users } from "lucide-react";
import { useSession } from "next-auth/react";
import UserAvatar from "./user-avatar";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

// TODO: remove this in the future
const LinkAvulso = [
  {
    label: "Next Gigs",
    href: "/dashboard/your-gigs",
    icon: (
      <Ticket className="size-5 flex-shrink-0 text-secondary dark:text-primary-dark" />
    ),
  },
  {
    label: "Followed Artists",
    href: "/dashboard/followed-artists",
    icon: (
      <Users className="size-5 flex-shrink-0 text-secondary dark:text-primary-dark" />
    ),
  },
];

export function LeftSidebar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {LinkAvulso.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                className={cn(
                  pathname === link.href
                    ? "bg-primary/40"
                    : "hover:bg-primary/20",
                )}
              />
            ))}
          </div>
        </div>

        <UserAvatar session={session} />
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-primary"
    >
      <AudioLines className="size-6 flex-shrink-0" />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre font-medium text-black dark:text-white"
      >
        SpotGig
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/dashboard"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-primary"
    >
      <AudioLines className="size-6 flex-shrink-0" />
    </Link>
  );
};
