//@ts-ignore
import stylexPlugin from "@stylexjs/rollup-plugin";

const IS_DEV_ENV =
  process.env.NODE_ENV === 'development' ||
  process.env.BABEL_ENV === 'development';

export default ({
	dev = IS_DEV_ENV,
  fileName = 'stylex.css',
	astroDir = '',
  babelConfig: { plugins = [], presets = [] } = {},
  ...options
})  => {
	const plugin = stylexPlugin({
		dev,
		fileName,
		babelConfig: {
			plugins,
			presets,
		},
		...options,
	});
	return {
		...plugin,
		async transform(inputCode = '', id = '') {
			if (astroDir !== '' && !id.startsWith(astroDir)) {
				return null;
			}
			return plugin.transform(inputCode, id);
		},
	};
	console.log(plugin);
}
