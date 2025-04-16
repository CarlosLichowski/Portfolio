import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimateOnViewProps {
  children: React.ReactNode;
  animationProps?: {
    initial: {};
    animate: {};
    transition?: {};
  };
}

const AnimateOnView: React.FC<AnimateOnViewProps> = ({ children, animationProps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start(animationProps?.animate || { opacity: 1, y: 0 });
    }
  }, [isInView, controls, animationProps?.animate]);

  return (
    <motion.div
      ref={ref}
      initial={animationProps?.initial || { opacity: 0, y: 50 }}
      animate={controls}
      transition={animationProps?.transition || { duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView;