import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Navigate } from "react-router-dom"; 
import { addItemToCart, removeItemFromCart } from "./helper/CartHelper"; 
import { isAuthenticated } from "../auth/helper";

const Card = ({
    product,
    addToCart = true,
    removeFromCart = true ,
    reload = undefined,
    setReload = f => f,
}) => {

    const [redirect ,SetRedirect] =useState(false)

    const cartTitle = product ? product.name : "A photo of Product";
    const cartDescription = product ? product.description : "Default Description";
    const cartPrice = product ? product.price : "Default";
    const handleAddToCart = () => { 
        if (isAuthenticated()) {
            addItemToCart(product , ()=>SetRedirect(true));
            console.log("Added to Cart");
        } else {
            console.log("Login Please!");
        }
    };
    
    const getARedirect = redirect => { 
        if(redirect){
            return <Navigate to="/cart" />;
        }
    };

    const showAddToCart = () => { 
        return (
            addToCart && (
                <button
                    onClick={handleAddToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                >
                    Add to Cart
                </button>
            )
        );
    };

    const showRemoveFromCart = () => { 
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        removeItemFromCart(product.id)
                        setReload(!reload)
                        console.log("Product Removed from Cart")}}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                >
                    Remove from cart
                </button>
            )
        );
    };
    
    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cartTitle}</div>
            <div className="card-body">
                {getARedirect(redirect)}
                <ImageHelper product={product} />
                <p className="lead bg-success font-weight-normal text-wrap">
                    {cartDescription}
                </p>
                <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
                <div className="row">
                    <div className="col-12">
                        {showAddToCart()} 
                    </div>
                    <div className="col-12">
                        {showRemoveFromCart()} 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
