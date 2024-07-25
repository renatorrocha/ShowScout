"use client";

import type { Session } from "next-auth";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { useSidebar } from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";
import AuthBtn from "~/components/auth-btn";
import { LogOut } from "lucide-react";

export default function UserAvatar({ session }: { session: Session | null }) {
  const { open, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "group/avatar flex items-center justify-center gap-4 rounded-lg border border-primary-light",
        open && "bg-primary/10",
      )}
      animate={{
        padding: open ? "1rem" : "0px",
        borderStyle: open ? "solid" : "none",
        justifyContent: open ? "space-between" : "center",
      }}
    >
      <div className="flex items-center justify-start gap-4">
        <Avatar>
          <AvatarImage src={session?.user.image ?? ""} />
          <AvatarFallback>{session?.user.name?.charAt(0)}</AvatarFallback>
        </Avatar>

        <motion.span
          animate={{
            display: animate
              ? open
                ? "inline-block"
                : "none"
              : "inline-block",
            opacity: animate ? (open ? 1 : 0) : 1,
          }}
          className="!m-0 inline-block whitespace-pre !p-0 font-semibold text-neutral-700 transition dark:text-neutral-200"
        >
          {session?.user.name}
        </motion.span>
      </div>

      <AuthBtn
        authType="sign-out"
        className={cn(open ? "bg-transparent hover:bg-red-400/20" : "hidden")}
        size={"icon"}
      >
        <LogOut className="text-red-400" />
      </AuthBtn>
    </motion.div>
  );
}
