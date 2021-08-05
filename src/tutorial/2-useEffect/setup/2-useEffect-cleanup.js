import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        console.log('useEffect');
        window.addEventListener('resize', checkSize);
        return () => {
            console.log('Pasando la escoba');
            window.removeEventListener('resize', checkSize);
        };
    });

    console.log('render');
    return (
        <>
            <p>Window</p>
            <h2>{size} Pixels</h2>
        </>
    );
};

export default UseEffectCleanup;
