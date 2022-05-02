import React, { FC, useEffect } from 'react';
import {useItemActions}from './store/useDispatch'



import { useSelector } from 'react-redux';
import { IState } from './store/store';

import ItemsContainer from './components/ItemsContainer';

function App(){
 const  {getItems}=useItemActions()
 const { stages } = useSelector((state:IState)=>state.itemReducer)
 useEffect(()=>{
   getItems()
 },[getItems])




 
  return (
    <div className="App">
    <ItemsContainer stages={stages}/>

    </div>
  )
}

export default App;
