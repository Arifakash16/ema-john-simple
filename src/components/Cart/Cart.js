import React from 'react';

const Cart = (probs) => {
    const cart = probs.cart;
    const total = cart.reduce((total,prd)=>total+prd.price,0)
    let shipping = 0;
    if(total>35)
        shipping=0;
    else if(total>15)
        shipping=12.99;
    else if(total>5)
        shipping=4.99;

    const tax = (total/10);

    const totalPrice = (total+shipping+tax);
    const formatNumber = num=>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h5>Order Summary</h5>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping: {shipping}</small></p>
            <p><small>Tax + Vat: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(totalPrice)}</p>
        </div>
    );
};

export default Cart;