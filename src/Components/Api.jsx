    import React, { useState,useEffect } from 'react'

    const Api = () => {
    
        const [count, setCount] = useState(0)
        const [products,setProducts]=useState([]);
        const [loading,setLoading]=useState(true)
        // const Api ="https://dummyjson.com/products';"
    
        useEffect(()=>{
            fetch('https://dummyjson.com/products')
            .then(res=>res.json())
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    
        },[])
        
        const ApiFetching=()=>{
            fetch('https://dummyjson.com/products')
            .then(res=>res.json())
            .then(data=>{
            setProducts(data.products)
         setLoading(false)
         
         
            })
            .catch(err=>console.log(err))
            console.log("Button Api");
            setLoading(false)
        }
   
    return (
        <>
   <div>
        <h1>Fetching Products</h1>

<button onClick={ApiFetching}>Fetch</button>
{
    loading?(
        <div>Loading...</div>
    ):(
        products.map((product,index) => (
            <div key={index}>
            <h2 key={product.id}>{product.title}</h2>  
            <h6>{product.description}</h6>
            </div>
           ))
        
   
   
    )
}
</div>
        </>
  )
}

export default Api



