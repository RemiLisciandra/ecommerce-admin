"use client";

import axios from "axios";
import React, {useState, useContext} from "react";
import {Copy, Edit, MoreHorizontal, Trash} from "lucide-react";
import {toast} from "react-hot-toast";
import {useRouter, useParams} from "next/navigation";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {AlertModal} from "@/components/modals/alert-modal";
import AlertModalContext from "@/components/modals/alert-modal-context";

import {BillboardColumn} from "./columns";

interface CellActionProps {
    data: BillboardColumn;
}

export const CellAction: React.FC<CellActionProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const onConfirm = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/${params.storeId}/billboards/${data.id}`);
            toast.success('Billboard deleted.');
            router.refresh();
        } catch (error) {
            toast.error('Make sure you removed all categories using this billboard first.');
        } finally {
            setOpen(false);
            setLoading(false);
        }
    };

    return (
        <AlertModalContext.Provider value={{onClose: () => setOpen(false), onConfirm}}>
            <AlertModal isOpen={open} loading={loading}/>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={onConfirm}>
                        <Copy className="mr-2 h-4 w-4"/> Copy Id
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/${params.storeId}/billboards/${data.id}`)}>
                        <Edit className="mr-2 h-4 w-4"/> Update
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className="mr-2 h-4 w-4"/> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </AlertModalContext.Provider>
    );
};