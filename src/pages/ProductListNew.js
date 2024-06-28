import React from "react"
import axios from "axios"
import { useEffect,useState } from "react"
import style from '../css/style.css'
import { Link } from "react-router-dom"
import ProductItem from "../Components/ProductItem"
const ProductListNew=()=>{
    const[details,setDetails]=useState(null)
    
    const user_id=localStorage.getItem("userid")
    useEffect(()=>{
        
        GetProducts()
    },[]
)
    const GetProducts=async()=>{
       
        const data=new FormData()
        const response=await axios.post("https://gist.manojkoravangi.com/get-products.php",data,{header:{"content-type":'multipart/form-data'}})
        console.log(response.data)
        if(response.data.status="success"){
            setDetails(response.data.products)
        }

    }
    const AddTocart=async(product_id)=>{
        const data=new FormData()
        data.append("user_id",user_id)
        data.append("product_id",product_id)
        data.append("quantity",5)
        const response=await axios.post("https://gist.manojkoravangi.com/insert-cart.php",data,{header:{"content-type":"multipart/form-data"}})
        console.log(response)
        if(response.data.status==="success"){
            if(user_id!=null){
                alert("successfully added to cart")
            }
            else{
                alert("you have to login first")
            }
        }
        else{
            alert("error")
        }
    }
    return(
<div>
    {details?
        <div  className='container flex-wrap d-flex'>
            {details.map((item)=>(
               <ProductItem data={item}/>
            ))}

        </div>:null}

        </div>
    )

}
export default ProductListNew