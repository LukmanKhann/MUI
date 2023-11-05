import React from 'react'
import { Button, IconButton, Typography, createTheme, Slider, styled } from '@mui/material'
import { green } from '@mui/material/colors'


const Test = () => {
   
  const myCustomButton = styled(Button)({
    padding :10
  })
    
  

  return (
    <div>
      <Typography variant='myVariant'>iam batman</Typography>
        <Button variant='contained' color='primary'>Click me</Button>
        <Button   variant='contained' color='secondary'>Click me</Button>
        <Button  sx={{
          color:'myCustomColor.main'
        }} variant='contained'>Click me</Button>

        <Typography sx={{
            color : 'myCustomColor.main'
        }}>iam lukman</Typography>

        <Slider sx={{
          width: 200,
          color : 'error.main'
        }} ></Slider>

        <myCustomButton variant = 'contained'>iam custom button</myCustomButton>
        
    </div>
  )
}

export default Test