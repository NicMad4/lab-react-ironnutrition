// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [foodsArr, setfoodsArr] = useState(foods);
  
  const addNewfood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setfoodsArr(updatedFoods);
  };

  return <div className="App">

{foodsArr.map((foodArr) => {
return (
<FoodBox name = {foodArr.name}  image = {foodArr.image} calories = {foodArr.calories} servings = {foodArr.servings}/>

   );
        })
      }
<AddFoodForm AddFoodForm={addNewfood} />
  </div>;
  
}
export default App;
