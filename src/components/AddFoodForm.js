// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from "react";
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setcalories] = useState(0);
    const [servings, setservings] = useState(0);
  
     const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    console.log("Submitted", newFood);
    props.AddFoodForm(newFood);

    // Reset the state
    setName("");
    setImage("");
    setcalories(0);
    setservings(0);
  }; 
  
    return (
   
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => setName(e.target.value)} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => setImage(e.target.value)} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={(e) => setcalories(e.target.value)} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={(e) => setservings(e.target.value)} />

      <button type="submit">Create</button>
    </form>
    </div>
  );
}

export default AddFoodForm;
//iteración 4