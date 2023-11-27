import { defineConfig } from "astro/config";
import stylex from "@sfroment/astro-stylex";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), stylex()],
});
