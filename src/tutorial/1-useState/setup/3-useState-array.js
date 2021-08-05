import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const emptyArray = [];
    const removeItem = (id) => {
        // Lo que hago aca con este filter es dejar los elementos que no matcheen con el id que quiero sacar en el estado del componente.
        // Le seteo el nuevo estado al componente con lo que queda despues del filter.
        // let newPeople = people.filter((p) => p.id !== id)
        // setPeople(newPeople);
        setPeople((oldPeople) => {
            let newPeople = oldPeople.filter((p) => p.id !== id);
            return newPeople;
        });
    };
    return (
        <>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>Remove</button>
                    </div>
                );
            })}
            <button className='btn' onClick={() => setPeople(emptyArray)}>
                {/* Con el onClick lo que hacemos es setear el estado como un array, si no lo llamamos con una funcion flecha lo que pasa es se ejecuta ni bien se renderiza y nos deja el estado del componente como un array vacio.*/}
                Clear Elements
            </button>
        </>
    );
};

export default UseStateArray;
