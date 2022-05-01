import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {itemReducer} from './tasks.reducer'


const rootReducer = combineReducers({
    itemReducer
    
})
export const store = configureStore({reducer:rootReducer})

export type IState = ReturnType<typeof rootReducer>