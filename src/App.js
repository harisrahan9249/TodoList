import React from 'react';
import {TodoItem} from './TodoItem';
 
export default function App() {
    return (
        <div>
            <TodoItem text="take out the trash"/>
            <TodoItem text="buy vegetables"/>
            <TodoItem text="pay the bills"/>
        </div>
    );
};
