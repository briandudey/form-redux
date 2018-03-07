import React from 'react';

export default function Ingredient(props) {
  
  return (
    <div className="ingredient"> 
    <div className="ingredient-quantity">{props.name}</div>
    <div className="ingredient-name">{props.quantity}</div>
    </div>
    )
 
}