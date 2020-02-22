import React from 'react';
import { EPIRY_DATE_FRAME } from './config';

export function ExpiryDate(props) {
    return (
        <div
            {...props}
            className={
                props.className !== undefined
                    ? +`${props.className} ${EPIRY_DATE_FRAME}`
                    : EPIRY_DATE_FRAME
            }
        />
    );
}
