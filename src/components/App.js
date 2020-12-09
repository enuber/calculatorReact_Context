import '../styles/styles.css';
import React from 'react';
import Calculator from '../layout/Calculator';
import { CalculatorStore } from '../contexts/CalculatorContext';


const app = () => {
    return(
        <div className="app">
            <h1 style={{textAlign: "center"}}>Calculator Using React Context</h1><br/>
            <CalculatorStore>
                <Calculator/>
            </CalculatorStore>
        </div>
    )
};

export default app;