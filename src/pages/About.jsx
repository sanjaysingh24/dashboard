import React from 'react'
import Sidenav from '../component/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const About = () => {
  return (
   <>
     <Box  sx={{ display:'flex' }}>
     <Sidenav></Sidenav>
 
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1 className='mt-5 pt-5'>Product</h1>

      
      </Box>
      </Box>

   </>
  )
}

export default About