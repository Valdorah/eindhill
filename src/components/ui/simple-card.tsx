"use client"

import * as React from "react"

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
            className='flex flex-col justify-between'
        >
            <CardHeader>
                <CardTitle className='text-primary text-xl m-0 p-0'>{ card.title }</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{ card.content }</p>
            </CardContent>
        </ShadCard>
    )
}