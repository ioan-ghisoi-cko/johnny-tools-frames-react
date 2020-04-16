import React from 'react';
import { CVV_FRAME } from '../config/config';

export const Cvv: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
    <div
        {...props}
        className={`${className !== undefined ? +`${className} ${CVV_FRAME}` : CVV_FRAME}`}
    />
);
