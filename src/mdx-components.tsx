import type { MDXComponents } from 'mdx/types';
import { Heading } from '@/components/heading';
import Alert from '@/components/alert';
import Code from '@/components/mdxComponents/code';
import Image from '@/components/mdxComponents/image';
import ExpandableSeeMore from '@/components/ExpandableSeeMore';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading,
    Alert: Alert,
    img: Image,
    ExpandableSeeMore: ExpandableSeeMore,
    // code: Code,
    ...components,
  };
}
