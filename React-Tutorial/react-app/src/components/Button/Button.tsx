import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "seconday" | "danger";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
