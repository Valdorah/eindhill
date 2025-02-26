"use client"

import * as React from "react"
import { Social } from "@/components/ui/social"

export const Footer = () => {
    return (
        <footer
            className="
                bg-secondary
                text-white
                px-4
                flex
                justify-between
                items-center
            "
        >
            <img
                className="size-16 lg:size-24"
                src="/images/eindhill_logo.png"
                alt="eindhill_logo"
            />

            <span
                className="flex gap-4 mr-3"
            >
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
    )
}