import React from 'react';

import Square from '../square/Square';
import {Row, Wrapper} from "./styled";

const _Board = (props) => {
    const {squares, disabled} = props;

    function renderSquare(i) {
        return <Square disabled={disabled} value={squares[i]} onClick={() => props.onClick(i)}/>;
    }

    return (
        <Wrapper>
            <Row>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </Row>
            <Row>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </Row>
            <Row>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </Row>
        </Wrapper>
    );
};


export default _Board;