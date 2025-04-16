interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "normal" | "ghost";
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = "normal",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-full text-button1 font-bold transition-colors duration-200 w-fit";

  const variants = {
    normal:
      "bg-button1 text-white hover:bg-background border-2 border-button1 hover:text-button1",
    ghost:
      "border-2 border-button1 text-button1 hover:bg-button1 hover:text-background",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
