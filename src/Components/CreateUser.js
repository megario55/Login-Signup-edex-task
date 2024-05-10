import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const[bill,setBill] = useState()
    const[tip,setTip] = useState()
    const[totalbill,setTotalbill] = useState()
    

    
    const navigate = useNavigate()
    

    const Submit = (e) =>{
       e.preventDefault();

       axios.post("http://localhost:8000/createUser",{bill,tip,totalbill})
       .then(result => {
           console.log(result)
           navigate('/home')
       })
       .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       
        <div className='w-50 bg-black rounded p-3'>
            <form onSubmit={Submit}>
                <h2 className='text-danger'>Add User</h2>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter bill amount' className='form control'
                    onChange={(e) =>setBill(e.target.value)} required/>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter tip percentage' className='form control'
                    onChange={(e) =>setTip(e.target.value)} required/>
                </div>
                <div className='mb-2 ' >
                    <textarea style={{width:"190px"}} placeholder='Enter total amount' className='form control'
                    onChange={(e) =>setTotalbill(e.target.value)} required/>
                </div>
              

                <button className='btn btn-success'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser