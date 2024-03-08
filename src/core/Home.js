import React , { useState , useEffect }from "react";
import {getProducts} from "./helper/coreapicalls"
import Base from "./Base"
import "../index.css"
import Card from "./Card"
export default function Home() {

    const[products,setProducts] = useState([]);
    const[error , SetError] = useState(false)

    const loadAllProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                SetError(data.error)
                console.log(error)
            }
            else{
                setProducts(data)
            }
        })
    }

    useEffect(() => {
        loadAllProducts();
    } , [])

    return (
        <Base title="Home Page" description="Welcome to T-shirt Store">
            <div className="row">
                {products.map(( product, index ) => {
                    return(
                        <div key={index} className="col-4 mb-4">
                            <Card product={product} />
                        </div>
                    )
                })}
            </div>
        </Base>
    );
}

