import { getProjects } from '@/service/projects';
import { Project } from '@/types';
import ProjectItem from '@/components/ProjectItem';
import Container from '@/components/Container';
import styles from './index.module.scss';

async function ProjectsPage() {
  const projects: Project[] = await getProjects();

  return (
    <Container>
      <div className={`${styles.grid}`}>
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
    </Container>
  );
}

export default ProjectsPage;
