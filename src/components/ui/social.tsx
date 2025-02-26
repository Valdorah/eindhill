"use client";

import * as React from "react";
import SocialModel from "@/models/SocialModel.ts";

export const Social = ({ link, socialNetworkName }: SocialModel) => {
  const icon: string = `fa-brands fa-${socialNetworkName}`;

  return (
    <a href={link} target="_blank" className="text-2xl md:text-3xl">
      <i className={icon}></i>
    </a>
  );
};
