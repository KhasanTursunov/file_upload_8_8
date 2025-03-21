import { useEffect, useState } from "react"
import { request } from "../../api"

const Home = () => {
   const [products, setProducts] = useState<null>(null)
   useEffect(()=>{
        request
            .get("products")
            .then(res => {
                setProducts(res.data?.data?.products)
            }) 
        }, [])
        console.log(products)
  return (
    <div>
        <h2>Home</h2>
    </div>
  )
}

export default Home