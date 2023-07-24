import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "dark";
  onClose: () => void;
}

const Alert = ({ children, onClose, color = "primary" }: Props) => {
  return (
    <div
      className={"alert alert-" + color + " alert-dismissible fade show"}
      role="alert"
    >
      {children}
      <button
        type="button"
        data-bs-dismiss="alert"
        className="btn-close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
