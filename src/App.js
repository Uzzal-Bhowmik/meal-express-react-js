import { useState, useEffect } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Meal from './Components/Meal/Meal';

function App() {

  const [meals, setMeals] = useState([])

  const [searchText, setSearchText] = useState("a");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchText)
      .then(res => res.json())
      .then(data => setMeals(data.meals))
  }, [searchText])


  const [cart, setCart] = useState([])

  const handleAddToCart = (meal) => {
    const newCart = [...cart, meal];
    setCart(newCart);
  }

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <Header handleSearch={handleSearch}></Header>

      {/* Meals and Meals list container */}
      <div className="row mt-4">

        {/* meals */}
        <div className='col-md-9'>
          <div className="row gy-4 mx-auto">

            {
              meals === null || meals === undefined ?
                <h1 className='text-danger text-center'>Nohting was found!</h1> :
                meals.map(meal => <Meal key={meal.idMeal} mealDetails={meal} handleAddToCart={handleAddToCart}></Meal>)
            }

          </div>
        </div>


        {/* meal list */}
        <div className='col-md-3 border-start'>
          <Cart cart={cart}></Cart>
        </div>

      </div>
    </div>
  );
}


export default App;
