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
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
