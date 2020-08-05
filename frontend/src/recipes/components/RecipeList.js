import React from "react";

import Card from "../../shared/components/UIElements/Card";
import RecipeItem from "./RecipeItem";
import "./RecipeList.css";

const RecipeList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="recipe-list-center">
        <Card>
          <h2> No recipes found.Would you like to create one ? </h2>{" "}
          <button> Share Recipe </button>{" "}
        </Card>
      </div>
    );
  }

  return (
    <ul className="recipe-list">
      {props.items.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          image={recipe.imageUrl}
          title={recipe.title}
          description={recipe.description}
          creatorId={recipe.creator}
        />
      ))}
    </ul>
  );
};

export default RecipeList;
