import { useState, useEffect } from "react";

import axios from "axios";

import RecipesCard from "../RecipeCard/RecipeCard";
import styles from "./Recipes.module.scss";

interface RecipesType {
  id: number;
  title: string;
  imageType: string;
  image: string;
}

function Recipes() {
  const apiUrl =
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=70f74fd38a0b41829bb0cca10a2518be";
  const [appState, setAppState] = useState<RecipesType[]>();

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons.results);
    });
  }, [apiUrl]);
  return (
    <div className={styles.recipes}>
      {appState &&
        appState.map((recipe: RecipesType) => (
          <RecipesCard
            title={recipe.title}
            id={recipe.id}
            imageType={recipe.imageType}
            image={recipe.image}
          />
        ))}
    </div>
  );
}

export default Recipes;
