"use client"

import * as React from "react"

import {
    Table as ShadTable,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type Table from "@/models/Table.ts";
import {cn} from "@/lib/utils.ts";

export function SimpleTable(props: Table) {
    const { caption, columns, values } = props
    return (
        <ShadTable className='border'>
            {caption ? (<TableCaption>{caption}</TableCaption>) : ''}
            <TableHeader className='bg-primary'>
                <TableRow>
                    {
                        columns.map(column => (
                            <TableHead
                                className={cn('text-secondary', column.className)}
                            >
                                {column.value}
                            </TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody className='bg-secondary'>
                {
                    values.map((value : any) => (
                        <TableRow>
                            {
                                columns.map(column => (
                                    <TableCell
                                        className={column.className}
                                    >
                                        {value[column.key]}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </ShadTable>
    )
}