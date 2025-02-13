import React from 'react';
import Skill from './Skill';
import SectionTitle from '@/components/SectionTitle';
import styles from './index.module.scss';
import skills from '@/content/staticData/skills';
import { type Skill as SkillType } from '@/types';

interface Props {
  className?: string;
}

const SkillsSection = ({ className }: Props): React.ReactElement => {
  return (
    <section className={className}>
      <SectionTitle title='Skills' />

      <div className={styles.SkillList}>
        {skills.map((skill: SkillType, i: number) => {
          return (
            <Skill
              key={i}
              name={skill.title}
              level={skill.value}
              details={skill.details}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
