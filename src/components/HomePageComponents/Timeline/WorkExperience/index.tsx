'use client';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useMeasure } from 'react-use';
import styles from './index.module.scss';

interface Props {
  title: string;
  role: string;
  timeRange: string;
  status: string;
  companyUrl: string;
  children: React.ReactNode;
}

const WorkExpeContainer = ({
  title = `Bidchat`,
  role = `Frontend Developer`,
  timeRange = `March 2017 - March 2020`,
  status = `stop`,
  companyUrl = `#`,
  children,
  ...props
}: Props): React.ReactElement => {
  const defaultHeight = 15;
  const [open, toggle] = useState(false);
  const [contentHeight, setContentHeight] = useState(defaultHeight);
  const [ref, { height }] = useMeasure();
  const expand = useSpring({
    config: { mass: 4, tension: 250, friction: 30 },
    height: open ? `${contentHeight + 25}px` : `${defaultHeight}px`,
  });

  const rotate = useSpring({
    config: { mass: 4, tension: 250, friction: 30 },
    transform: open ? `rotate(270deg)` : `rotate(90deg)`,
  });
  useEffect(() => {
    // Sets initial height
    setContentHeight(height);

    // Adds resize event listener
    const handleResize = () => setContentHeight(height);

    window.addEventListener(`resize`, handleResize);

    // Clean-up
    return () => window.removeEventListener(`resize`, handleResize);
  }, [height]);

  return (
    <div className={styles.WorkExperienceMainItem} {...props}>
      {status === `play` ? (
        <div className={styles[`test-tube`]} title='Frustration Meter' />
      ) : (
        <div className={styles[`link-chain`]} />
      )}
      <div className={styles[`top-content`]}>
        <div className={`${styles[`Status`]} ${styles[status]} `}>
          <i className={`icon-${status}`} />
        </div>
        <div className={styles[`role`]}>{role}</div>
        {companyUrl ? (
          <a
            href={companyUrl}
            className={`${styles.company} text-primary`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {title}
          </a>
        ) : (
          <div className={`${styles.company} text-primary`}>{title}</div>
        )}

        <div className={styles[`time`]}>{timeRange}</div>
      </div>
      {/* 
//@ts-expect-error: TypeScript cannot infer the type correctly */}
      <animated.div className={styles[`info-sec`]} style={expand}>
        <div
          ref={ref as unknown as React.RefObject<HTMLDivElement>}
          className={styles[`info-inner`]}
        >
          {children}
          <div className={styles[`pad-bottom`]} />
        </div>
      </animated.div>

      <button
        className={styles[`more-less-btn`]}
        onClick={() => toggle(!open)}
        aria-label='Show Responsibilities'
        title='Show Responsibilities'
      >
        {/* 
//@ts-expect-error: TypeScript cannot infer the type correctly */}
        <animated.i className='icon-arrow-right' style={rotate} />
      </button>
    </div>
  );
};

export default WorkExpeContainer;
