import React from 'react';
import './styles.scss';

function Input({id, text}) {
    return (
        <div className="input">
            <label for={id}>{id}</label>
            <input id={id} type={text}></input>
        </div>
    )
}

export default Input;