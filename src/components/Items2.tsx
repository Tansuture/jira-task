import React, { FC, useEffect ,DragEvent, useState } from 'react';
import { StageItem, TaskState} from '../store/types'
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material";




import Paper from '@mui/material/Paper';

const Title = styled('p')`
text-transform:lowerCase;
margin-left:10px;
font-size: 16px;
`

const Time = styled('p')`

margin-left:10px;
font-size: 12px;


color: #787878;
`
const Block = styled('div')`
background-color:grey;
`
const HR = styled('hr')`
color:black;
border-top: 3px solid grey;
`
const Length = styled('span')`
background: #E0E0E0;
border-radius: 10px;
margin-left:10px;

`
const Span = styled('div')`
width: 90px;
background: #27AE60;
border-radius: 4px;
margin-left:10px;
text-align:center ;

`
const Blue = styled('div')`
width: 90px;
background-color:blue;
border-radius: 4px;
margin-left:10px;
text-align:center ;

`
type Props ={
    boards:StageItem[],
    dragHandler:(e:DragEvent<HTMLDivElement>,task:TaskState,board:StageItem)=>void
    dragStart:(e:DragEvent<HTMLDivElement>,task:TaskState,board:StageItem)=>void
    dragOver:(e:DragEvent<HTMLDivElement>)=>void
    dragLeave:(e:DragEvent<HTMLDivElement>)=>void
    dragEnd:(e:DragEvent<HTMLDivElement>)=>void

}
const Items2:FC<Props> =({boards,dragHandler,dragStart,dragOver,dragEnd,dragLeave})=>{


return(
    <>
  
     <Grid sx={{ flexGrow: 1 ,marginTop:4 }} container spacing={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
          {boards.map((value,index) => (
             
                
                
            <Grid  key={index} item>
       
                <Title>
                {value.stageName} 
                <Length>
                {value.items.length}</Length>
               
                </Title>
                <HR></HR>
                <br></br>
                <br></br>
                {value.items.map(task=>
                <div  className='item'
                onDragOver={(e)=>dragOver(e)}
                onDragStart={(e)=>dragStart(e,task,value)}
                onDragLeave={(e)=>dragLeave(e)}
                onDragEnd={(e)=>dragEnd(e)}
                onDrop={(e)=>dragHandler(e,task,value)}
                draggable={true}>
              <Paper 
            
                sx={{
                  height: 100,
                  width: 200,
                  marginBottom:5,
                  border:"none",
                  borderColor:'black',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}

              >  
                <Time>{new Date(task.createTimestamp).toLocaleString()}</Time>
                <Title  >
                    {
                     task.clientName
                    }
                </Title> 
                {task.taskTypeName == 'Встреча'? <Span>{task.taskTypeName}</Span> :<Blue>{task.taskTypeName}</Blue>}
                {/* <Span >
                <Title>
                    {
                     task.taskTypeName
                    }
                </Title> 
                </Span> */}
              </Paper>
              </div>
              )}
            </Grid>
              
          ))}
        </Grid>
        
      </Grid>
    
          
           
       
    </Grid>
  
    </>
)
}
export default Items2