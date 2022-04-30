import React from 'react';
import {useState} from 'react';


const Counter = () => {
    const [counter,setCounter] = useState(0);
    return (
        <>
        <h1 data-testid='Counter'> {counter} </h1>
        <button data-testid="button-up" onClick={ () => setCounter(counter + 1)  }> 
        Increment
        </button>
        <button data-testid="button-down" onClick={ () => setCounter(counter - 1)  }> 
        Decrement
        </button>
        </>
    );
};

export default Counter;

