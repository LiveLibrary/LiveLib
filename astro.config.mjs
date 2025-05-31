// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  site: "https://lib.lushisang.com",
  image: {
    // See https://docs.astro.build/zh-cn/reference/errors/missing-sharp/
    service: passthroughImageService(),
  },
  integrations: [
    starlight({
      plugins: [starlightThemeFlexoki(), starlightBlog()],
      title: "🧚‍♂️逍遥书院📚",
      lastUpdated: true,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/andyluss/lib",
        },
      ],
      sidebar: [
        {
          label: "逍遥猫项目",
          autogenerate: { directory: "livecat" },
        },
        {
          label: "范式",
          autogenerate: { directory: "paradigms" },
        },
      ],
    }),
  ],
});
