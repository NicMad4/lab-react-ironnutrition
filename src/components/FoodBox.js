import React from "react";
import { Card, Row, Col, Divider, Input, Button } from 'antd';


// Iteration 2
function FoodBox(props) {
    const{name,image,calories,servings}=props
    return (
      <Col>
        <Card
          title={name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={image} height={60} alt={name} />
          <p>Calories: {calories}</p>
          <p>Servings: {servings }</p>
          <p>
            <b>Total Calories: {calories * servings} </b> kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;
/*<FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> */