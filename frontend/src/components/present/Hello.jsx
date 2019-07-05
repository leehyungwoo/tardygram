import React from 'react';

const Hello = (props)=>{
    const {name,age,love} = props.data
    return <p>
        Hello, my name is {name}<br/>
        Hello, my name is {age}<br/>
        Hello, my name is {love}<br/>
        </p>
}

export default Hello