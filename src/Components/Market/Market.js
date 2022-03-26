import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Cart from '../cart/Cart';
import './Market.css'

const Market = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div className='container '>

            <div className='row mt-5'>
                <div className='col-md-9'>
                    <div className='products-view'>
                        {
                            products.map(product => <Products
                                product={product}>

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