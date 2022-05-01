import React, { FC, useEffect } from 'react';
import {useItemActions}from './store/useDispatch'



import { useSelector } from 'react-redux';
import { IState } from './store/store';
import Items from './components/Items';

function App(){
 const  {getItems}=useItemActions()
 const { stages } = useSelector((state:IState)=>state.itemReducer)
 useEffect(()=>{
   getItems()
 },[getItems])




 
  return (
    <div className="App">
      <Items  stages={stages}/>

    </div>
  );
}

export default App;
