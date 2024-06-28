import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Account = () => {
  const userid=localStorage.getItem("saved_userid")
  const [userdata,setUserData]=useState(JSON.parse(localStorage.getItem('saved_userid')))
 
  useEffect(()=>{
    if(userdata){
      FetchUserData()
    }
    else{
      alert("error")
    }

  })
  const FetchUserData=async()=>{
    const data=new FormData()

    data.append("user_id",userid)
    const response=await axios.post("https://gist.manojkoravangi.com/get-account.php",data,{header:{"content-type":'multipart/form-data'}})
   
    if(response){
      console.log(response)
      
    }
  }
  return (
    <div>
      
      {userdata?
    <div><h1>{userdata.first_name}</h1>
    <h1>{userdata.last_name}</h1>
    <h1>{userdata.user_id}</h1>
    </div>:null}
    </div>
  )
}

export default Account
