"use client";

import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const AnimationCard = ({ children, delay = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("card-" + delay);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;

      if (isVisible) setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [delay]);

  const styles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(50px)",
    delay,
  });

  return (
    <animated.div id={"card-" + delay} style={styles}>
      {children}
    </animated.div>
  );
};

export default AnimationCard;