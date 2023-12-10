import { defineConfig } from "astro/config";
import stylex from "@sfroment/astro-stylex";
import mdx from "@astrojs/mdx";
import path from "path";

import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), stylex({ astroDir: __dirname + "/src" })],
});
