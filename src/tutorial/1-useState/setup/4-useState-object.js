import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Tomas',
        age: 28,
        message: 'Learning React',
    });

    const [name, setName] = useState('Pedro');
    const [age, setAge] = useState(24);
    const [message, setMessage] = useState('Random Message');

    const changeMessage = () => {
        setPerson({ ...person, message: 'Sos tremendo Burraso Tomas!' });
    };
    return (
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className='btn' onClick={changeMessage}>
                Change Message
            </button>
        </>
    );
};

export default UseStateObject;
