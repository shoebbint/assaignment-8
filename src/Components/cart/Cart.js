import React from 'react';
import "./Cart.css"
const Cart = (props) => {

    const { name } = props.item;

    console.log(name)


    return (

        <div className='bg-secondary h-100'>
            <h2>Selected Items</h2>
            <div>

                <div className='d-flex cart-img'>
                    {/* <div>
                        <img src={cart[0].image} alt="" />
                    </div> */}
                    <div>
                        <h4 className=''>{name}</h4>
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

// const CartItem = ({ cart }) => {
//     const { img, name } = cart;
//     return (
//       <div className="cart-info">
//         <div className="cart-img">
//           <img src={img} alt="" />
//         </div>
//         <h4>{name}</h4>
//         <MdDelete className="dlt-icon"></MdDelete>
//       </div>
//     );
//   };