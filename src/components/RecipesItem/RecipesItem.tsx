import { useState, useEffect, FC } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./RecipesItem.module.scss";

interface RecipesItemType {
  title: string;
  summary: string;
  image: string;
  instructions: string;
}

const RecipesItem: FC = (): JSX.Element => {
  const { id } = useParams();
  console.log(id);
  const [appState, setAppState] = useState<RecipesItemType>();
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=70f74fd38a0b41829bb0cca10a2518be`;

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [id]);
  console.log(apiUrl);
  console.log(appState);
  return (
    <div className={styles.recipesItem}>
      {appState && (
        <div>
          <img
            src={`${appState.image}`}
            alt=""
            className={styles.recipesItem__img}
          />
          <div>
            <div className={styles.recipesItem__title}>{appState?.title}</div>
            <div dangerouslySetInnerHTML={{ __html: appState.summary }} />
            <div dangerouslySetInnerHTML={{ __html: appState.instructions }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipesItem;

// https://api.spoonacular.com/recipes/{id рецепта}/information?apiKey={значение apiKey}"
