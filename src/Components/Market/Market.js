import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';
import Cart from '../cart/Cart';
import './Market.css'


const Market = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // button function
    const addToCart = (productName, productImage) => {
        console.log(productName)
    }
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
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Market;