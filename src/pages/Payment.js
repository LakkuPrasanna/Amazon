import React from 'react'

const Payment = ({data,design}) => {
    console.log(data)
  return (
    <div>
        {data?<div>
           <h2>{data.first_name}</h2>
           {design}
        </div>:null}
       
        </div>
  )
}

export default Payment