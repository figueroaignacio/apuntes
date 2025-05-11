import rehypePrettyCode from "rehype-pretty-code";
import { defineCollection, defineConfig, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

export const notes = defineCollection({
  name: "Notes",
  pattern: "notes/**/*.md",
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      description: s.string(),
      published: s.boolean().default(false),
      body: s.markdown(),
      toc: s.object({
        content: s.toc(),
        visible: s.boolean().default(true),
      }),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "./src/content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { notes },
  markdown: { rehypePlugins: [rehypePrettyCode] },
});
