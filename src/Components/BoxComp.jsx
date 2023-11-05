import React from 'react'
import { Box, Skeleton } from '@mui/material'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
const BoxComp = () => {
  return (
    <div>

        {/* notification badge */}
        {/* <Box sx={{bgcolor : 'primary.main'}} >Iam box</Box> */}
        {/* <Badge badgeContent={4} color="error" >
  <MailIcon color="action" />
</Badge> */}

{/* Skeleton for loading */}

{/* For variant="text", adjust the height via font-size */}
<Skeleton variant="text" sx={{ fontSize: '1rem' , width : 400}} animation = "wave" />

{/* For other variants, adjust the size with `width` and `height` */}
<Skeleton variant="circular" width={40} height={40}  />
<Skeleton variant="rectangular" width={210} height={60} />
<Skeleton variant="rounded" width={210} height={60} />
        
        
    </div>
  )
}

export default BoxComp