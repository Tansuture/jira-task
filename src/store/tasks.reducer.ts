import { act } from "react-dom/test-utils"
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
    }


}