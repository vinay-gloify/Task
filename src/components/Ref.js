import React, { useState, useRef } from 'react';

const Ref = () => {
    const user = useRef(null);
    const [name, setName] = useState('');

    const handleName = (e) => {
        e.preventDefault();
        setName(user.current.value);
    }

    return (
        <div>
            <h1>{name}</h1>
            <label htmlFor="">Ref Example</label>
            <input type="text" ref={user} />
            <button onClick={handleName}>setName</button>
        </div>
    )
}

export default Ref