import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    title: `Data Science, AI & ML`,
    value: 90,
    publish: true,
    details: [
      {
        key: `Expertise`,
        value: `Supervised & Unsupervised Learning • Time Series Forecasting • Deep Learning • NLP • Gen AI • Business Intelligence`,
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
        value: `ETL Pipelines • Model Deployment • Experiment Tracking • Cloud Architecture • CI/CD • Serverless Computing`,
      },
      {
        key: `Tools`,
        value: `AWS CDK • AWS Lambda • SQL • Docker • MLflow • AWS SageMaker • Airflow`,
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
