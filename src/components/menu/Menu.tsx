import React from "react";

interface MenuProps extends React.ComponentPropsWithoutRef<"div"> {}
const Menu = ({ children }: MenuProps) => {
  return <div className="menu-container">{children}</div>;
};

export default Menu;
