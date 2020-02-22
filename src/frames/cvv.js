import React from 'react';
import { CVV_FRAME } from './config';

export function Cvv(props) {
    return (
        <div
            {...props}
            className={
                props.className !== undefined ? +`${props.className} ${CVV_FRAME}` : CVV_FRAME
            }
        />
    );
}
