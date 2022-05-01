import React, { FC, useEffect } from 'react';
import { StageItem, TaskState} from '../store/types'
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material";



import Paper from '@mui/material/Paper';

const Title = styled('p')`
text-transform:lowerCase;
margin-left:10px;
font-size: 16px;
`
const Span = styled('div')`
width: 70px;
margin-left:5px;
height: 22px;
background: #27AE60;
border-radius: 4px;
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
margin-left:5px;

`
type Props ={
    stages:StageItem[]
}
const Items:FC<Props> =({stages})=>{
  
    // const items = stages.map((item)=>item.items)
    // const stage = stages.map((item)=>item.stage)
return(
    <>
    <h1 style={{textAlign:'center'}}> Задачи Нурманова Бибижан</h1>
     <Grid sx={{ flexGrow: 1 ,marginTop:10 }} container spacing={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
          {stages.map((value,index) => (
            <Grid key={index} item>
       
                <Title>
                {value.stageName} 
                <Length>
                {value.items.length}</Length>
               
                </Title>
                <HR></HR>
                <br></br>
                <br></br>
                {value.items.map(task=>
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
                <Title>
                    {
                     task.clientName
                    }
                </Title> 
                <Span>
                <Title>
                    {
                     task.taskTypeName
                    }
                </Title> 
                </Span>
              </Paper>)}
            </Grid>
          ))}
        </Grid>
      </Grid>
    
          
           
       
    </Grid>
  );
    </>
)
}
export default Items