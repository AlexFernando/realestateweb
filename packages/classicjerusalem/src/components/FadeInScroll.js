import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInOnScroll = ({ children, threshold = 0.2, rootMargin = '0px' }) => {
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

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1.2s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
