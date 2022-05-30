import React from 'react';
import {TodoItem} from './TodoItem';
import {Asking} from './Asking';
 
export default function App() {
    return (
        <div>
            <TodoItem text="take out the trash"/>
            <TodoItem text="buy vegetables"/>
            <TodoItem text="pay the bills"/>
            <Asking text="What excuse you want to say"/>
        </div>
    );
};
