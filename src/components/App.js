import '../styles/styles.css';
import React from 'react';
import Calculator from '../layout/Calculator';
import { CalculatorStore } from '../contexts/CalculatorContext';


const app = () => {
    return(
        <div className="app">
            <CalculatorStore>
                <Calculator/>
            </CalculatorStore>
        </div>
    )
};

export default app;