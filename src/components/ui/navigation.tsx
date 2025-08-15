"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavigationItemModel from "@/models/NavigationItemModel.ts";
import {cn} from "@/lib/utils.ts";

export function Navigation({ pages }: { pages: NavigationItemModel[] }) {
  return (
    <div className="bg-secondary p-4">
      <NavigationMenu>
        <NavigationMenuList>
          {pages.map((page) => (
            <NavigationMenuItem key={page.id}>
              <NavigationMenuLink
                href={page.href}
                className={cn(navigationMenuTriggerStyle(), "text-xl")}
              >
                {page.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
