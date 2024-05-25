"use client"

import * as React from "react"

export const Footer = () => {
    return (
        <footer className="bg-secondary text-white p-4 flex justify-between items-center">
            <img
                className="size-16 lg:size-32"
                src="/images/eindhill_logo.png"
                alt="eindhill_logo"
            />
            <p>Discord</p>
        </footer>
    )
}