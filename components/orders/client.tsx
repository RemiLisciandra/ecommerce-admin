"use client";

import {DataTable} from "@/components/data-table";
import {Heading} from "@/components/heading";
import {Separator} from "@/components/ui/separator";
import {columns, OrderColumn} from "./columns";
import React from "react";

interface OrderClientProps {
    data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({data}) => {
    return (
        <>
            <Heading title={`Orders (${data.length})`} description="Manage orders for your store"/>
            <Separator/>
            <DataTable searchKey="products" columns={columns} data={data}/>
        </>
    );
};