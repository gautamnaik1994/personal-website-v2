import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

interface Props {
  projectColor: string;
  title: string;
  details: Array<{ key: string; value: string }>;
  links: Array<{ key: string; value: string }>;
  banner: any;
  children: any;
  className?: string;
  externalProject?: boolean;
}

export default function ProjectItem({
  title,
  banner,
  links,
  details,
  projectColor,
  children,
  externalProject,
  ...props
}: Props): React.ReactElement {
  return (
    <div className={`${styles.ProjectItemStyles} ${props.className} `}>
      <div className='top-section'>
        <div
          className={styles.imgContainer}
          style={{ background: projectColor }}
        >
          {banner ? (
            <Image
              src={banner}
              alt={title}
              width={300}
              height={200}
              loading='lazy'
              placeholder='blur'
            />
          ) : (
            <>{title}</>
          )}
          {externalProject && (
            <div className={styles.personalTag}>External Project</div>
          )}
        </div>

        <h2 className='m-0 text-primary'>{title}</h2>
        {children}
        <div>
          {details.map(({ key, value }) => (
            <div key={key} className={styles.Item}>
              <div className={styles.label}>{key}</div>
              <div className='value'>{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={`one-rem-mt ${styles.linkHolder}`}>
        {links.map(({ key, value }) => (
          <a key={key} href={value} target='_blank' rel='noopener noreferrer'>
            {key} <i className='icon-open-new-tab' />
          </a>
        ))}
      </div>
    </div>
  );
}

//  <Image src={banner} alt={title} width={300} height={200} />
