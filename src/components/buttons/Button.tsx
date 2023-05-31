interface ButtonProps {
  icon?: boolean | JSX.Element;
  children: string;
  type: "rounded" | "square" | "text";
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, icon, type, className, onClick }: ButtonProps) => {
  const assignClassName = () => {
    if (type === "rounded") {
      return `${className} rounded-btn`;
    } else if (type === "square") {
      return `${className} square-btn`;
    } else {
      return `${className} text-btn`;
    }
  };
  return (
    <button className={assignClassName()} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
