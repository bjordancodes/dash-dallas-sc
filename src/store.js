import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import playerReducer from './Dux/playerReducer';
import scheduleReducer from './Dux/scheduleReducer';
import standingsReducer from './Dux/standingsReducer';
import teamReducer from './Dux/teamReducer';
import promiseMiddleware from 'redux-promise-middleware';

const combinedReducer = combineReducers({
    player: playerReducer,
    // schedule: scheduleReducer,
    // standings: standingsReducer,
    // team: teamReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));

const store = createStore(combinedReducer, middlewares)

export default store;