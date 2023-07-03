import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";
import { font } from "./fonts";

const CrearTema = (data) => {
	const breakpoints = createBreakpoints({});

	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 960,
				lg: 1250,
				xl: 1920,
			},
		},
		palette: {
			background: {
				main: data?.background ?? "#000",
				dark: data?.background_dark ?? "#000",
				footer: data?.footerColor ?? "#000",
			},
			primary: {
				main: data?.primary ?? "#000",
				light: data?.primary + "40" ?? "#000",
				hover: data?.primary + "80" ?? "#000",
			},
			secondary: {
				main: data?.secondary ?? "#FFF",
				hover: data?.secondary + "40" ?? "#FFF",
				light: data?.details ?? "#FFF",
			},

			details: {
				main: data?.details ?? "#FFF",
				hover: data?.details + "40" ?? "#FFF",
			},
			danger: {
				main: "#be1622",
				light: "#be162290",
			},
			success: {
				main: "#22bb33",
			},
			info: {
				main: "#FFF",
				hover: "#be1622",
			},
			error: {
				main: "#be1622",
			},
			text: {
				primary: "#1d1d1b",
				secondary: "#be1622",
				third: "#be1622",
			},
			typography: {
				...font(data).style,
			},
		},
		typography: {
			h1: {
				fontSize: "3rem",
				color: data?.details ?? "#000",
				fontWeight: 800,
				lineHeight: 0.9,
				[breakpoints.down("sm")]: {
					fontSize: "2.5rem",
				},
				textTransform: "uppercase",
				...font(data).style,
			},
			h2: {
				fontSize: "2.8rem",
				color: data?.primary ?? "#000",
				fontWeight: 400,
				lineHeight: 0.9,
				[breakpoints.down("sm")]: {
					fontSize: "2rem",
				},
				[breakpoints.down("lg")]: {
					fontSize: "2rem",
				},
				textTransform: "uppercase",
				...font(data).style,
			},
			h3: {
				fontSize: "1.3rem",
				textTransform: "uppercase",
				fontWeight: 400,
				color: "#1d1d1b",
				[breakpoints.down("sm")]: {
					fontSize: "1.2rem",
				},
				...font(data).style,
			},
			h4: {
				fontSize: "1.2rem",
				textTransform: "uppercase",
				fontWeight: 600,
				color: data?.primary ?? "#000",
				[breakpoints.down("sm")]: {
					fontSize: "1.2rem",
				},
				...font(data).style,
			},
			h5: {
				fontSize: "1.21rem",
				textTransform: "uppercase",
				fontWeight: 800,
				color: data?.secondary ?? "#000",
				...font(data).style,
			},
			h6: {
				fontSize: "1rem",
				textTransform: "uppercase",
				fontWeight: 800,
				color: data?.secondary ?? "#000",
				[breakpoints.down("sm")]: {
					fontSize: "0.8rem",
				},
				...font(data).style,
			},
			body1: {
				fontSize: "1.1rem",
				lineHeight: 1.3,
				color: "#1d1d1b",
				fontWeight: 400,
				[breakpoints.down("sm")]: {
					fontSize: "1rem",
				},
				...font(data).style,
			},
			body2: {
				fontSize: "1.2rem",
				color: "#1d1d1b",
				fontWeight: 400,
				lineHeight: 1.3,
				paddingBottom: 20,
				...font(data).style,
				[breakpoints.down("sm")]: {
					fontSize: "1rem",
				},
			},
			caption: {
				color: "#1d1d1b",
				fontSize: 14,
				...font(data).style,
			},
			root: {
				"& a": {
					color: "#1d1d1b",
					textDecoration: "none",
					transition: "0.5s",
					"&:hover": {
						color: "black",
					},
				},
				...font(data).style,
			},
			error: {
				color: "#d32f2f",
				fontSize: "0.9rem",
				...font(data).style,
			},
			title: {
				fontSize: "3.5rem",
				color: "#1d1d1b",
				...font(data).style,
			},
			link: {
				transition: "0.2s",
				fontSize: "0.8rem",
				color: "#FFF",
				textTransform: "uppercase",
				...font(data).style,
			},
			footer: {
				fontSize: "0.9rem",
				color: "white",
				...font(data).style,
			},
			menu: {
				fontSize: 18,
				textDecoration: "none",
				...font(data).style,
			},
		},
		"& a": {
			color: "black",
		},
	});

	return theme;
};

export default CrearTema;

export const isDark = (c) => {
	let c1 = c?.substring(1); // strip #
	let rgb = parseInt(c1, 16); // convert rrggbb to decimal
	let r = (rgb >> 16) & 0xff; // extract red
	let g = (rgb >> 8) & 0xff; // extract green
	let b = (rgb >> 0) & 0xff; // extract blue

	let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

	return luma < 200;
};
