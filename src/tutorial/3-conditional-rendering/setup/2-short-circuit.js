import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    // Aca lo que buscamos hacer es un renderizado dependiendo del valor que tome el useState.
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);
    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello world';

    return (
        <>
            {/* <h1>{firstValue}</h1>
            <h1>value: {secondValue}</h1> */}
            <h2>{text || 'Aca no hay nada padre'}</h2>
            <button className='btn' onClick={() => setIsError(!isError)}>
                tooggle error
            </button>
            {/* Con el boton lo que hacemos es modificar el valor que va a tomar isError, si es true lo va a setear en false y viceversa */}
            {/* {!text && <h3>Hola toto</h3>}
            {/* Si no es true no renderices el H1 */}
            {/* {text && <h3>Hola toto</h3>} */}
            {/* Si es true renderizame el H1 */}
            {isError ? <p>Hay un error</p> : <p>No se encontro ningun error</p>}
            {isError && <h2>Error...</h2>}
        </>
    );
};

export default ShortCircuit;
