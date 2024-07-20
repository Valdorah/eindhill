"use client"

import * as React from "react"

import {
    Card as ShadCard,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type Card from "@/models/Card.ts";
import {Button} from "@/components/ui/button.tsx";

export function LinkCard(card: Card) {
    return (
        <ShadCard
            className='flex flex-col justify-between'
        >
            <CardHeader>
                {
                    card.image ? (<img src={card.image} />) : ''
                }
                <CardTitle>{ card.title }</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{ card.content }</p>
            </CardContent>
            <CardFooter
                className='justify-end'
            >
                <a
                    href={card.url}
                >
                    <Button
                        className='text-secondary'
                    >
                        { card.textLink ?? 'Consulter' }
                    </Button>
                </a>
            </CardFooter>
        </ShadCard>
    )
}