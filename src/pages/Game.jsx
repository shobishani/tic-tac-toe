import React, {useCallback, useState} from 'react';
import Board from '../components/board/Board';
import {GameBoard, GameWrapper, InfoWrapper, Status} from "./styled";

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const _Game = (props) => {
    const [state, setState] = useState({
        history: [{
            squares: Array(9).fill(null)
        }],
        xIsNext: true,
        stepNumber: 0,
    });

    const handleClick = useCallback((i) => {
        const history = state.history.slice(0, state.stepNumber + 1)
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = state.xIsNext ? 'X' : 'O';
        setState({
            ...state,
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !state.xIsNext,
            stepNumber: history.length,
        });
    }, [state]);


    const {history, stepNumber, xIsNext} = state;
    const {squares} = history[stepNumber];
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <GameWrapper>
            <GameBoard>
                <Board squares={squares} onClick={(i) => handleClick(i)}/>
            </GameBoard>
            <InfoWrapper>
                <Status>{status}</Status>
            </InfoWrapper>
        </GameWrapper>
    );
};

export default _Game;