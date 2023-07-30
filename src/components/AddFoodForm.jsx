// Your code here
import React from 'react'
import { useState } from 'react';
import { Divider} from "antd";

function AddFoodForm({ handleAdd}) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  function handleName(event) {
    setName(event.target.value);
  }
  function handleImage(event) {
    setImage(event.target.value);
  }
  function handleCalories(event){
    setCalories(event.target.value);
  }
  function handleServings(event) {
    setServings(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const foodToAdd = {
      name,
      image, 
      calories, 
      servings, 
    }
    handleAdd(foodToAdd);
    setName('')
    setImage('')
    setCalories('')
    setServings('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <Divider style={{color: 'whitesmoke'}}>Add Food Entry</Divider>

      <label htmlFor="name"> Name </label>
      <input value={name} type="text" onChange={handleName} />

      <label> Image </label>
      <input value={image} type="text" onChange={handleImage} />

      <label> Calories </label>
      <input value={calories} type="text" onChange={handleCalories} />

      <label> Servings </label>
      <input value={servings} type="text" onChange={handleServings} />

      <button type="submit">Create</button>

    </form>
  )

}

export default AddFoodForm;