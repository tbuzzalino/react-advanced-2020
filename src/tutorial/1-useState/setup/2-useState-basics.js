import React, { useState } from 'react';

const UseStateBasics = () => {
    const [text, setText] = useState('Hola wat happend');
    const handleClick = () => {
        if (text === 'Hola wat happend') {
            setText('Alo');
        } else {
            setText('Hola wat happend');
        }
    };
    return (
        <>
            <h1>{text}</h1>
            <button className='btn' onClick={handleClick}>
                Cambiar
            </button>
        </>
    );
};

export default UseStateBasics;
