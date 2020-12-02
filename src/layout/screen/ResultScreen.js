import '../../styles/resultScreen.css';
import React, { useContext } from 'react';
import CalculatorContext from '../../contexts/CalculatorContext';

const ResultScreen = () => {
    const calculatorInfo = useContext(CalculatorContext);

    return (
        <div className="resultScreen">
            { calculatorInfo.displayValue }
        </div>
    )
};

export default ResultScreen;