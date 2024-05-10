import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom'



function Login() {
    const history = useNavigate();
    const[email,setEmail] = useState(' ')
    const[password,setPassword] =useState(' ')
    
  

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
               email,password 
            })
            .then(res =>{
                if(res.data==="exist"){
                    history("/home")
                    alert(`Welcome ${email}`)
                }else if(res.data==="notexist"){
                    alert("User have not sign up check Email and password")
                }
                
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>

<div className='w-50 bg-black  rounded p-3'>
        <h1 className='text-danger'>Login</h1>
        <form action="/" method="post">
            <input type ="email"  onChange={(e)=>{setEmail(e.target.value)}} className='form control' placeholder="Enter email" required/><br/><br/>
            <input type ="Password" onChange={(e)=>{setPassword(e.target.value)}} className='form control'  placeholder="Enter password" required/><br/><br/>
           <h4><input type ="submit" className='text-success bg-black'  onClick={submit}/></h4> 

        </form>
        <br/>
        <h6>New user?</h6>
        
       <h3> <Link to ='/signup' className='text-white'>Signup</Link></h3>
    </div>
    </div>
  )
}

export default Login