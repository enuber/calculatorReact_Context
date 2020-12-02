import '../../styles/keypad.css';
import React, { useContext } from 'react';
import KeypadRow from './KeypadRow';
import Button from '../../components/Button';
import CalculatorContext from '../../contexts/CalculatorContext';

const Keypad = () => {
    const calcInfo = useContext(CalculatorContext);

    const { displayValue } = calcInfo;
    const checkClearMethod = displayValue === '0';
    const clearText = checkClearMethod ? 'CE' : 'C';

    return(
        <section className="keypad">
            <KeypadRow>
                <Button onButtonPress={() => checkClearMethod ? calcInfo.clearAll() : calcInfo.clearDisplay()}>{ clearText }</Button>
                <Button onButtonPress={() => calcInfo.toggleSign()}>±</Button>
                <Button onButtonPress={() => calcInfo.percentInput()}>%</Button>
                <Button type="Orange" onButtonPress={() => calcInfo.doMath('/')}>÷</Button>
            </KeypadRow>
            <KeypadRow>
                <Button onButtonPress={() => calcInfo.digitInput(7)}>7</Button>
                <Button onButtonPress={() => calcInfo.digitInput(8)}>8</Button>
                <Button onButtonPress={() => calcInfo.digitInput(9)}>9</Button>
                <Button type="Orange" onButtonPress={() => calcInfo.doMath('*')}>x</Button>
            </KeypadRow>
            <KeypadRow>
                <Button onButtonPress={() => calcInfo.digitInput(4)}>4</Button>
                <Button onButtonPress={() => calcInfo.digitInput(5)}>5</Button>
                <Button onButtonPress={() => calcInfo.digitInput(6)}>6</Button>
                <Button type="Orange" onButtonPress={() =>  calcInfo.doMath('-')}>—</Button>
            </KeypadRow>
            <KeypadRow>
                <Button onButtonPress={() => calcInfo.digitInput(1)}>1</Button>
                <Button onButtonPress={() => calcInfo.digitInput(2)}>2</Button>
                <Button onButtonPress={() => calcInfo.digitInput(3)}>3</Button>
                <Button type="Orange" onButtonPress={() => calcInfo.doMath('+')}>+</Button>
            </KeypadRow>
            <KeypadRow>
                <Button type="Large" onButtonPress={() => calcInfo.digitInput(0)}>0</Button>
                <Button onButtonPress={() => calcInfo.decimalInput()}>.</Button>
                <Button type="Orange" onButtonPress={() => calcInfo.doMath('=')}>=</Button>
            </KeypadRow>
        </section>
    )
};

export default Keypad;