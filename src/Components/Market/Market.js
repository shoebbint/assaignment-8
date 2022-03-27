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
        </div>
    );
};

export default Market;
