import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
const Product = (probs) => {
    //console.log(probs);
    const {img,name,seller,price,stock} = probs.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br></br>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br></br>
                <p><small>Only {stock} left in stock order soon</small></p>
                <button className="main-button"
                    onClick={()=>probs.handleAddProduct(probs.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
        
    );
};

export default Product;