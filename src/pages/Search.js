import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Search = () => {
    const[result,setresult]=useState(null)
    useEffect(()=>{searchCourse()
    },[])
    const searchCourse=async(name)=>{
       
        setresult(null)
        const data=new FormData()
       
        data.append('limit',10)
        data.append('name',name)
   
      
        const response=await axios.post("https://gist.manojkoravangi.com/search-products.php",data,{header:{"content-type":'multipart/form-data'}})
        if(response){
            console.log(response.data)
            setresult(response.data.result)
            
        
            
        }
    }

  return (
    <div>
        <input onChange={(event)=>{searchCourse(event.target.value)}} placeholder="search"></input>
        {result?<div className='d-flex flex-wrap container'>
            {result.map((item)=>(
              <div className='image border p-3 col-lg-3 col-md-6 col-sm-12'>
                <img className='w-100' src={item.images}></img>
                <p>{item.name}</p>
                <p>Brand:{item.brand}</p>
                <div className="discount d-flex"><p>-{item.discount}%</p>
                <b>₹{item.price}</b><br></br></div>
                <button className='btn btn-warning'>Add to Cart</button>
              </div>
              
            ))}



        </div>:null}
     
    </div>
  )
}


export default Search