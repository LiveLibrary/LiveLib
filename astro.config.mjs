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
      defaultLocale: "zh-CN",
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      sidebar: [
        {
          label: "主体",
          autogenerate: { directory: "1-lib" },
        },
        {
          label: "数据细胞",
          autogenerate: { directory: "2-cell" },
        },
        {
          label: "范式",
          autogenerate: { directory: "3-paradigm" },
        },
        {
          label: "日志",
          autogenerate: { directory: "4-log" },
        },
        {
          label: "演示",
          autogenerate: { directory: "demo" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/andyluss/lib",
        },
      ],
      plugins: [
        starlightThemeFlexoki(),
        starlightBlog(),
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
