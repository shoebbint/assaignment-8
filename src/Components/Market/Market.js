import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Cart from '../cart/Cart';

const Market = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='container'>

            <Row>
                <Col xs={13} md={9}>
                    <Products></Products>
                </Col>
                <Col xs={5} md={3}>
                    <Cart></Cart>
                </Col>
            </Row>
        </div>
    );
};

export default Market;