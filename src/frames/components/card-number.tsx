import React from 'react';
import { CARD_NUMBER_FRAME } from '../config/config';

export const CardNumber: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => (
    <div
        {...props}
        className={`${
            className !== undefined ? +`${className} ${CARD_NUMBER_FRAME}` : CARD_NUMBER_FRAME
        }`}
    />
);
