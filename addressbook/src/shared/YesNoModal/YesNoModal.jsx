/* eslint-disable react/prop-types */
import classes from "./YesNoModal.module.css";

export function YesNoModal({ open, title, onYes, onNo, ...rest }) {
  if (!open) return <></>;

  return (
    <div {...rest} className={`flex-v bg-blue ${classes["modal"]}`}>
      <span>{title}</span>
      <div className={classes["flex-h"]}>
        <button onClick={onYes}>Yes</button>
        <button onClick={onNo}>No</button>
      </div>
    </div>
  );
}
