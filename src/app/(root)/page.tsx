"use client";

import { motion } from "framer-motion";
import { RiSpotifyFill } from "react-icons/ri";
import AuthBtn from "~/components/auth-btn";
import { AuroraBackground } from "~/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <p className="text-center text-3xl font-bold text-primary md:text-7xl">
          Your Personal Show Tracker
        </p>

        <p className="py-4 text-center text-lg font-light text-text-dark md:text-3xl">
          Discover upcoming shows from your favorite Spotify artists, <br /> all
          in one place.
        </p>

        <AuthBtn
          authType="sign-in"
          className="flex h-fit w-[300px] items-center gap-3 rounded-2xl"
        >
          <RiSpotifyFill className="size-6 md:size-8" />
          <p className="text-lg font-semibold md:text-3xl">Find Shows</p>
        </AuthBtn>
      </motion.div>
    </AuroraBackground>
  );
}
