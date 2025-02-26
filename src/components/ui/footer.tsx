"use client";

import * as React from "react";
import { Social } from "@/components/ui/social";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-secondary px-4 text-white">
      <img
        className="size-16 lg:size-24"
        src="/images/eindhill_logo.png"
        alt="eindhill_logo"
      />

      <span className="mr-3 flex gap-4">
        <Social
          link="https://discord.gg/ME3Hbfty"
          socialNetworkName="discord"
        />
        <Social
          link="https://www.instagram.com/eindhill?igsh=MWt3cHIxZ3libDhtZQ=="
          socialNetworkName="instagram"
        />
      </span>
    </footer>
  );
};
