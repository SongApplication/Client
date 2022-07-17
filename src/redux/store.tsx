import React from "react";
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import reducer from "./reducer";


export const myStore = createStore(combineReducers({ sng: reducer }),applyMiddleware(thunk))
export type RootState = ReturnType<typeof myStore.getState>