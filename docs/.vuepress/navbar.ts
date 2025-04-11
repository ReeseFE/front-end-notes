import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '前端面试题',
    link: '/notes/exam/README.md',
  },
  {
    text: '前端实战经验',
    link: '/notes/practice/README.md',
  },
]);
