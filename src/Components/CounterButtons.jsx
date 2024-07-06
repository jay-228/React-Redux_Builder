import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { increment,decrement } from '../Store/action';


const CounterButtons = () => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(increment(1));
    };

    const handleReduce = () => {
        dispatch(decrement(1));
    };

    return (
        <div>
           
            <Button onClick={handleAdd} variant="success">ADD</Button>{' '} &nbsp;&nbsp;&nbsp;
            <Button  onClick={handleReduce} variant="danger">REDUCE</Button>
        </div>
    );
};

export default CounterButtons;