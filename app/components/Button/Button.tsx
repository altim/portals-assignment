import { ButtonProps } from "@/app/components/Button/Button.types";
import styles from "./Button.module.scss";
import classNames from "classnames";

export default function Button({
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.button, { [styles.disabled]: disabled })}
    >
      {children}
    </button>
  );
}
