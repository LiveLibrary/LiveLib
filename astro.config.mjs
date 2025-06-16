// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import starlightBlog from "starlight-blog";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightLinksValidator from "starlight-links-validator";
import vue from "@astrojs/vue";
import liveCode from "astro-live-code";

// https://astro.build/config
export default defineConfig({
  site: "https://lib.lushisang.com",
  image: {
    // See https://docs.astro.build/zh-cn/reference/errors/missing-sharp/
    service: passthroughImageService(),
  },
  integrations: [
    starlight({
      title: "🧚‍♂️逍遥书院📚",
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/LiveLibrary/LiveLibrary/edit/main/",
      },
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      sidebar: [
        {
          label: "📚总览",
          autogenerate: { directory: "1-lib" },
        },
        {
          label: "📈价值故事🧚",
          items: [
            {
              label: "💽数据🧑‍💻",
              autogenerate: { directory: "2-value/0-data" },
            },
            {
              label: "🍇桑田👩‍🌾",
              autogenerate: { directory: "2-value/1-farm" },
            },
            {
              label: "🏭工厂🧑‍🏭",
              autogenerate: { directory: "2-value/2-factory" },
            },
            {
              label: "🪐数码元宇宙🧑‍🎤",
              autogenerate: { directory: "2-value/3-metaverse" },
            },
          ],
        },
        {
          label: "✅范式",
          autogenerate: { directory: "3-paradigm" },
        },
        {
          label: "📄文章",
          autogenerate: { directory: "articles" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/LiveLibrary/LiveLibrary",
        },
      ],
      plugins: [
        starlightThemeFlexoki(),
        starlightBlog({
          authors: {
            livecat: {
              name: "逍遥闲人",
              title: "逍遥书院院长",
              picture: "/images/catlu200.png", // Images in the `public` directory are supported.
              url: "https://lushisang.com",
            },
          },
        }),
        starlightUtils(),
        starlightLinksValidator(),
      ],
    }),
    vue(),
    liveCode({
      defaultProps: {
        theme: "dark",
        // apply client directives to all components
        "client:load": true,
      },
    }),
  ],
});
