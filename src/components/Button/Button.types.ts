interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
  size: "sm" | "md" | "lg";
  text: string;
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}
