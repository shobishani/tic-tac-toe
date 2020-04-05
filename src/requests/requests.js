import axios from '../utils/axios';

const requests = {
    game: {
        createGame: function () {
            const board = `Game No ${Math.abs(Math.random())}`
            return axios.post('/games', {board})
        },
        getGame: function ({id}) {
            return axios.get(`/games/${id}`);
        },
        updateGame: function ({id, index}) {
            return axios.put(`/games/${id}`, {index});
        },
        deleteGame: function ({id}) {
            return axios.delete(`/games/${id}`);
        }
    }
};

export default requests;