import socialLinks from '@/content/staticData/socialLinks';
// import Script from 'next/script';
import siteMetaData from '@/content/staticData/siteMetaData';

export default async function JsonLD() {
  const data = {
    '@context': `https://schema.org`,
    '@type': `Person`,
    name: siteMetaData.title,
    url: siteMetaData.siteUrl,
    jobTitle: `Software Engineer, Data Scientist, Machine Learning Engineer`,
    description: siteMetaData.description,
    image: `${siteMetaData.siteUrl}/icons/icon-512x512.png`,
    email: `gautamnaik1994@gmail.com`,
    sameAs: socialLinks.map((link) => link.value),
    alumniOf: [
      {
        '@type': `EducationalOrganization`,
        name: `Padre Conceicao College of Engineering`,
        url: `https://pccegoa.edu.in/`,
      },
      {
        '@type': `EducationalOrganization`,
        name: `Woolf University`,
        url: `https://woolf.university/`,
      },
    ],
    hasCredential: [
      {
        '@type': `EducationalOccupationalCredential`,
        name: `Bachelor of Computer Science`,
        educationalLevel: `BachelorDegree`,
      },
      {
        '@type': `EducationalOccupationalCredential`,
        name: `Masters in Computer Science: AI and ML`,
        educationalLevel: `MasterDegree`,
      },
    ],
    skills: [
      {
        '@type': `DefinedTerm`,
        name: `Web Development`,
        description: `Building websites and web applications`,
      },
      {
        '@type': `DefinedTerm`,
        name: `Data Science and Analysis`,
        description: `Analyzing and interpreting complex data`,
      },
      {
        '@type': `DefinedTerm`,
        name: `Machine Learning`,
        description: `Building predictive models`,
      },
      {
        '@type': `DefinedTerm`,
        name: `Backend Development`,
        description: `Building server-side applications`,
      },
    ],
    knowsAbout: [
      `Artificial Intelligence`,
      `Cloud Computing`,
      `Databases`,
      `DevOps`,
      `Frontend Development`,
      `Software Development`,
      `Web Development`,
      `Game Development`,
      `Progressive Web Apps`,
      `Unity Game Development`,
      `Photoshop`,
      `Illustrator`,
      `Figma`,
    ],
    // experience: [
    //   {
    //     '@type': 'OrganizationRole',
    //     organization: {
    //       '@type': 'Organization',
    //       name: 'Company Name',
    //       url: 'https://www.companywebsite.com', // If available
    //     },
    //     jobTitle: 'Your Job Title',
    //     startDate: 'YYYY-MM-DD',
    //     endDate: 'YYYY-MM-DD', // Or leave blank if currently employed
    //     // You can add a description of your role here if you want
    //   },
    //   // Add more experiences
    // ],
  };

  return (
    //eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <script
      id='homePageLD'
      async={true}
      // strategy='beforeInteractive'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
