import axios from 'axios';

const initialState = {
    player: {},
    isLoading: false
};

const GET_PLAYERS = 'GET_PLAYERS'

export const get_players = () => {
    return {
        type: GET_PLAYERS,
        payload: axios.get('http://localhost:3001/api/players')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export default function playerReducer(state = initialState, action){
    switch(action.type){
        case `${GET_PLAYERS}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_PLAYERS}_FULFILLED`:

            return {...state, 
                player: action.payload
            }
        case `${GET_PLAYERS}_REJECTED`:
            return {
                ...state,
                isLoading: false
            }

    default:
    return state;
}
}