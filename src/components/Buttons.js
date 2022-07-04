import React from 'react'
import { Button } from '@themesberg/react-bootstrap';

export function ButtonAFilled(props) {
    return (
        <Button variant="primary" size="sm" className="m-1 px-4 m-0 rounded-1" style={{height:"35px"}}>{props.title}</Button>
    )
}

 
export function ButtonAOutlined(props) {
    return (
        <Button 
        variant="outline-primary" size="sm" 
         className="m-1 px-4 rounded-1"
          style={{height:"35px"}}
          onclick={props.onclick}
        >{props.title}</Button>
    )
}