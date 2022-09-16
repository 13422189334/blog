import { HopeThemeNavbarGroup, HopeThemeNavbarItem, HopeThemeSidebarPageItem, HopeThemeSidebarObjectConfig   } from "vuepress-theme-hope";

export const nav : HopeThemeNavbarItem[] = [
  { text: '首页', link: '/' },
  { text: '前端知识库', link: '/Knowledge/FrontEnd/' },
  { text: '后端知识库', link: '/Knowledge/BackEnd/' },
  { text: '设计模式', link: '/DesignPattern/' },
  { text: '常用算法', link: '/Algorithm/' },
  { text: 'Git', link: '/Git/' },
  { text: '服务器', link: '/Server/' },
  { text: '性能优化', link: '/Performance/Info/' },
  { text: '推荐', link: '/Recommend/' }
]

export const sidebar: HopeThemeSidebarObjectConfig = {
  '/Algorithm/': [
    'Dichotomy/', // 二分查找理论
    'DynamicProgram/', // 动态规划算法
    'PriorityTraversal/', // 优先遍历算法
  ],
  '/Performance/': [
    'Info/',
    'Skill/',
  ]
}
