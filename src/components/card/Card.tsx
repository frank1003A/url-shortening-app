import ScrollAnimation from "../Scroll/Animation/ScrollAnimation";

interface CardProps {
  header: string;
  children: string;
  icon: string;
}
const Card = ({ header, children, icon }: CardProps) => {
  return (
    <ScrollAnimation className="card" animateClass="shortly_slideInBottom">
      <div className="icon">
        <img src={icon} alt="brand-rec" />
      </div>
      <h1>{header}</h1>
      <h2>{children}</h2>
    </ScrollAnimation>
  );
};

export default Card;
