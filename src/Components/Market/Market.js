import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../Products/Products';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Market = () => {
    return (
        <div className=''>

            <Row>
                <Col xs={13} md={9}>
                    <Products></Products>
                </Col>
                <Col xs={5} md={3}>
                    xs=6 md=4
                </Col>
            </Row>
        </div>
    );
};

export default Market;