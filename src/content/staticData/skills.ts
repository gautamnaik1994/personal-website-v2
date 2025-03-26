import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    title: `Data Science, AI & ML`,
    value: 80,
    publish: true,
    details: [
      {
        key: `Expertise`,
        value: `Predictive Modeling • Time Series Analysis • Recommender Systems • Deep Learning • Generative AI • EDA • Business Intelligence • Data Visualization`,
      },
      {
        key: `Tools`,
        value: `Python • Pandas • NumPy • Scikit-learn • PyTorch • SQL • Tableau • PySpark`,
      },
    ],
  },
  {
    title: `MLOps & Cloud`,
    value: 70,
    publish: true,
    details: [
      {
        key: `Expertise`,
        value: `Simple ETL Pipelines • Model Deployment • Experiment Tracking • Cloud Architecture • Serverless Computing`,
      },
      {
        key: `Tools`,
        value: `Python • AWS CDK • AWS Lambda • Docker • Streamlit • MLflow • AWS`,
      },
    ],
  },
  {
    title: `Fullstack Dev`,
    value: 80,
    publish: true,
    details: [
      { key: `Expertise`, value: `API Design • Serverless Applications` },
      {
        key: `Technologies`,
        value: `Python • FastAPI • AWS CDK • AWS Lambda • Node.js • ReactJS • NextJS`,
      },
      { key: `Databases`, value: `DynamoDB • MySQL` },
    ],
  },

  // {
  //   title: `Frontend Dev`,
  //   value: 80,
  //   publish: true,
  //   details: [
  //     {
  //       key: `Expertise`,
  //       value: `Web Development • Single Page Applications • Progressive Web Apps`,
  //     },
  //     {
  //       key: `Technologies`,
  //       value: `HTML-CSS • ReactJS • NextJS • Redux • JavaScript • Typescript • Webpack`,
  //     },
  //   ],
  // },
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
