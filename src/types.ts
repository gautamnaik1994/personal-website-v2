import { Category } from '@/service/blog';
import React from 'react';

export interface ImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
}
export interface Frontmatter {
  title: string;
  date: string;
  slug: string;
  updatedDate: string;
  description: string;
  publish: boolean;
  featuredPost: boolean;
  tags: string[];
  categories: Category[];
  keywords: string[];
  bannerImage: string;
}

export interface ReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

export interface Post extends Frontmatter {
  slug: string;
  bannerPath: ImageData;
  readingTime: ReadingTime;
}

export interface TOCItem {
  depth: number;
  value: string;
  attributes: Record<string, any>;
  children: TOCItem[];
  slug: string;
}

export interface PostContent {
  content: any;
  frontmatter: Frontmatter;
  bannerPath: ImageData;
  toc: TOCItem[];
  readingTime: ReadingTime;
  nextPost?: {
    slug: string;
    title: string;
  };
  prevPost?: {
    slug: string;
    title: string;
  };
}

export interface PostContentLite {
  frontmatter: Frontmatter;
  bannerPath: ImageData;
}

export interface SocialLink {
  key: string;
  value: string;
  iconClassName: string;
}

export interface SkillDetail {
  key: string;
  value: string;
}

export interface Skill {
  title: string;
  value: number;
  publish: boolean;
  details: SkillDetail[];
}

export interface ProjectDetails {
  key: string;
  value: string;
}

export interface ProjectLinks {
  key: string;
  value: string;
}

export interface Project {
  title: string;
  banner?: string;
  order: number;
  publish: boolean;
  homepage: boolean;
  externalProject: boolean;
  projectColor: string;
  category: string;
  companyName?: string;
  details: ProjectDetails[];
  links: ProjectLinks[];
  content: any;
  description: string;
  mainLink: string;
}

export type WorkExperience = {
  title: string;
  role: string;
  timeRange: string;
  order: number;
  status: string;
  companyUrl: string;
  content: any;
};
