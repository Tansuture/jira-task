import { Dispatch } from 'redux';
import axios from "axios";

import { ItemAction, ItemActionTypes, TasksResponse } from "./types";


export const getItems =()=> async(dispatch:Dispatch<ItemAction>)=>{

    await axios.get<TasksResponse>('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json').then((response)=>{
        dispatch({type:ItemActionTypes.FETCH_ITEMS,payload:response.data})
    })
}

export const dndHappened = ()=>async(dispatch:Dispatch<ItemAction>)=>{
    
}