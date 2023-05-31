import React from "react";

interface MenuButtonProps extends React.ComponentPropsWithoutRef<"div"> {}
const MenuButton = ({ children }: MenuButtonProps) => {
  return <div className="menu-button">{children}</div>;
};

export default MenuButton;
