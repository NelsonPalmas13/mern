import React from "react";

import Button from '../../shared/components/FormElements/Button';
import Card from "../../shared/components/UIElements/Card";
import "./RecipeItem.css";

const RecipeItem = props => {
  return (
    <li className="recipe-item">
      <Card className="recipe-item__content">
        <div className="recipe-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="recipe-item__info">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="recipe-item__actions">
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default RecipeItem;
