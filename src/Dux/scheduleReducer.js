const initialState = {
    schedule: []
};

export default function playerReducer(state = initialState, action){
    return state.schedule;
}