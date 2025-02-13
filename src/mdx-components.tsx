import type { MDXComponents } from 'mdx/types';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  UL,
  OL,
  P,
} from '@/components/MdxComponents/TextC';
import Alert from '@/components/MdxComponents/Alert';
import Code from '@/components/MdxComponents/Code';
import Image from '@/components/MdxComponents/image';
import ExpandableSeeMore from '@/components/ExpandableSeeMore';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    ul: UL,
    ol: OL,
    p: P,
    Alert: Alert,
    img: Image,
    ExpandableSeeMore: ExpandableSeeMore,
    // code: Code,
    ...components,
  };
}
