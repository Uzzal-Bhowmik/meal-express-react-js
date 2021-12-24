import React from 'react';

const Meal = (props) => {

    const { "strMeal": mealName, "strInstructions": mealDesc, "strMealThumb": mealPic } = props.mealDetails;



    return (
        <div className='col-md-4'>
            <div className="card" style={{ "width": "18rem" }}>
                <img src={mealPic} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{mealName}</h5>
                    <p className="card-text">{mealDesc.slice(1, 200)}</p>
                    <button className="btn btn-primary" onClick={() => props.handleAddToCart(props.mealDetails)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;