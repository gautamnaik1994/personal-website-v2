import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    title: `Data Science, AI & ML`,
    value: 90,
    publish: true,
    details: [
      {
        key: `Expertise`,
        value: `Predictive Modeling • Time Series Forecasting • Deep Learning • Gen AI • EDA • Business Intelligence • Data Viz`,
      },
      {
        key: `Tools`,
        value: `Python • Pandas • NumPy • Scikit-learn • PyTorch • SQL • Tableau • PySpark • SparkML`,
      },
    ],
  },
  {
    title: `MLOps & Cloud`,
    value: 80,
    publish: true,
    details: [
      {
        key: `Expertise`,
        value: `Simple ETL Pipelines • Model Deployment • Experiment Tracking • Cloud Architecture • Serverless Computing`,
      },
      {
        key: `Tools`,
        value: `AWS CDK • AWS Lambda • Docker • MLflow • AWS SageMaker `,
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
];

export default skills;
