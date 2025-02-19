import type { MDXComponents } from 'mdx/types';
import { H1, H2, H3, H4, H5, H6, UL, OL, P, A } from '@/components/MComp/TextC';
import Alert from '@/components/MComp/Alert';
import Image from '@/components/MComp/CustomImage';
import ExpandableSeeMore from '@/components/MComp/ExpandableSeeMore';
import { Aside } from '@/components/MComp/Aside';

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
    // code: Code,
    ...components,
  };
}
