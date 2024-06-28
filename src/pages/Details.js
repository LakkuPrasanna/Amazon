import React, { useEffect } from 'react'

import { Carousel, CarouselItem } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Details = () => {
  const parameters=useParams()
  useEffect(()=>{
    GetDetails()
      },[])
  const[details,setDetails]=useState(null)
  const product_id=parameters.id
  
    const GetDetails=async()=>{
    const data=new FormData()
    data.append("product_id",product_id)
    const response=await axios.post("https://gist.manojkoravangi.com/get-product-details.php",data,{Headers:{"content-type":"multipart/form-data"}})
    console.log(response.data.data.product_id)
    setDetails(response.data)

    
    
    

  }
  return (
    <div>{details?
    <div className="red col-12 d-flex">
        <div className="blue col-4 d-flex">

        </div>
        <div className="green col-8 d-flex">
            <div className="pink col-8 mt-5">
                <h4>Rylan 4000mAh Rechargeable Desk Fan, Portable Table Fan,USB Fan, USB Battery Powered Quiet Personal Fan,4 Speed for Home Office Travel</h4>
                <a href="#">visit the Rylan store</a>
                <pre>4.4   2041 ratings</pre>
                <p>4k+ bought in past month</p>
                <hr></hr>
                <button className="btn btn-danger">limited time deal</button>
                <div className="d-flex"><div><h1>-17%</h1></div><div><h2>₹1,248</h2></div></div>
                <div className="d-flex"><div><p>M.R.P:</p></div><div><del> ₹1,499</del></div></div>
                <p>Inclusive of all taxes</p>
                <p><strong>EMI</strong> starts at ₹113 per month. EMI options</p>
                <hr></hr>
                <div className="d-flex" >
                
                <pre><h5> offers</h5></pre>
                </div>
                <div className="d-flex">
                  <div className="square">
                      <b>Bank Offer</b>
                        
                        <p>Upto ₹500.00</p> 
                      <p>Discount on HDFC...</p>
                      <a href="#">13 offers</a>
               </div>
               
                  <div className="square">
                    <b>Partner offers</b>
                    <p>get std invoice and</p>
                    <p>upto 28% on...</p>
                    <a href="#">1 offer</a>
                  </div>
            </div>
            <hr></hr>
            <Carousel>
            <CarouselItem>
              <div className="a d-flex">
            <div><img src={"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"}></img>
            <p>Pay On Delivery</p></div>
            <div><img src={"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"}></img>
            <p>7 days Replacement</p>
            </div>
            <div>
              <img src={"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"}></img>
              <p>Amazon Delivered</p>
            </div>
            <div>
              <img src={"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"}></img>
              <p>1 year warranty</p>
            </div>
            <div>
              <img src={"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"}></img>
              <p>Free delivery</p>
            </div>
            <div>
              <img src={"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"}></img>
              <p>Top Brand</p>
            </div>
            </div>
            </CarouselItem>
            </Carousel>
            <hr></hr>
            <p>Model:<strong>Moving Head Fan-Rose Gold</strong></p>
            <div className='ss d-flex'>
            <div className='sfan d-flex rounded rounded-1'>
              <img src={"https://m.media-amazon.com/images/I/51s530NcwzL._SS36_.jpg"}></img>
              <p>₹2,089.00</p></div>
            </div>
           <p><strong>Brand:</strong>Hoteon</p>
           <p><strong>colour:</strong>Rose Gold</p>
           <p><strong>Electric fan design:</strong>Table Fan</p>
           <p><strong>Power Source</strong>Rechargeable</p>
           <p><strong>Power Source</strong>Rechargeable</p>
           <hr></hr>

            </div>
            <div className="pink1 col-4">
                <h3>₹1,248.00</h3>
                <p>
                FREE delivery Saturday, 15</p>
                <p>June. Details</p>
                <p>Or fastest delivery Tomorrow,</p>
                <p>14 June. Order within 16 hrs 40 mins. Details</p>
               
               <p>Delivering To Hyderabad 500072-update location</p>
               <b>In stock</b>
               <pre>ships from      Amazon</pre>
               <pre>Sold by     RetailsEz Pvt Ltd</pre>
               <div className="d-flex">
               <div><p>Quantity:</p></div>
               <div><select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
               </select></div></div>
               <button className=' btn1 btn btn-warning rounded rounded-5'>Add to cart</button>
               <button className=' btn2 btn btn-warning rounded rounded-5'>Buy Now</button>
              <p>secure transaction</p>
              <p>add gift option</p>
              <hr></hr>
              <button className="add rounded rounded-2">Add to Wish list</button>
              </div>
             
        </div>
</div>:null
}</div>
 
  )
}

export default Details