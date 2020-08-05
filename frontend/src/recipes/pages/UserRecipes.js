import React from "react";
import { useParams } from "react-router-dom";

import RecipeList from "../components/RecipeList";

const DUMMY_RECIPES = [
  {
    id: "r1",
    title: "Bacalhau à brás",
    description:
      "O bacalhau à Brás, com bacalhau desfiado, batatas e ovo, é uma das receitas mais famosas em Portugal. É fácil e fica pronto num instante",
    imageUrl:
      "https://www.pingodoce.pt/wp-content/uploads/2016/03/617x370_bacalhau.jpg",
    creator: "u1",
  },
  {
    id: "r2",
    title: "Francesinha",
    description:
      "Francesinha é um prato típico e originário da cidade do Porto, em Portugal.",
    imageUrl:
      "https://t2.rg.ltmcdn.com/pt/images/3/8/0/img_francesinha_a_moda_do_porto_2083_600.jpg",
    creator: "u2",
  },
];

const UserRecipes = () => {
  const userID = useParams().userId;
  const loadedRecipes = DUMMY_RECIPES.filter(recipe => recipe.creator === userID);
  return <RecipeList items={loadedRecipes} />;
};

export default UserRecipes;
