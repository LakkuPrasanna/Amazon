import { useEffect,useState } from "react";
const mappingusingaxios=()=>{
    const[products,setProducts]=useState(null)
    return(
        <div>{products?
            <div className="container">
                {products.map(()=>(
                    <div><h2>this is heading</h2></div>
                ))}
        

        </div>:null}
        </div>
    )
}
export default mappingusingaxios;