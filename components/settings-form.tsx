"use client";

import React, {useState} from "react";
import {Store} from ".prisma/client";
import {Heading} from "@/components/heading";
import {Button} from "@/components/ui/button";
import {Trash} from "lucide-react";

interface SettingsFormProps {
    initialData: Store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({initialData}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={"Settings"} description={"Manage store preferences"}/>
                <Button
                    disabled={loading}
                    variant="destructive"
                    size="sm"
                    onClick={() => setOpen(true)}
                >
                    <Trash className="h-4 w-4"/>
                </Button>
            </div>
        </>
    )
}