const {v4} = require('uuid');

const uuid = v4;

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

function sortGames(a, b) {
    return a.createdOn > b.createdOn ? 1 : -1;
}

function createGame({id, board, status}) {
    return {
        id: id ? id : uuid(),
        board,
        status,
        squares: Array(9).fill(null),
        createdOn: new Date().getTime()
    }
}

function getAllIndexes(arr, val) {
    const indexes = [];
    arr.forEach((i, index) => {
        if (i === val) {
            indexes.push(index);
        }
    });
    return indexes;
}

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    calculateWinner,
    sortGames,
    createGame,
    getAllIndexes,
    getRandom
};