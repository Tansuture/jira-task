import React, { FC, useEffect ,DragEvent, useState } from 'react';
import { StageItem, TaskState} from '../store/types'

import Items2 from './Items2';

type Props ={
    stages:StageItem[]
}
const ItemsContainer:FC<Props> =({stages})=>{

  const [currentBoard,setBoard]=useState<StageItem | null>(null)
  const [item,setTask]=useState<TaskState | null>(null)
  const [boards,setBoards]=useState(stages) 
  useEffect(()=>{
    setBoards(stages)
  })

 const dragOver=(e:DragEvent<HTMLDivElement>)=>{
    const element = e.currentTarget as HTMLDivElement
    const className = element.className
    e.preventDefault()
    const style = element.style
    if(className=='item'){
      style.boxShadow = '0 2px 3px gray'
    }
}

const dragStart = (e:DragEvent<HTMLDivElement>,task:TaskState,board:StageItem)=>{
  setBoard(board)
  setTask(task)

}


const dragHandler=(e:DragEvent<HTMLDivElement>,task:TaskState,board:StageItem )=>{
  
    e.preventDefault()
    e.stopPropagation()

    const currentIndex = currentBoard?.items.indexOf(item)
    currentBoard?.items.splice(currentIndex,1)
    const dropIndex = board.items.indexOf(task)
    board.items.splice(dropIndex+1,0,item)
   
    setBoards(boards.map(b=>{
        if(b.stageName=== board.stageName){
          return board
        }
        if(b.stageName===currentBoard.stageName){
          return currentBoard
        }
        return b
      }))
  
  const element = e.currentTarget as HTMLDivElement
  const style = element.style
  style.boxShadow ='none'
  
}

  const dragLeave = (e:DragEvent<HTMLDivElement>)=>{
    const element = e.currentTarget as HTMLDivElement
    const style = element.style
    style.boxShadow ='none'

  }
  const drangEnd =(e:DragEvent<HTMLDivElement>)=>{
    const element = e.currentTarget as HTMLDivElement
    const style = element.style
    style.boxShadow ='none'
  }

return(
    <>
    <h1 style={{textAlign:'center'}}> Задачи Нурманова Бибижан</h1>
    <Items2  dragOver = {dragOver} dragStart={dragStart} dragHandler={dragHandler} dragLeave = {dragLeave} dragEnd={drangEnd} boards={boards}/>
     
    </>
)
}
export default ItemsContainer