'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from './index.module.scss';
import Bulb from './Bulb';

const HireMe = (): React.ReactNode => {
  const [entered, setEntered] = useState(false);
  const [entered2, setEntered2] = useState(false);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const jump = useSpring({
    config: { mass: 4, tension: 250, friction: 30 },
    transform: entered ? `translateY(-100%)` : `translateY(0%)`,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        if (intersectionRef && intersectionRef.current) {
          const ratio = entries[0].intersectionRatio;
          if (ratio > 0.75) {
            setEntered(true);
          } else {
            setEntered(false);
          }
          if (ratio > 0.8) {
            setEntered2(true);
          } else {
            setEntered2(false);
          }
        }
      },
      {
        threshold: [0.75, 1],
        rootMargin: `200px 0px -150px 0px`,
      }
    );

    const currentRef = intersectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={intersectionRef} className={styles.StyledHireMe}>
      <div className={`${styles[`top-sec`]} text-center`}>
        Want someone to take
        <br />
        your product to the
      </div>
      <div className={styles[`middle-sec`]}>
        <span>NEXT</span>
        {/* 
// @ts-expect-error: TypeScript cannot infer the type correctly */}
        <animated.span className={styles[`lvl`]} style={jump}>
          LEVEL?{` `}
          <span className={styles[`i-wrapper`]}>
            {` `}
            <i className='icon-arrow-right' />
            <i className={`icon-arrow-right ${styles[`s-icon`]}`} />
          </span>
        </animated.span>
      </div>
      <div className={styles[`bottom-sec`]}>
        <Bulb entered={entered2} />
        <div className={styles[`hire-text`]}>HIRE ME!!!</div>
      </div>
    </div>
  );
};

export default HireMe;
