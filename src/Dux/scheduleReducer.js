import axios from 'axios';

const initialState = {
    schedule: [],
    isLoading: false,
    leagues: [],
    leagueteams: []
};

const GET_SCHEDULE = 'GET_SCHEDULE'
const NEW_SCHEDULE = 'NEW_SCHEDULE'
const GET_LEAGUES = 'GET_LEAGUES';
const GET_LEAGUE_TEAMS = 'GET_LEAGUE_TEAMS'

export const get_schedule = () => {
return {
    type: GET_SCHEDULE,
    payload: axios.get('/api/schedule')
    .then(response=> {return response.data})
    .catch(err=> console.log(err))
}
}

export const get_leagues = () => {
    return {
        type: GET_LEAGUES,
        payload: axios.get('/api/leagues')
        .then(response=> {return response.data})
        .catch(err=> console.log(err))
    }
    }

export const get_league_teams = (req) => {
        return {
            type: GET_LEAGUE_TEAMS,
            payload: axios.post('/api/leagues', req)
            .then(response=> {return response.data})
            .catch(err=> console.log(err))
        }
        }

export default function playerReducer(state = initialState, action){
    switch(action.type){
        case `${GET_SCHEDULE}_PENDING`:
        return{
            ...state,
            isLoading: true
        }
        case `${GET_SCHEDULE}_FULFILLED`:
        return {
            ...state,
            schedule: action.payload
        }
        case `${GET_SCHEDULE}_REJECTED`:
        return {
            ...state,
            isLoading: false
        }
        case `${GET_LEAGUES}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_LEAGUES}_FULFILLED`:

            return Object.assign({}, state, {leagues: action.payload} )

        case `${GET_LEAGUE_TEAMS}_REJECTED`:
            return {
                ...state,
                isLoading: false
            }
            case `${GET_LEAGUE_TEAMS}_PENDING`:
            return{
                ...state,
                isLoading: true
            }
        case `${GET_LEAGUE_TEAMS}_FULFILLED`:

            return Object.assign({}, state, {leagueteams: action.payload} )

        case `${GET_LEAGUE_TEAMS}_REJECTED`:
            return {
                ...state,
                isLoading: false
            }
    default:
    return state;
    }
    
}