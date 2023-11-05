import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { CircularProgress, IconButton, Paper} from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';
const Icon = () => {
  return (
    
    <div>
       <DeleteOutlinedIcon fontSize = 'large' color = 'error'></DeleteOutlinedIcon>
       <IconButton color='primary'>
       <DeleteIcon fontSize = 'large' color='secondary' ></DeleteIcon>
       </IconButton>
       <CircularProgress />
       <LinearProgress/>

       <Paper elevation={0} />
       <Paper />
       <Paper elevation={3} />
    </div>
  )
}

export default Icon