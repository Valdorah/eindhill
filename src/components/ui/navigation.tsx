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
        title: "accueil",
        href: "/"
    },
    {
        id: 2,
        title: "univers",
        href: "/univers"
    },
    {
        id: 3,
        title: "règles",
        href: "/regles"
    },
    {
        id: 4,
        title: "campagne",
        href: "/campagne"
    },
    {
        id: 5,
        title: "personnages",
        href: "personnages"
    },
    {
        id: 6,
        title: "bestiaire",
        href: "/bestiaire"
    },
    {
        id: 7,
        title: "cartes",
        href: "/cartes"
    },
    {
        id: 8,
        title: "ressources",
        href: "/ressources"
    },
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