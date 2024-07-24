"use client";

import { Button, type ButtonProps } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

interface AuthBtnProps extends ButtonProps {
  children: React.ReactNode;
  authType: "sign-in" | "sign-out";
}

export default function AuthBtn({
  children,
  authType,
  ...props
}: AuthBtnProps) {
  async function handleAuth() {
    if (authType === "sign-in") {
      await signIn("spotify");
    } else {
      await signOut();
    }
  }

  return (
    <Button onClick={handleAuth} {...props}>
      {children}
    </Button>
  );
}
