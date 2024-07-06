import React from 'react';
import CounterValue from './CounterValue';
import CounterButtons from './CounterButtons';
import Theme from './Theme';



const Counter = () => {
    return (
        <div>
            <Theme />
            <CounterValue />
            <CounterButtons />
        </div>
    );
};

export default Counter;