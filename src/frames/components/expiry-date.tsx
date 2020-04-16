import React from 'react';
import { EXPIRY_DATE_FRAME } from '../config/config';

export const ExpiryDate: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => (
    <div
        {...props}
        className={`${
            className !== undefined ? +`${className} ${EXPIRY_DATE_FRAME}` : EXPIRY_DATE_FRAME
        }`}
    />
);
