import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div>
            <h1 className='mb-4'>
                <i className="fas fa-hamburger"></i>
                <i> {cart.length}</i>
            </h1>

            <h4>Meals Added: </h4>

            <ul>
                {
                    cart.map(meal => <h6><li>{meal.strMeal}</li></h6>)
                }
            </ul>
        </div>
    );
};

export default Cart;