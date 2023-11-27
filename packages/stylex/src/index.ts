import type { AstroIntegration } from "astro";
// @ts-ignore
import stylexPlugin from "@stylexjs/rollup-plugin";
import StyleXSheet from "@stylexjs/stylex/lib/StyleXSheet.js";
import path from "path";
import { fileURLToPath } from "url";

export declare interface StylexConfig {
	fileName?: string;
	classNamePrefix?: string;
	unstable_moduleResolution?: {
		type?: "commonJS" | "haste";
		rootDir?: string;
	};
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function stylexIntegration(
	config: StylexConfig = {}
): AstroIntegration {
	const defaultConfig = {
		fileName: "stylex.css",
		dev: false,
		classNamePrefix: "x",
		unstable_moduleResolution: {
			type: "commonJS",
			rootDir: path.join(__dirname, "../.."),
		},
	};
	const effectiveConfig = { ...defaultConfig, ...config };

	return {
		name: "@sfroment/astro-stylex",
		hooks: {
			"astro:server:setup": async ({ server }) => {
				server.middlewares.use((req, res, next) => {
					if (req.url === "/" + effectiveConfig.fileName) {
						res.write(StyleXSheet.styleSheet.getCSS());
						res.end();
						return;
					}
					next();
				});
			},
			"astro:config:setup": async ({ command, updateConfig, injectScript }) => {
				if (command === "dev") {
					effectiveConfig.dev = true;
				}
				updateConfig({
					vite: {
						plugins: [stylexPlugin(effectiveConfig)],
					},
				});
			},
		},
	};
}
