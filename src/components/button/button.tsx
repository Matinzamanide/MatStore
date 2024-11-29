import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function checkVariant(variant?: TVariant) {
  if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  }
}
const Button: React.FC<TButton> = ({ children, variant, ...rest }) => {
  return (
    <button {...rest} style={checkVariant(variant)}>
      {children}
    </button>
  );
};

export default Button;
