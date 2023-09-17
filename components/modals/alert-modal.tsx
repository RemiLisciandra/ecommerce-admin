"use client";

import React, {useContext} from "react";
import {Modal} from "@/components/ui/modal";
import {Button} from "@/components/ui/button";
import AlertModalContext from '@/components/modals/alert-modal-context';

interface AlertModalProps {
    isOpen: boolean;
    loading: boolean;
    onClose?: () => void;
    onConfirm?: () => Promise<void>;
}

export const AlertModal: React.FC<AlertModalProps> = ({isOpen, loading, onClose, onConfirm}) => {
    const context = useContext(AlertModalContext);

    const handleOnClose = onClose || context.onClose;
    const handleOnConfirm = onConfirm || context.onConfirm;

    return (
        <Modal
            title="Are you sure?"
            description="This action cannot be undone."
            isOpen={isOpen}
            onClose={handleOnClose}
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={loading} variant="outline" onClick={handleOnClose}>
                    Cancel
                </Button>
                <Button disabled={loading} variant="destructive" onClick={handleOnConfirm}>
                    Continue
                </Button>
            </div>
        </Modal>
    );
};