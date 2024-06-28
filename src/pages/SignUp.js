import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Signup = () => {
  const[fname,setFname]=useState(null)
  const[lname,setLname]=useState(null)
  const[ename,setEmail]=useState(null)
  const[password,setPassword]=useState(null)
  const[mobile,setMobileNo]=useState(null)
  const[uname,setUname]=useState(null)
  const[address,setAddress]=useState(null)

  function Account(){
 
    console.log("first_name"+fname)
    console.log("last_name"+lname)
    console.log("ename"+ename)
    console.log("phone_number",mobile)
    console.log("password"+password)
    console.log("uname"+uname)
  }
  const CreateAccount = async()=>{
    const data=new FormData()
    data.append("first_name",fname)
    data.append("last_name",lname)
    data.append("username",uname)
    data.append("phone_number",mobile)
    data.append("password",password)
    data.append("email",ename)
    data.append("address",address)


    const response=await axios.post("https://gist.manojkoravangi.com/insertuserdata.php",
      data,{header:{"content-type":'multipart/form-data'}})
    if(response){
      console.log(response.data)
      if(response.data.status==="success"){
        alert("account created")       
      }
      else{
        alert("error")
      }
    }      
  }

  return (
    <div className='col-4 mx-auto p-3 rounded border'>
      <input onChange={(event)=>{setFname(event.target.value)}} placeholder="enter firstname" className="form-control rouded rouned-0 mt-3" ></input>
      <input onChange={(event)=>{setLname(event.target.value)}} placeholder="enter lastname"className="form-control rouded rouned-0 mt-3" ></input>
      <input onChange={(event)=>{setEmail(event.target.value)}} placeholder="enter email"className="form-control rouded rouned-0 mt-3" ></input>
      <input onChange={(event)=>{setUname(event.target.value)}} placeholder="enter username"className="form-control rouded rouned-0 mt-3" ></input>
      <input onChange={(event)=>{setMobileNo(event.target.value)}} placeholder="entermobile" className="form-control rouded rouned-0 mt-3"></input>
      <input onChange={(event)=>{setPassword(event.target.value)}} placeholder="enter password" className="form-control rouded rouned-0 mt-3" ></input>
      <input onChange={(event)=>{setAddress(event.target.value)}} placeholder="enter address" className="form-control rouded rouned-0 mt-3" ></input>
      <button className="btn btn-warning mt-3 w-100" onClick={()=>{CreateAccount()}}>signin</button>

    </div>
  )
}

export default Signup