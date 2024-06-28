import React, { useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
const Login = () => {
  const[mobile,setMobileNo]=useState(null)
  const[password,setPassword]=useState(null)
  const[loading,setloading]=useState(false)
  useEffect(()=>{
    const userid=localStorage.getItem("saved_userid")
    if(userid){
      window.location.replace("/account")
    } },[]
  )
  function Account(){
    console.log("phone_number"+mobile)
    console.log("password"+password)
  }
  const CreateAccount = async()=>{
    const data=new FormData()
    data.append("phone_number",mobile)
    data.append("password",password)
    const response=await axios.post("https://gist.manojkoravangi.com/login.php",
      data,{header:{"content-type":'multipart/form-data'}})
    if(response){
      setloading(true)
      console.log(response)
      if(response.data.status==="success"){
          localStorage.setItem('saved_userid',JSON.stringify(response.data.login_data))
          window.location.reload()
      }
      else{
        alert(response.data.title)
      }
    }      
  }
  
  return (
    <div className='col-4 mx-auto p-3 rounded border'>
      <input onChange={(event)=>{setMobileNo(event.target.value)}} placeholder="enter mobile number" className="form-control rounded rounded-0 mt-2" ></input>
      <input onChange={(event)=>{setPassword(event.target.value)}} placeholder="enter password" className="form-control rounded rounded-0 mt-2" ></input>
      <button className="btn btn-warning w-100 mt-2" onClick={()=>{CreateAccount()}}>{loading?<CircularProgress className='text-light' size={20}/>:"login"}</button>

      </div>
  )
}

export default Login;
