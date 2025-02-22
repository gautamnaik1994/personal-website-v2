import Script from 'next/script';
import { Project } from '@/types';
import siteMetaData from '@/content/staticData/siteMetaData';

interface ProjectListLDProps {
  projects: Project[];
}

export default async function JsonLD(props: ProjectListLDProps) {
  const projects = props.projects;
  const data = {
    '@context': `https://schema.org`,
    '@type': `WebPage`, // Describes the page
    name: `Projects`,
    description: siteMetaData.projectPageDescription,
    url: `${siteMetaData.siteUrl}/projects`,
    mainEntity: {
      '@type': `ItemList`,
      itemListElement: [
        projects.map((project, i) => ({
          '@type': `ListItem`,
          position: i + 1,
          item: {
            '@type': `Project`,
            name: project.title,
            description: project.description,
            url: project.mainLink,
          },
        })),
      ],
    },
    publisher: {
      '@type': `Organization`,
      name: siteMetaData.title,
      url: siteMetaData.siteUrl,
      logo: {
        '@type': `ImageObject`,
        url: `${siteMetaData.siteUrl}/img/og-image.png`,
      },
    },
  };

  return (
    <Script
      id='json-ld-project-list'
      // strategy='beforeInteractive'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
