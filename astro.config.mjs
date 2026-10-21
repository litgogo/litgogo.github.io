import { defineConfig } from 'astro/config';

// THIS IS GOGO — 主站。用户站根路径：https://litgogo.github.io/
// 子站 /zine/ 与 /footprint/ 由各自仓库的 Project Pages 发布，与本仓库互不影响。
export default defineConfig({
  site: 'https://litgogo.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
