"use client";

import * as React from "react";

import {
  Card as ShadCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type Card from "@/models/Card.ts";

export function SimpleCard(card: Card) {
  return (
    <ShadCard
      className={`bg-cover bg-center sm:!bg-none`}
      style={{ backgroundImage: card.image ? `url(${card.image})` : "" }}
    >
      <div className="flex">
        <div className="hidden flex-col justify-center sm:flex">
          {card.image ? (
            <img className="ml-6 h-20 w-20 rounded-lg" src={card.image} />
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between rounded-lg bg-secondary/75 sm:bg-transparent">
          <CardHeader>
            <CardTitle className="m-0 p-0 text-xl text-primary">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{card.content}</p>
          </CardContent>
        </div>
      </div>
    </ShadCard>
  );
}
