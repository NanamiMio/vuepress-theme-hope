import type { VNode } from "vue";
import { defineComponent, h } from "vue";
import { useFrontmatter } from "vuepress/client";

import MarkdownContent from "@theme-hope/components/MarkdownContent";
import PortfolioHero from "@theme-hope/components/PortfolioHero";
import { DropTransition } from "@theme-hope/components/transitions/DropTransition";

import type { ThemePortfolioFrontmatter } from "../../shared/index.js";

import "../styles/portfolio-home.scss";

export default defineComponent({
  name: "PortfolioHome",

  setup() {
    const frontmatter = useFrontmatter<ThemePortfolioFrontmatter>();

    return (): VNode => {
      const content = frontmatter.value.content ?? "portfolio";

      return h(
        "main",
        {
          id: "main-content",
          class: "vp-page vp-portfolio-home",
          "aria-labelledby": "main-title",
        },
        [
          h(PortfolioHero),
          content === "none"
            ? null
            : h(
                "div",
                h(DropTransition, { appear: true, delay: 0.24 }, () =>
                  h(MarkdownContent, {
                    class: {
                      "vp-portfolio-content": content === "portfolio",
                    },
                  }),
                ),
              ),
        ],
      );
    };
  },
});
