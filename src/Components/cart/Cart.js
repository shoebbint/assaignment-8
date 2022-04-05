import React from 'react';
import Products from '../Products/Products';
import SelectedItem from '../SelectedItem/SelectedItem';
import "./Cart.css"
const Cart = (props) => {
    const { cart } = props;

    // const { cart } = props;


    // console.log(name)

    // if (props.cart.length != 0) {
    // const name = props.cart[0];
    // }

    // const { name } = props.cart && props.cart[0];




    return (

        <div className='bg-secondary h-100'>
            <h2>Selected Items</h2>
            <div>

                <div className=''>
                    {/* {
                        cart.map(item => <SelectedItem item={item}>

                        </SelectedItem>)
                    } */}
                    <SelectedItem cart={cart}>

                    </SelectedItem>

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