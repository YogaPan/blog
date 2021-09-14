# Galtz's Blog

![workflow](https://github.com/YogaPan/blog/actions/workflows/main.yml/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/c79a41a9-ce41-4dc1-8044-08b07292e7b5/deploy-status)](https://app.netlify.com/sites/galtz/deploys)

使用 [Gatsby](https://www.gatsbyjs.com) + [Netlify](https://www.netlify.com) 搭建的[個人技術部落格](https://galtz.netlify.app/)，包含自己學習程式技術的筆記、工作心得，還會不定期分享好吃新奇又好玩的音樂知識！

由於筆者的強迫症，本 Blog 並沒有套用 UI Template，而是決定純手工打造，展現日本職人的匠心，いっらしゃいませ！

## 架構說明

採用 [Jamstack](https://jamstack.org)，使用 [Gatsby](https://www.gatsbyjs.com/) 作為 [Static Site Generator（SSG）](https://www.gatsbyjs.com/docs/glossary/static-site-generator/)，根據 repo 內的 markdown files 產生靜態頁面後，部署至 [Netlify](https://www.netlify.com)。主要有以下好處：

1. **Performance**：不需每次請求都經過過後端 template render，把 run time 處理的事情提前到 build time 處理。
2. **Multiple Source**：不只能使用 local 的 markdown files 作為 content source，也可以選擇透過 CI 整合 headless CMS，如 [Ghost](https://ghost.org/)、[Wordpress](https://wordpress.com/) 等。
3. **Security**：由於 content source 都在 local files 或是第三方 headless CMS 服務上，不需管理 API、database，減少受到攻擊的機會。
4. **Easy to Deploy/Scale**：在有限額度內使用完全免費，透過簡單的設定即可和 Github 整合 CI/CD，也有 [Deploy Previews](https://docs.netlify.com/site-deploys/deploy-previews/) 這種超讚的功能。

## 功能

文章都放在 `src/posts/` 下，為 [mdx](https://mdxjs.com/) 格式，簡單來說就是可以在 markdown file 中使用 `React component`。經過 gatsby build 產出的網頁會在 `public/` 底下，除了網頁內容外，還會包含：

1. `sitemap/`：由 [gatsby-plugin-advanced-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap/) 產生，提交給 [Google Search Console](https://search.google.com/search-console/about)，讓 Google 更有效率的方式檢索網站。
2. `rss.xml`：由 [gatsby-plugin-feed](https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/) 產生，讓 RSS 服務能夠訂閱我們的 blog。
3. `robots.txt`：由 [gatsby-plugin-robots-txt](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/) 產生，主要用來避免網站因要求過多而超載。

## 開發

### 格式規範

- Git branch/commit 基本上遵守 [Angular Convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)。
- Javascript 風格遵守個人 [F2E Library](https://github.com/YogaPan/f2e-library) 下的 ESLint、Prettier rules。
  - Git commit 時會透過 [lint-staged](https://github.com/okonet/lint-staged) 檢查。
  - Pull request 時會觸發 [Github Actions](https://github.com/features/actions) 進行檢查，設定檔在 [.github/workflows/main.yml](./.github/workflows/main.yml)。
- Markdown 格式遵守 [markdownlint](https://github.com/markdownlint/markdownlint) 下的 [Rules](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md)。
- 文章的撰寫格式遵守 [writing guideline](./docs/writing-guideline.md)。

### Recommended VSCode Extension

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 延伸閱讀

- [Jamstack](https://jamstack.org/)
- [淺談 Jamstack - 小隊員日誌](https://leoner.wordpress.com/2020/05/01/淺談-jamstack/)
- [SPA, SSG, SSR and JAMStack: a front-end acronyms guide](https://levelup.gitconnected.com/spa-ssg-ssr-and-jamstack-a-front-end-acronyms-guide-6add9543f24d)
- [WTF are JAMstack Apps and Static Site Generators (SSG)](https://dev.to/vincentntang/wtf-are-jamstack-apps-and-static-site-generators-ssg-56if)
- [Delivering Modern Website Experiences: The Journey to a Content Mesh | Gatsby](https://www.gatsbyjs.com/blog/2018-10-04-journey-to-the-content-mesh/)
- [Day 14  Server-Side-Rendering - (1) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10244948)

P.S. 舊版 Blog [小蛇蛇的筆記](https://yogapan.github.io/)已經沒有在維護囉，不過有興趣的還是可以逛逛。
