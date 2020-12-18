import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer'
import asyncReducer from './reducers/asyncReducer'
import { createLogger } from 'redux-logger';

//ストア内変数
let composeEnhancers;
let rootReducer;
let logger;
export let store;

//クライアント側でストア生成
export const clientSide_createStore = () => {

    //redux-devtool
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    //reducer bind
    rootReducer = combineReducers({
        reducer,
        asyncReducer
    });
    
    //logger
    logger = createLogger({
        diff: true,
        collapsed: true
    });
    
    //create store
    store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk, logger))
    );

}