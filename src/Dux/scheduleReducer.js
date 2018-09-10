import axios from 'axios';

const initialState = {
    schedule: [],
    isLoading: false
};

const GET_SCHEDULE = 'GET_SCHEDULE'

export const get_schedule = () => {
return {
    type: GET_SCHEDULE,
    payload: axios.get('/api/teams')
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
    default:
    return state;
    }
}