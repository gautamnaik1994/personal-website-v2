export const subContainerWidth = 800;

export const NAVIGATION = [
  {
    to: `/projects`,
    label: `Projects`,
    closeSidebar: true,
    title: `Checkout my cool projects`,
    navClassName: ``,
  },
  {
    to: `/blog`,
    label: `Blog`,
    closeSidebar: true,
    title: `Read articles of my blog`,
    navClassName: ``,
  },
  // { to: '/snippets/', label: 'Snippets' },
  {
    to: `https://gautamnaik1994.gitbook.io/snippets/`,
    label: `Snips & Tips`,
    external: true,
    title: `My Digital Garden`,
    navClassName: `snips-tips`,
  },
  {
    to: `https://github.com/gautamnaik1994/`,
    label: `Github`,
    external: true,
    title: `My Github`,
    navClassName: `github`,
  },
];
