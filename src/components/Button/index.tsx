import { ButtonProps } from "./Button.types";

const Button = ({
  disabled,
  size,
  text,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  const { onClick } = rest;

  return (
    <div>
      <button data-testid="button_testId" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;
