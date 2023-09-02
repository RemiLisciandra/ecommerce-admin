import React from 'react';
import {AlertModal} from '@/components/modals/alert-modal';
import AlertModalContext from '@/components/modals/alert-modal-context';

const ParentComponent: React.FC = () => {
    const onClose = () => {
        return null;
    };

    const onConfirm = () => {
        return null;
    };

    return (
        <AlertModalContext.Provider value={{onClose, onConfirm}}>
            <AlertModal isOpen={true} loading={false}/>
        </AlertModalContext.Provider>
    );
};

export default ParentComponent;
