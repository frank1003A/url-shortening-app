import React from "react";

interface MenuOptionProps extends React.ComponentPropsWithoutRef<"div"> {}
const MenuOption = ({ children }: MenuOptionProps) => {
  return (
    <a
      href="https://github.com/frank1003A/url-shortening-app"
      className="menu-option"
    >
      {children}
    </a>
  );
};

export default MenuOption;
