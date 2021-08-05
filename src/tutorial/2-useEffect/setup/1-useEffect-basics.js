import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (value >= 1) document.title = `Nuevos mensajes(${value})`;
        // Cambiamos el title que nos muestra el navegador.
    }, [value]);
    console.log('se renderizo el componente');
    return (
        <>
            <h1>{value}</h1>
            <button
                className='btn'
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                Aprendiendo el useEffect
            </button>
        </>
    );
};

export default UseEffectBasics;
