import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer, { fetchGreetingApi } from './greetings/greeting';
// import { initialState } from "./greetings/greeting";

const reducer = combineReducers({
  rootReducer,
});

const stores = createStore(reducer, applyMiddleware(logger, thunk));

stores.dispatch(fetchGreetingApi());

export default stores;
