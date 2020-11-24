import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import initialState from './globalState';

import reducer from '../reducer';
const windowExist = typeof window === 'object';
// const initialState = { cart: [{ name: "Robert" }] }
const composeEnhacers =
    windowExist &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;


export const store = createStore(
    reducer,
    initialState,
    composeEnhacers(applyMiddleware(thunk))
)