"use client";

import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const AnimationCard = ({ children, delay = 0 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const styles = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0px)" : "translateY(40px)",
    config: { tension: 160, friction: 18 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export default AnimationCard;