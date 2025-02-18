import Script from 'next/script';
import { Project } from '@/types';

interface ProjectListLDProps {
  projects: Project[];
}

export default async function JsonLD(props: ProjectListLDProps) {
  const projects = props.projects;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage', // Describes the page
    name: 'Projects',
    description:
      'A showcase of my software engineering and AI/Machine learning projects.',
    url: 'https://gautamnaik.com/projects',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        projects.map((project, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Project',
            name: project.title,
            description: project.description,
            url: project.mainLink,
          },
        })),
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gautam Naik',
      url: 'https://www.gautamnaik.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.gautamnaik.com/img/og-image.png', // URL of the logo
      },
    },
  };

  return (
    <Script
      strategy='beforeInteractive'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
