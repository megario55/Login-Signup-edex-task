import React ,{useState , useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
    const{id} = useParams()
    const[bill,setBill] = useState()
    const[tip,setTip] = useState()
    const[totalbill,setTotalbill] = useState()
    // const[phone,setPhone] = useState()
    // const[blood,setBlood] = useState()

     const navigate = useNavigate()

     useEffect(() =>{
        axios.get('http://localhost:8000/getUser/'+id)
        .then(result => {console.log(result)
            setBill(result.data.bill)
            setTip(result.data.tip)
            setTotalbill(result.data.totalbill)
            // setPhone(result.data.phone)
            // setBlood(result.data.blood)

            
        })
        .catch(err => console.log(err))

    },[])

    const Update = (e) =>{
        e.preventDefault();

        axios.put("http://localhost:8000/updateUser/"+id,{bill,tip,totalbill})
        .then(result => {
            console.log(result)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
       
        <div className='w-50 bg-black rounded p-3'>
            <form onSubmit={Update}>
                <h2 className='text-danger'>Update User bill</h2>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter bill amount' className='form control'
                     value={bill} onChange={(e) =>setBill(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder='Enter Tip Percent' className='form control'
                   value={tip}  onChange={(e) =>setTip(e.target.value)}/>
                </div>
                {/* <div className='mb-2 ' >
                    <textarea style={{width:"190px"}} placeholder='Enter Address' className='form control'
                    value={address} onChange={(e) =>setAddress(e.target.value)}/>
                </div> */}
                <div className='mb-2'>
                    <input type="text" placeholder='updated totalbill' className='form control'
                    value={totalbill} onChange={(e) =>setTotalbill(e.target.value)}/>
                </div>
                {/* <div className='mb-2'>
                    <input type="text" placeholder='Enter bloodgroup' className='form control'
                    value={blood} onChange={(e) =>setBlood(e.target.value)}/>
                </div>
                 */}

                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser