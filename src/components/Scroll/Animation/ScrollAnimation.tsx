import React, { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className: string;
  animateClass: string;
}
const ScrollAnimation = ({
  children,
  className,
  animateClass,
}: ScrollAnimationProps) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  const mRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elm = mRef.current!;
    const elementPosition = elm.offsetTop;

    if (scrollPosition > elementPosition) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={isAnimated ? className.concat(" " + animateClass) : className}
      ref={mRef}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
