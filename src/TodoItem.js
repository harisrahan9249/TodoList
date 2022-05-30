import React from 'react';
import {Toggle} from './Toggle';
 
export function TodoItem(props) {
    return (
        <div>
            <p>{props.text}</p>
            <Toggle/>
        </div>
    )
};