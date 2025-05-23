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
  A,
  BlockQuote,
} from '@/components/MDComponents/TextC';
import Alert from '@/components/MDComponents/Alert';
import Image from '@/components/MDComponents/CustomImage';
import ExpandableSeeMore from '@/components/MDComponents/ExpandableSeeMore';
import { Aside } from '@/components/MDComponents/Aside';

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
    a: A,
    Alert: Alert,
    img: Image,
    Aside: Aside,
    ExpandableSeeMore: ExpandableSeeMore,
    blockquote: BlockQuote,
    // code: Code,
    ...components,
  };
}
