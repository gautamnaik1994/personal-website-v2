import { getWorkEx } from '@/service/workex';
import { type WorkExperience } from '@/types';
import WorkExpeItem from './WorkExperience';
import HireMe from './HireMe';
import SectionTitle from '@/components/SectionTitle';
import styles from './index.module.scss';

interface TimelineProps {
  className?: string;
}

async function Timeline({ className }: TimelineProps) {
  const workex: WorkExperience[] = await getWorkEx();

  return (
    <section className={className}>
      <SectionTitle title='Timeline' />
      <div className={styles.parent}>
        <div className={styles.workExperience}>
          {workex.map((d, i) => (
            <WorkExpeItem
              key={i}
              title={d.title}
              role={d.role}
              timeRange={d.timeRange}
              status={d.status}
              companyUrl={d.companyUrl}
            >
              <d.content />
            </WorkExpeItem>
          ))}
        </div>
        <HireMe />
      </div>
    </section>
  );
}

export default Timeline;
