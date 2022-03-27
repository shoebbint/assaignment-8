import React from 'react';
import Products from '../Products/Products';
import "./Cart.css"
const Cart = (props) => {
    console.log(props);
    const { cart } = props;
    const [name] = cart;

    console.log(name)

    // if (props.cart.length != 0) {
    // const name = props.cart[0];
    // }

    // const { name } = props.cart && props.cart[0];




    return (

        <div className='bg-secondary h-100'>
            <h2>Selected Items</h2>
            <div>

                <div className='d-flex cart-img'>
                    {/* <div>
                        <img src={cart[0].image} alt="" />
                    </div> */}
                    <div>
                        <h4 className=''>{ }</h4>
                    </div>

                </div>
                <button className='btn btn-outline-danger mb-2'>
                    Choose One For Me
                </button>
                <button className='btn btn-outline-warning'>
                    Choose Again
                </button>
            </div>
        </div>

    );
};

export default Cart;



// onClick={() => btnClearCart(Products)}