"use client"

import * as React from "react"

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
            <a
                href="https://discord.gg/ME3Hbfty"
                className="
                    flex
                    gap-4
                    mr-3
                    text-2xl
                    md:text-4xl"
            >
                <i className="fa-brands fa-discord"></i>
                <i className="fa-brands fa-instagram"></i>
            </a>
        </footer>
    )
}