import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';
import Cart from '../cart/Cart';
import './Market.css'


const Market = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [carts, setCarts] = useState([]);
    // button function

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    };
    // const btnClearCart = (carts) => {
    //     carts = [];
    //     setCarts(carts);
    // };

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container '>

            <div className='row mt-5'>
                <div className='col-md-9'>
                    <div className='products-view'>
                        {
                            products.map(product => <Products
                                product={product}
                                key={product.id}
                                addToCart={addToCart}>

                            </Products>)
                        }
                    </div>
                </div>
                <div className='col-md-3'>
                    {

                        // cart.map((item) => (<h4 key={item.id}>
                        //     {item.name}
                        // </h4>))

                        // cart.map(item => <Cart item={item}
                        //     key={item.id}></Cart>)

                        <Cart cart={cart}></Cart>

                    }



                </div>
            </div>
            <div>
                q-1: How react works?
                answer:  React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible.React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.

                q-2: how use state works
                answer:
                useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

            </div>
        </div>
    );
};

export default Market;
