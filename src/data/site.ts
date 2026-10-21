// 站点文案与入口配置。改文字只改这里，不动组件。
// 不存放任何私人生活数据（烟火流年、月刊、日记）。

export const site = {
  name: 'THIS IS GOGO',
  shortMark: 'GOGO.',
  tagline: 'A PERSONAL ARCHIVE OF LIFE',
  description:
    'THIS IS GOGO — 一个持续生长的个人档案馆：听过什么、去过哪里，以及这些经历如何改变思考。',
  footer: {
    left: '© 2026 GOGO', // 年份可后续改为构建时生成
    right: 'An ongoing personal archive.',
  },
};

export type Archive = {
  index: string;
  en: string;
  zh: string;
  blurb: string;
  href: string;
  image?: string;
  alt?: string;
  visible: boolean;
  status: 'live' | 'planned';
};

export const archives: Archive[] = [
  {
    index: '01',
    en: 'Sound',
    zh: '声音站',
    blurb: '听过的播客，整理成笔记与电子杂志。',
    href: 'https://litgogo.github.io/zine/',
    visible: true,
    status: 'live',
  },
  {
    index: '02',
    en: 'Footprint',
    zh: '足迹站',
    blurb: '去过的城市，写成游记，也留下走过的路线。',
    href: 'https://litgogo.github.io/footprint/',
    visible: true,
    status: 'live',
  },
];

// 导航：v1 只放三页。
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore/' },
  { label: 'About', href: '/about/' },
];

// About 正文（v1.0 草稿，待 Gogo 定稿后替换）
// About 正文：Gogo 2026-10-21 定稿，逐字照录，不改写
export const about = {
  eyebrow: 'A Little About Me',
  title: 'Hello, I\u2019m GOGO.',
  paragraphs: [
    '喜欢听播客、去陌生的地方走走，也喜欢在寻常日子里寻找值得留下来的片刻。',
    '我把听过的声音整理成笔记，把走过的地方写成游记。',
    '至于其他事情，还在慢慢发生。',
  ],
};
