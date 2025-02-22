import { getProjectsByCategory } from '@/service/projects';
import { Project } from '@/types';
import ProjectItem from '@/components/ProjectItem';
import Container from '@/components/Container';
import styles from './index.module.scss';
import HeroFn from '@/components/HeroBanner';
import ProjectListLD from '@/components/JsonLD/projectListLD';
import { Metadata } from 'next';
import siteMetaData from '@/content/staticData/siteMetaData';

export const metadata: Metadata = {
  title: `Projects`,
  description: siteMetaData.projectPageDescription,
  appleWebApp: {
    title: `Projects`,
  },
  openGraph: {
    url: `${siteMetaData.siteUrl}/projects`, // fixed the URL to use siteMetaData
    title: `Projects`,
    description: siteMetaData.projectPageDescription,
  },
  twitter: {
    title: `Projects`,
    description: siteMetaData.projectPageDescription,
  },
};

async function ProjectsPage() {
  const softwareProjects: Project[] = await getProjectsByCategory({
    category: `Software Engineering`,
  });
  const aiProjects: Project[] = await getProjectsByCategory({
    category: `AI & Machine Learning`,
  });

  return (
    <>
      <ProjectListLD projects={[...softwareProjects, ...aiProjects]} />
      <HeroFn title='Projects' />
      <Container className={styles[`c-container`]}>
        <h2 className={styles.h2}>AI & Machine Learning Projects</h2>
        <div className={`${styles.grid}`}>
          {aiProjects.map((project) => (
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

        <h2 className={styles.h2}>Software Engineering Projects</h2>
        <div className={`${styles.grid}`}>
          {softwareProjects.map((project) => (
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
      </Container>
    </>
  );
}

export default ProjectsPage;
