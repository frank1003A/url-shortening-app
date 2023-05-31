interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: JSX.Element;
}
const Iconbutton = ({ children, className, ...rest }: IconButtonProps) => {
  return (
    <button className={`${className} icon-btn`} {...rest}>
      {children}
    </button>
  );
};

export default Iconbutton;
