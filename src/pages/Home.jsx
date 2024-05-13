import React from 'react'
import Sidenav from '../component/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Home = () => {
  return (
   <>
     <Box  sx={{ display:'flex' }}>
     <Sidenav></Sidenav>
 
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <section className='mt-5 pt-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
           <div className="card">
            <div className="card-title text-center">
              <h2>Category</h2>
            </div>
            <div className="card-body">
              <p>This is a card body here  is the description about the card</p>            </div>
           </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-title">
                <h2>Products</h2>
              </div>
              <div className="card-body">
                <p>this is a card body here is the description about the  product</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="card">
              <div className="card-title">
                <h2>Setting</h2>
              </div>
              <div className="card-body">
                <p>all settings</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>

    
      </Box>
      </Box>

   </>
  )
}

export default Home
