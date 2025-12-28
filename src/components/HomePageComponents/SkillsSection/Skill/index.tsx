'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useMeasure } from 'react-use';
import SkillMeter from './SkillMeter';
import styles from './index.module.scss';

interface Props {
  name: string;
  level: number;
  details: Array<{ key: string; value: string }>;
  className?: string;
  order?: number;
}

const SkillComponent = ({
  name = `UI Designing`,
  level = 55,
  order = 0,
  details,
  ...props
}: Props): React.ReactNode => {
  const defaultHeight = 25;
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
    <div className={styles.Skill} {...props}>
      <div className={styles[`box-title`]}>{name}</div>
      <SkillMeter level={level} order={order} />
      <animated.div className={styles[`info-sec`]} style={expand}>
        <div
          ref={ref as unknown as React.RefObject<HTMLDivElement>}
          className={styles[`info-inner`]}
        >
          {details.map(
            ({ key, value }): ReactNode => (
              <div key={key} className={styles.Item}>
                <div className={styles[`label`]}>{key}</div>
                <div className='value'>{value}</div>
              </div>
            )
          )}
        </div>
      </animated.div>
      <div className='button-holder text-center'>
        <button
          className={styles[`more-less-btn`]}
          onClick={() => toggle(!open)}
        >
          {open ? `Less` : `More`}
          <animated.i className='icon-arrow-right' style={rotate} />
        </button>
      </div>
    </div>
  );
};

export default SkillComponent;
