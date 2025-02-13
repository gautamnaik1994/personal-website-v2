'use client';
import React, { useState, useEffect } from 'react';
import { intervalToDuration } from 'date-fns';
import Item from './Item';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

interface dateTypes {
  years: number;
  months: number;
  days: number;
  minutes: number;
  hours: number;
  seconds: number;
}

const ExperienceComponent = ({
  className = '',
  ...props
}: Props): React.ReactNode => {
  const [dateData, setDateData] = useState<dateTypes>({
    years: 0,
    months: 0,
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
  });

  useEffect(() => {
    const date = new Date(1438765200000);
    const dateInterval = setInterval(function () {
      const _dateData = intervalToDuration({ start: date, end: new Date() });
      // console.log('Data', _dateData);
      const {
        years = 0,
        months = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0,
      } = _dateData;
      setDateData({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => {
      window.clearInterval(dateInterval);
    };
  }, []);

  return (
    <div
      className={`
    ${styles.Experience} 
    ${className}`}
    >
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap&text=0123456789'
        rel='stylesheet'
      />
      <div className={styles.imgContainer}>
        <img src='/img/space.svg' alt='space' />
      </div>
      <Item titlemed='Years' title='Yrs' value={dateData.years} />
      <Item titlemed='Months' title='Mons' value={dateData.months} />
      <Item titlemed='Days' title='Days' value={dateData.days} />
      <Item titlemed='Hours' title='Hrs' value={dateData.hours} />
      <Item titlemed='Minutes' title='Mins' value={dateData.minutes} />
      <Item
        className={styles.seconds}
        titlemed='Seconds'
        title='Sec'
        value={dateData.seconds}
      />
    </div>
  );
};

export default ExperienceComponent;
