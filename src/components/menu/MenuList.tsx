import React from "react";

interface MenuListProps extends React.ComponentPropsWithoutRef<"div"> {
  handler: boolean;
}
const MenuList = ({ children, handler }: MenuListProps) => {
  return handler ? (
    <div className="menu-list animate__fadeInDown">{children}</div>
  ) : null;
};

export default MenuList;
