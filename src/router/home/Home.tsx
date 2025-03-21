import { useEffect, useState } from "react"
import { request } from "../../api"
import { IProduct } from "../../types";

const Home = () => {
   const [products, setProducts] = useState<null | IProduct[]>(null);
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

        {
            products?.map((product: IProduct) => (
                <div key={product.id}>
                    <img src={"https://furnishing.carwashing.uz/" + product.images[0]} width={200} alt="" />
                    <h2>{product.name}</h2>
                    <h2>{product.price}</h2>
                </div>
            ))
        }
        
    </div>
  )
}

export default Home