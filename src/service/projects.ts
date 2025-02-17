import { readdir } from 'fs/promises';
import path from 'path';
import { Project } from '@/types';
import sharp from 'sharp';

export async function getProjects(): Promise<Project[]> {
  const files = await readdir('src/content/projects');
  const mdFiles = files.filter((file) => path.extname(file) === '.md');

  const projects = await Promise.all(
    mdFiles.map(async (file) => {
      let banner = null;
      const { frontmatter, default: content } = await import(
        `@/content/projects/${file}`
      );
      console.log('content', content);

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
  return projects.filter((project) => project.publish);
}

export async function getProjectsByCategory({
  category,
}: {
  category: string;
}): Promise<Project[]> {
  const allProjects = await getProjects();
  // Filter projects by specified category
  const projects = allProjects.filter(
    (project) => project.category === category
  );

  return projects;
}
