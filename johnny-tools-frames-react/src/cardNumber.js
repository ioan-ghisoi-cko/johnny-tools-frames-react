import React from 'react';
import { CARD_NUBER_FRAME } from './config';

export function CardNumber(props) {
    return (
        <div
            {...props}
            className={
                props.className !== undefined
                    ? +`${props.className} ${CARD_NUBER_FRAME}`
                    : CARD_NUBER_FRAME
            }
        />
    );
}
