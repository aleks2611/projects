/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./Dialog.module.css";

export function Dialog({ children, isOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return createPortal(
    isOpen ? (
      <div className={classes["dialog-shadow"]}>
        <div className={classes["dialog-card"]}>{children}</div>
      </div>
    ) : null,
    document.body
  );
}
