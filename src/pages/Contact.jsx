import React from 'react'
import Sidenav from '../component/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Contact= () => {
  return (
   <>
     <Box  sx={{ display:'flex' }}>
     <Sidenav></Sidenav>
 
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1 className='mt-5 pt-5'>Category</h1>

      
      </Box>
      </Box>

   </>
  )
}

export default Contact