// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import starlightBlog from "starlight-blog";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightLinksValidator from "starlight-links-validator";

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
          autogenerate: { directory: "main" },
        },
        {
          label: "数据细胞",
          autogenerate: { directory: "cell" },
        },
        {
          label: "范式",
          autogenerate: { directory: "paradigms" },
        },
        {
          label: "日志",
          autogenerate: { directory: "log" },
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
  ],
});
