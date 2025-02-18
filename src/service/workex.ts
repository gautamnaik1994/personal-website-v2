import { WorkExperience } from '@/types';
import { readdir } from 'fs/promises';
import path from 'path';

export async function getWorkEx(): Promise<WorkExperience[]> {
  const files = await readdir('src/content/workExperience');
  const mdFiles = files.filter((file) => path.extname(file) === '.md');

  let workex = await Promise.all(
    mdFiles.map(async (file) => {
      const { frontmatter, default: content } = await import(
        `@/content/workExperience/${file}`
      );

      return {
        ...frontmatter,
        content,
      };
    })
  );
  return workex.sort((a, b) => b.order - a.order);
}
