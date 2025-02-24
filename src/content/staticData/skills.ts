import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    title: `Data Science, AI & ML`,
    value: 80,
    publish: true,
    details: [
      {
        key: `Expertise`,
        value: `Predictive Analysis • Time Series Analysis • EDA • Model Deployment • Business Intelligence • Experiment Tracking`,
      },
      {
        key: `Tools`,
        value: `Python • Pandas • Numpy • SQL • Streamlit • Tableau • Sci-kit Learn • PySpark`,
      },
    ],
  },
  {
    title: `Frontend Dev`,
    value: 80,
    publish: true,
    details: [
      {
        key: `Expertise`,
        value: `Web Development • Single Page Applications • Progressive Web Apps`,
      },
      {
        key: `Technologies`,
        value: `HTML-CSS • ReactJS • NextJS • Redux • JavaScript • Typescript • Webpack`,
      },
    ],
  },
  {
    title: `Backend Dev`,
    value: 50,
    publish: true,
    details: [
      { key: `Expertise`, value: `Serverless Apps • API Design` },
      {
        key: `Technologies`,
        value: `Python • Fast API • AWS CDK • AWS Lambda • NodeJS`,
      },
      { key: `Databases`, value: `DynamoDB • MySQL` },
    ],
  },
  // {
  //   title: 'Game Developer',
  //   value: 48,
  //   publish: false,
  //   details: [
  //     {
  //       key: 'Expertise',
  //       value: '3D Modelling • Texturing • Level Design • UI Design',
  //     },
  //     { key: 'Technologies', value: 'C# • Nvidia CG' },
  //     { key: 'Tools', value: 'Unity3D • Autodesk Maya • Blender • Audacity' },
  //   ],
  // },
  // {
  //   title: 'Designer',
  //   value: 70,
  //   publish: false,
  //   details: [
  //     {
  //       key: 'Expertise',
  //       value: 'UI Design • Graphic Design • Branding • Prototyping',
  //     },
  //     {
  //       key: 'Tools',
  //       value: 'Adobe XD • Photoshop • Illustrator • Figma • Indesign',
  //     },
  //   ],
  // },
];

export default skills;
