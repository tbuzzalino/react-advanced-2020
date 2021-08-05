import React, { useState } from 'react';

const ErrorExample = () => {
    const handleClick = () => {
        title = 'Hola Mundo';
        console.log(title);
    };
    let title = 'titulo random';
    return (
        <>
            <h2>{title}</h2>
            <button type='button' className='btn' onClick={handleClick}>
                Cambiar titulo
            </button>
        </>
    );
};

export default ErrorExample;
