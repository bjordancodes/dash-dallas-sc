import {createStore, compose} from 'redux';
import playerReducer from './Dux/playerReducer';
import scheduleReducer from './Dux/scheduleReducer';
import standingsReducer from './Dux/standingsReducer';
import teamReducer from './Dux/teamReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers();

export default createStore(reducer, middlewares);