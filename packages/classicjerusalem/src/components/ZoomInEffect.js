import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ZoomInOnScroll = ({
  children,
  threshold = 0.2,
  rootMargin = '0px',
  delay = 0,
  duration = 0.5,
  distance = '20px',
}) => {
  const [ref, inView] = useInView({
    threshold: threshold,
    rootMargin: rootMargin,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: `scale(0.1) translate3d(0, ${distance}, 0)`,
    },
    entered: {
      opacity: 1,
      transform: 'scale(1) translate3d(0, 0, 0)',
      transition: `opacity ${duration}s ease-in-out ${delay}s, transform ${duration}s ease-in-out ${delay}s`,
    },
  };

  return (
    <div
      ref={ref}
      style={{
        ...transitionStyles[isVisible ? 'entered' : 'entering'],
      }}
    >
      {children}
    </div>
  );
};

export default ZoomInOnScroll;
