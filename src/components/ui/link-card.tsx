"use client";

import * as React from "react";

import {
  Card as ShadCard,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type Card from "@/models/Card.ts";
import { Button } from "@/components/ui/button.tsx";

export function LinkCard(card: Card) {
  return (
    <ShadCard
      className={`bg-cover bg-center lg:!bg-none`}
      style={{ backgroundImage: card.image ? `url(${card.image})` : "" }}
    >
      <div className="flex h-full flex-col justify-between rounded-lg bg-secondary/75 lg:bg-transparent">
        <CardHeader>
          <div className="hidden lg:block">
            {card.image ? <img className="w-full" src={card.image} /> : ""}
          </div>
          <CardTitle className="text-primary">{card.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{card.content}</p>
        </CardContent>
        {card.url ? (
          <CardFooter className="justify-end">
            <a href={card.url}>
              <Button className="text-secondary">
                {card.textLink ?? "Consulter"}
              </Button>
            </a>
          </CardFooter>
        ) : (
          ""
        )}
      </div>
    </ShadCard>
  );
}
