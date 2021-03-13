
import React from 'react';
import './person.css'
const person = (props) => {
    return (
        <div className="person">
            <h4 onClick = {props.click}> Hey {props.name} , your age is {props.age}</h4>
            <h4>{props.children}</h4>
            <input type="text" onChange={props.changed} value ={props.name} />
        </div>
           
        )
};

export default person;