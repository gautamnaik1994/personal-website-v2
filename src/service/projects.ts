import { readdir } from 'fs/promises';
import path from 'path';
import { Project } from '@/types';

export const categories = ['AI & Machine Learning', 'Software Engineering'];

export async function getProjects(): Promise<Project[]> {
  const files = await readdir('src/content/projects');
  const mdFiles = files.filter((file) => path.extname(file) === '.md');

  let projects = await Promise.all(
    mdFiles.map(async (file) => {
      let banner = null;
      const { frontmatter, default: content } = await import(
        `@/content/projects/${file}`
      );

      if (frontmatter.image) {
        banner = await import(`@/content/projects/${frontmatter.image}`);
        banner = banner.default;
      }

      return {
        ...frontmatter,
        content,
        banner,
      };
    })
  );
  projects = projects.filter((project) => project.publish);
  return projects.sort((a, b) => b.order - a.order);
}

export async function getProjectsByCategory({
  category,
}: {
  category: string;
}): Promise<Project[]> {
  const allProjects = await getProjects();
  const projects = allProjects.filter(
    (project) => project.category === category
  );

  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getProjects();
  const featuredProjects = allProjects.filter((project) => project.homepage);

  return featuredProjects.sort((a, b) => b.order - a.order);
}
