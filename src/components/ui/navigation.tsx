"use client"

import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const pages: { id: number, title: string; href: string; }[] = [
    {
        id: 1,
        title: "Présentation",
        href: "/presentation"
    },
    {
        id: 2,
        title: "Les races",
        href: "/races"
    },
    {
        id: 3,
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
                        <NavigationMenuItem key={page.id}>
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