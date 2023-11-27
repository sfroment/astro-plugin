import * as stylex from "@stylexjs/stylex";

export default stylex.create({
	mainGrid: {
		display: "grid",
		alignContent: "center",
		placeItems: "center",
		height: "100vh",
		fontFamily:
			'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
	},
	p: (value) => ({
		paddingTop: `${4 / value}rem`,
		paddingBottom: `${4 / value}rem`,
		paddingLeft: `${4 / value}rem`,
		paddingRight: `${4 / value}rem`,
	}),
	underline: {
		textDecoration: "underline",
	},
	button: {
		backgroundColor: "rgb(168, 85, 247)",
		color: "white",
		paddingTop: "0.5rem",
		paddingBottom: "0.5rem",
		paddingLeft: "1rem",
		paddingRight: "1rem",
		fontFamily: "inherit",
		fontSize: "100%",
		fontWeight: "600",
		borderRadius: "0.5rem",
		borderStyle: "solid",
		borderWidth: "0",
		":hover": {
			backgroundColor: "rgb(126, 34, 206)",
		},
	},
});
