/*
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer'
import asyncReducer from './reducers/asyncReducer'

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

*/

import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initialState, reducer } from './reducers/reducer'
import { createLogger } from 'redux-logger';

let store

//logger
const logger = createLogger({
    diff: true,
    collapsed: true
});

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(logger))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}