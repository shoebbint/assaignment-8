import React from 'react';

const SelectedItem = ({ cart }) => {


    console.log(cart)
    if (cart.length >= 4) {
        alert("You Cant add more than four item")
    }





    return (

        <div className='bg-light'>

            {
                cart.map(item => <h2>
                    {item.name}
                </h2>)
            }

        </div>
    );
};

export default SelectedItem;