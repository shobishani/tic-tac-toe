import React, {useCallback, useEffect, useState} from 'react';
import Board from '../components/board/Board';
import {GameBoard, GameWrapper, InfoWrapper, Status} from "./styled";
import requests from "../requests/requests";

const {createGame, updateGame, deleteGame} = requests.game;

const _Game = (props) => {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = useCallback((i) => {
        setLoading(true);
        updateGame({id: state.id, index: i})
            .then(({data}) => setState(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [state]);

    const createNewGame = useCallback(() => {
        setLoading(true);
        createGame()
            .then(({data}) => {
                setState(data)
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const onRestart = useCallback(() => {
        createNewGame();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        createNewGame();
        return () => {
            if (state && state.id) {
                deleteGame({id: state.id}).then(console.warn).catch(console.error)
            }
        }
        // eslint-disable-next-line
    }, []);

    if (!state) return null;

    return (
        <GameWrapper>
            {
                state &&
                <GameBoard>
                    <Board
                        disabled={loading || state.status !== 'RUNNING'}
                        squares={state.squares}
                        onClick={(i) => handleClick(i)}
                    />
                </GameBoard>
            }
            <InfoWrapper>
                <Status>
                    {state ? state.status : 'Getting ready'}
                </Status>
                {
                    state && state.status !== 'RUNNING' && <button onClick={onRestart}>Restart</button>
                }
            </InfoWrapper>
        </GameWrapper>
    );
};

export default _Game;