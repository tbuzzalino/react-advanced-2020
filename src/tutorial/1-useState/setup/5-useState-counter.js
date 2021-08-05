import React, { useState } from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0);
    };

    const complexIncrease = () => {
        setTimeout(() => {
            // setValue(value + 1);
            setValue((preState) => {
                return preState + 1;
            });
        }, 2000);
    };

    return (
        <>
            <section style={{ margin: '4rem 0' }}>
                <h2>Contador</h2>
                <h1>{value}</h1>
                <button
                    type='button'
                    className='btn'
                    onClick={() => setValue(value + 1)}
                >
                    Aumentar
                </button>
                <button
                    type='button'
                    className='btn'
                    onClick={() => setValue(value - 1)}
                >
                    Disminuir
                </button>
                <button type='button' className='btn' onClick={reset}>
                    Reset
                </button>
            </section>
            <section style={{ margin: '4rem 0' }}>
                <h2>More Complex Contador</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={complexIncrease}>
                    Increase Later
                </button>
            </section>
        </>
    );
};

export default UseStateCounter;
