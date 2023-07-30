import "./App.css";
import React from "react";
import FoodBox from "./components/FoodBox";
import JSONfood from "./foods.json";
import { useState } from "react";
import {Row, Divider, Input} from "antd";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

const foodsList = JSONfood
console.log(foodsList)

  function App() {
    const [foods, setFoods] = useState(foodsList)
    const [showTheForm, setShowTheForm] = useState(false)
    const [searchedString, setSearchedString] = useState('')

    let foodsToDisplay
    if(searchedString === '') {
      foodsToDisplay = foods
    } else {
      foodsToDisplay = foods.filter((food) => 
      food.name.toLowerCase().includes(searchedString.toLowerCase())
      )
  }

  return (
    <div className="App">
     {showTheForm && <AddFoodForm handleAdd={handleAdd}/>}
     <button onClick={() => setShowTheForm(!showTheForm)}>
      {showTheForm ? 'Hide form' : 'Add new Food'}
     </button>
     <Search
        searchedString={searchedString}
        setSearchedString={setSearchedString}
      />
     <Divider style={{color: 'whitesmoke'}}>Food List</Divider>
     <Row style={{width: '100%', justifyContent: 'start'}}>
      {foodsToDisplay.map((food) => {
        return (
          <FoodBox
           key={food.name}
           name={food.name}
           calories={food.calories}
           image={food.image}
           servings={food.servings}
           handleDelete={handleDelete}
           />
        )
      })}
     </Row>
   </div>
  )
  
  function handleAdd(object) {
    setFoods([...foods, object])
  }

  function handleDelete(name) {
    console.log(name)
    const filteredFoods = foods.filter((food) => {
    console.log(food.name, food.name !== name)
    return food.name !== name
    })
    setFoods(filteredFoods)
  }
}
      
export default App;






