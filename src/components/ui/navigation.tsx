"use client"

import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const pages: { title: string; href: string; }[] = [
    {
        title: "Présentation",
        href: "/presentation"
    },
    {
        title: "Les races",
        href: "/races"
    },
    {
        title: "Les classes",
        href: "/classes"
    }
]

export function Navigation() {
    return (
        <div className="bg-secondary p-4">
            <NavigationMenu>
                <NavigationMenuList>
                    { pages.map(page => (
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href={page.href}
                                className={navigationMenuTriggerStyle()}
                            >
                                { page.title }
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )) }
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}