import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { getFeaturedProjects } from '@/service/projects';
import ProjectItem from '@/components/ProjectItem';
import styles from './index.module.scss';
import InternalLinkButton from '@/components/Button/InternalLinkButton';

interface Props {
  className?: string;
}

const FeaturedProjects = async ({ className }: Props) => {
  const projects = await getFeaturedProjects();

  return (
    <section className={className}>
      <SectionTitle title='Projects' />
      <div className={`${styles.blogList} two-rem-mb`}>
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            banner={project.banner}
            links={project.links}
            details={project.details}
            projectColor={project.projectColor}
            externalProject={project.externalProject}
          >
            <project.content />
          </ProjectItem>
        ))}
      </div>
      <div className='text-center'>
        <InternalLinkButton
          href='/projects'
          title='View All Projects'
          variant='primary'
        >
          View All Projects
        </InternalLinkButton>
      </div>
    </section>
  );
};

export default FeaturedProjects;
