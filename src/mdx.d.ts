declare module '*.mdx' {
  export const metadata: {
    title: string;
    publishDate: string;
    slug: string;
    updatedDate: string;
    description: string;
    publish: boolean;
    featuredPost: boolean;
    tags: string[];
    categories: string[];
    keywords: string[];
    banner: string;
  };
}
