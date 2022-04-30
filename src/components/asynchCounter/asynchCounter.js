import React from 'react';
import {useState} from 'react';

const AysnchCounter = () => {
    const [counter,setCounter] = useState(0);
    const delayCount = () => {
        setTimeout(() => {
            setCounter(counter+1);

        },500);
    }
    return (
        <>
        <h1 data-testid='Counter'> {counter} </h1>
        <button data-testid="button-up" onClick={ delayCount  }> 
        Increment
        </button>
        <button data-testid="button-down" onClick={ delayCount }> 
        Decrement
        </button>
        </>
    );
};

export default AysnchCounter;