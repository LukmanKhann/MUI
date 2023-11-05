import { Button, Typography } from '@mui/material'
import React from 'react'

const Themeing = () => {
  return (
    <div>
        <Typography variant='h3'>Themeing Examples</Typography>
        <Typography variant='myVariant' sx={{color: 'customRibRed.superLight', m:4,p:10}}>Hello Coders</Typography>
        <h3>Iam H3 tag/element</h3>
        <Button variant='contained'>Click Me</Button>
    </div>
  )
}

export default Themeing