
import { Reducer } from "redux"
import { InitState, ItemAction, ItemActionTypes } from "./types"

const initState:InitState={
    stages: []
}

export const itemReducer = (state=initState,action:ItemAction):InitState=>{

    switch(action.type){

        case ItemActionTypes.FETCH_ITEMS:
            return{
                ...state, stages:action.payload
            }
        default:return state
    
        case ItemActionTypes.SET_BOARD_AFTER_DND:
            return{
                ...state,stages:action.payload
            }

    }


}