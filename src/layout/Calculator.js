import '../styles/calculator.css';
import React from 'react';
import Screen from './screen/Screen';
import Keypad from './keypad/Keypad';

const Calculator = () => {
    return (
        <main className="calculator">
            <Screen/>
            <Keypad/>
        </main>
    );
};

export default Calculator;