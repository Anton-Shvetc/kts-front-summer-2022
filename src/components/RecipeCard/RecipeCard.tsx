import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.scss";

interface RecipesType {
  id: number;
  title: string;
  imageType: string;
  image: string;
}

const RecipesCard: FC<RecipesType> = (props: RecipesType): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.card__star}>star</div>
      <img className={styles.card__img} src={props.image}></img>

      <Link
        to={`/recipe/${props.id}`}
        onChange={() => console.log(123)}
        className={styles.card__title}
      >
        {props.title}
      </Link>
    </div>
  );
};

export default RecipesCard;
