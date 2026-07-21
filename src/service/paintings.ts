import { readdir } from 'fs/promises';
import path from 'path';
import { Painting } from '@/types';

export async function getPaintings(): Promise<Painting[]> {
  const files = await readdir(`src/content/paintings`);
  const mdFiles = files.filter((file) => path.extname(file) === `.md`);

  let paintings = await Promise.all(
    mdFiles.map(async (file) => {
      let image = null;
      const { frontmatter } = await import(`@/content/paintings/${file}`);

      if (frontmatter.image) {
        image = await import(`@/content/paintings/${frontmatter.image}`);
        image = image.default;
      }

      return {
        ...frontmatter,
        image,
      };
    })
  );
  paintings = paintings.filter((painting) => painting.publish);
  return paintings.sort((a, b) => a.order - b.order);
}
