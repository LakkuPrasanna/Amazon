import react from 'react'
const mapping=()=>{
    const products=[2,3,4,5]
    return (
        <div className="container d-flex flex-wrap">
           {products.map(()=>(
                <div className="col-3 box shadow">
                    <h2>this is headinng</h2>
                </div>
            ))}


        </div>

    )
}
export default mapping;