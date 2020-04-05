import React from 'react';
import {Button} from "./styled";

function Square(props) {
    return (
        <Button disabled={props.disabled} onClick={props.onClick}>
            {props.value}
        </Button>
    )
}

export default Square;