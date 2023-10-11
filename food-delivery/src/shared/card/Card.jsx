import classes from "./Card.module.css";

function Card({ restorant, ...rest }) {
  return (
    <div {...rest} className={classes["card"]}>
      <p>Name: {restorant.name}</p>
      <p>City: {restorant.city}</p>
      <p>Street: {restorant.street}</p>
      <p>Phone: {restorant.phone}</p>
    </div>
  );
}

export default Card;
