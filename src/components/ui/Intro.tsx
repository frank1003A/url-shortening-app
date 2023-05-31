import ScrollAnimation from "react-animate-on-scroll";
import illustration from "../../images/illustration-working.svg";
import Section from "../Section";
import Button from "../buttons/Button";

const Intro = () => {
  return (
    <Section className="hero-intro">
      <ScrollAnimation
        className="write-up"
        animateOnce
        animateIn="animate__zoomIn"
      >
        <h1>More than just shorter links</h1>
        <h2>
          Build your brand’s recognition and get detailed insights on how your
          links are performing
        </h2>
        <Button className="hi-btn" type="rounded">
          Get Started
        </Button>
      </ScrollAnimation>
      <div className="img">
        <img src={illustration} alt="ilustration of a working person" />
      </div>
    </Section>
  );
};

export default Intro;
