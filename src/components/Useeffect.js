import React, { useEffect, useState } from 'react';

const Useeffect = () => {

    const [user, setUser] = useState('');

    useEffect(() => {
        const userdata = async () => {
            const req = await fetch('https://jsonplaceholder.typicode.com/users');
            const response = await req.json();
            setUser(response.filter(user => user.id < 6).map(user => user.name));
        };
        userdata();
    }, [])

    return (
        <>
            <div>Useeffect Example here</div>
            <ul>
                <li>{user}</li>
            </ul>
        </>
    )
}

export default Useeffect