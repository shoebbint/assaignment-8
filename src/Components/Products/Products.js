import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Products.css"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Products = ({ product, addToCart }) => {
    const { image, name, id, price, company } = product;
    return (
        <div>
            <div className='card '>
                <img src={image} className='card-img-top ' alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <h6 className='card-text'>Price: $ {price}</h6>
                    <p className='card-text'>Brand:  {company}</p>
                    <p className='card-text'>Product Id: {id}</p>
                    <a onClick={() => addToCart(product)} className='btn btn-primary'>Go somewhere <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </a>

                </div>
            </div>
        </div>
    );
};

export default Products;