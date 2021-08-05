import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([]);

    //Hacemos la peticion y despues lo pasamos a json.Para las peticiones apis o servidores siempre usamos el async await.

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    //Si no le pasamos la dependencia vacia, esto nos va a generar un loop infinito.

    return (
        <>
            <h3>GitHub users</h3>
            <ul className='users'>
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default UseEffectFetchData;
