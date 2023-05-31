import React from "react";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {}
const Section = ({ children, className }: SectionProps) => {
  return <section className={className}>{children}</section>;
};

export default Section;
