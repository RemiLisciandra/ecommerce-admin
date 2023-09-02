import React from 'react';

interface AlertModalContextProps {
    onClose: () => void;
    onConfirm: () => void;
}

const AlertModalContext = React.createContext<AlertModalContextProps>({
    onClose: () => {},
    onConfirm: () => {},
});

export default AlertModalContext;
