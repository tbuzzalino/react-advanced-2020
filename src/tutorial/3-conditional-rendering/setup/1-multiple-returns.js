import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('default user');
    //Hacemos la peticion mediante el fetch
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                }
            })
            .then((response) => {
                const { login } = response;
                setUser(login);
                setIsLoading(false);
            })

            .catch((err) => console.log(err));
    }, []);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    if (isError) {
        return (
            <div>
                <h1>Error...</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>{user}</h1>
        </div>
    );
};

export default MultipleReturns;
