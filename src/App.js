// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [foodsArr, setfoodsArr] = useState(foods);
  //const [filterFoodsArr, setfilterFoodsArr] = useState(foods);
  const [searchTerm, setsearchTerm] = useState('');

  
  const addNewfood = (newFood) => {
    const updatedFoods = [...foodsArr, newFood];
    setfoodsArr(updatedFoods);
  };

  return <div className="App">

<div className='AppDos'>
<div>
  <input type="text" placeholder='Search...' onChange={event=>{setsearchTerm(event.target.value)}}/>
 </div> 
  {foodsArr.filter((val)=>{
    if(setsearchTerm == ""){
      return val
    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    }
  }).map((val,key)=>{
    return <div className='comida' key={key}>
    <FoodBox name = {val.name}  image = {val.image} calories = {val.calories} servings = {val.servings}/>
    </div>
  })}
</div>


<AddFoodForm AddFoodForm={addNewfood} />
  </div>;
  
}
export default App;
