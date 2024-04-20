import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren & {
  onClick: () => void;
  disabled?: boolean;
};
