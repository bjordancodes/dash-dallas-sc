import axios from 'axios';

const initialState = {
    player: [],
    isLoading: false,
    playerName: '',
    email: '',
    address: '',
    phonenumber: 0,
    teamname: 0,
    altteam1: 0,
    altteam2: 0
};

var {playerName, email, address, phonenumber, teamname, altteam1, altteam2} = this.initialState;

const GET_PLAYERS = 'GET_PLAYERS'
const ADD_PLAYERS = 'ADD_PLAYERS'
const UPDATE_PLAYERNAME = 'UPDATE_PLAYERNAME'
const UPDATE_EMAIL = 'UPDATE_EMAIL'
const UPDATE_PHONE = 'UPDATE_PHONE'
const UPDATE_TEAMNAME = 'UPDATE_TEAM'
const UPDATE_ALT1 = 'UPDATE_ALT1'
const UPDATE_ALT2 = 'UPDATE_ALT2'

export const get_players = () => {
    return {
        type: GET_PLAYERS,
        payload: axios.get('/api/players')
        .then(response => {return response.data})
        .catch(err=> console.log(err))
    }
}

export const update_playerName = () => {
    return {
        type: UP,
        payload: 
    
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