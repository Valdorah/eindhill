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
            className={`bg-center bg-cover sm:!bg-none`}
            style={{ backgroundImage: card.image ? `url(${card.image})` : '' }}
        >
            <div className='flex'>
                <div className='hidden sm:flex flex-col justify-center'>
                    {
                        card.image ? (<img className='w-20 h-20 rounded-lg ml-6' src={card.image} />) : ''
                    }
                </div>
                <div className='flex-1 flex flex-col justify-between bg-secondary/75 sm:bg-transparent rounded-lg'>
                    <CardHeader>
                        <CardTitle className='text-primary text-xl m-0 p-0'>{ card.title }</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{ card.content }</p>
                    </CardContent>
                </div>
            </div>
        </ShadCard>
    )
}