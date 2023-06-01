import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";
import { Inter, Montserrat, Roboto } from "next/font/google";

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
				main: "#1d1d1b",
				secondary: "#be1622",
				third: "#1d1d1b",
				light: "#dce1e4",
			},
			primary: {
				main: data?.primary ?? "#000",
				light: data?.primary + "40" ?? "#000",
				hover: data?.primary + "80" ?? "#000",
			},
			secondary: {
				main: data?.secondary ?? "#FFF",
				hover: data?.secondary + "40" ?? "#FFF",
			},
			danger: {
				main: "#be1622",
				light: "#be1622",
			},
			success: {
				main: "#9f1e25",
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
				fontFamily: data?.font,
			},
		},
		typography: {
			h1: {
				fontSize: "3rem",
				color: data?.primary ?? "#000",
				fontWeight: 400,
				lineHeight: 0.9,
				[breakpoints.down("sm")]: {
					fontSize: "2rem",
				},
				textTransform: "uppercase",
				fontFamily: data?.font,
			},
			h2: {
				fontSize: "2.5rem",
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
				fontFamily: data?.font,
			},
			h3: {
				fontSize: "1.3rem",
				textTransform: "uppercase",
				fontWeight: 400,
				color: "#1d1d1b",
				[breakpoints.down("sm")]: {
					fontSize: "1.2rem",
				},
				fontFamily: data?.font,
			},
			h4: {
				fontSize: "1.2rem",
				textTransform: "uppercase",
				fontWeight: 600,
				color: data?.primary ?? "#000",
				[breakpoints.down("sm")]: {
					fontSize: "1.2rem",
				},
				fontFamily: data?.font,
			},
			h5: {
				fontSize: "1.21rem",
				textTransform: "uppercase",
				fontWeight: 800,
				color: data?.secondary ?? "#000",
				fontFamily: data?.font,
			},
			h6: {
				fontSize: "1rem",
				textTransform: "uppercase",
				fontWeight: 800,
				color: data?.secondary ?? "#000",
				[breakpoints.down("sm")]: {
					fontSize: "0.8rem",
				},
				fontFamily: data?.font,
			},
			body1: {
				fontSize: "1rem",
				lineHeight: 1.3,
				color: "#1d1d1b",
				fontWeight: 400,
				[breakpoints.down("sm")]: {
					fontSize: "1rem",
				},
				fontFamily: data?.font,
			},
			body2: {
				fontSize: "1rem",
				fontWeight: 400,
				lineHeight: 1.3,
				paddingBottom: 20,
				fontFamily: data?.font,
			},
			caption: {
				color: "#1d1d1b",
				fontSize: 14,
				fontFamily: data?.font,
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
				fontFamily: data?.font,
			},
			error: {
				color: "#d32f2f",
				fontSize: "0.9rem",
				fontFamily: data?.font,
			},
			title: {
				fontSize: "3.5rem",
				color: "#1d1d1b",
				fontFamily: data?.font,
			},
			link: {
				transition: "0.2s",
				fontSize: "0.8rem",
				color: "#FFF",
				textTransform: "uppercase",
				fontFamily: data?.font,
			},
			footer: {
				fontSize: "0.9rem",
				color: "white",
				fontFamily: data?.font,
			},
			menu: {
				fontSize: 18,
				textDecoration: "none",
				fontFamily: data?.font,
			},
		},
		"& a": {
			color: "black",
		},
	});

	return theme;
};

export default CrearTema;

export const montserrat = Montserrat({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const inter = Inter({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const isDark = (c) => {
	let c1 = c?.substring(1); // strip #
	let rgb = parseInt(c1, 16); // convert rrggbb to decimal
	let r = (rgb >> 16) & 0xff; // extract red
	let g = (rgb >> 8) & 0xff; // extract green
	let b = (rgb >> 0) & 0xff; // extract blue

	let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

	return luma < 150;
};
