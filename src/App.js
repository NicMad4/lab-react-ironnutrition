// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';

function App() {
  const [foodsArr, setfoodsArr] = useState(foods);
  return <div className="App">

{foodsArr.map((foodArr) => {
return (
<FoodBox name = {foodArr.name}  image = {foodArr.image} calories = {foodArr.calories} servings = {foodArr.servings}/>

   );
        })
      }
  </div>;
  
}
export default App;
