import React from 'react'
import { Link } from "react-router-dom";



function Home() {
    
    
     
   
  return (
  <div className='bg-primary vh-100'>
    <h1 className='text-white'>Hii Welcome!!</h1>

            <Link to="/" className='btn btn-danger' style={{marginLeft:"20px"}}>Logout</Link>
     


        
    </div>
  )
}

export default Home