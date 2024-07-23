"use client"

import * as React from "react"
import { Social } from "@/components/ui/social"

export const Footer = () => {
    return (
        <footer
            className="
                bg-secondary
                text-white
                p-4
                flex
                justify-between
                items-center
            "
        >
            <img
                className="size-16 lg:size-32"
                src="/images/eindhill_logo.png"
                alt="eindhill_logo"
            />

            <figure>
                <blockquote className="italic text-sm mx-2">
                    "Quand le Chaos darde ses ultimes rayons sur nos terres ravagées par les conflits divins, les héros
                    porteurs irréfutables d'espoir, propagent leurs lumières sur notre monde de perpétuel changement.
                    Quand les tambours de guerre résonneront enfin dans les cieux transcendés, alors nous mortels
                    esseulés et fragiles, vivront de nouveau dans la peur."
                </blockquote>
            </figure>

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