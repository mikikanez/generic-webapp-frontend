import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";
import { Montserrat } from "next/font/google";
import { data } from "@/core/hooks/useOptions";

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
			main: data?.colorPrincipal ?? "#be1622",
			light: "#1d1d1b40",
			hover: "#be1622",
		},
		secondary: {
			main: "#FFF",
			hover: "#cacaca",
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
			fontFamily: "Montserrat",
		},
	},
	typography: {
		h1: {
			fontSize: "3rem",
			color: "#be1622",
			fontWeight: 400,
			lineHeight: 0.9,
			[breakpoints.down("sm")]: {
				fontSize: "2rem",
			},
			textTransform: "uppercase",
			fontFamily: "Montserrat",
		},
		h2: {
			fontSize: "2.5rem",
			color: "#be1622",
			fontWeight: 400,
			lineHeight: 0.9,
			[breakpoints.down("sm")]: {
				fontSize: "2rem",
			},
			[breakpoints.down("lg")]: {
				fontSize: "2rem",
			},
			textTransform: "uppercase",
			fontFamily: "Montserrat",
		},
		h3: {
			fontSize: "1.3rem",
			textTransform: "uppercase",
			fontWeight: 400,
			color: "#1d1d1b",
			[breakpoints.down("sm")]: {
				fontSize: "1.2rem",
			},
			fontFamily: "Montserrat",
		},
		h4: {
			fontSize: "1.2rem",
			textTransform: "uppercase",
			fontWeight: 600,
			color: "#be1622",
			[breakpoints.down("sm")]: {
				fontSize: "1.2rem",
			},
			fontFamily: "Montserrat",
		},
		h5: {
			fontSize: "1.21rem",
			textTransform: "uppercase",
			fontWeight: 800,
			color: "#1d1d1b",
			fontFamily: "Montserrat",
		},
		h6: {
			fontSize: "1rem",
			textTransform: "uppercase",
			fontWeight: 800,
			color: "#1d1d1b",
			[breakpoints.down("sm")]: {
				fontSize: "0.8rem",
			},
			fontFamily: "Montserrat",
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.3,
			color: "#1d1d1b",
			fontWeight: 400,
			[breakpoints.down("sm")]: {
				fontSize: "1rem",
			},
			fontFamily: "Montserrat",
		},
		body2: {
			fontSize: "1rem",
			fontWeight: 400,
			lineHeight: 1.3,
			paddingBottom: 20,
			fontFamily: "Montserrat",
		},
		caption: {
			color: "#1d1d1b",
			fontSize: 14,
			fontFamily: "Montserrat",
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
			fontFamily: "Montserrat",
		},
		error: {
			color: "#d32f2f",
			fontSize: "0.9rem",
			fontFamily: "Montserrat",
		},
		title: {
			fontSize: "3.5rem",
			color: "#1d1d1b",
			fontFamily: "Montserrat",
		},
		link: {
			transition: "0.2s",
			fontSize: "0.8rem",
			color: "#FFF",
			textTransform: "uppercase",
			fontFamily: "Montserrat",
		},
		footer: {
			fontSize: "0.9rem",
			color: "white",
			fontFamily: "Montserrat",
		},
		menu: {
			fontSize: 18,
			textDecoration: "none",
			fontFamily: "Montserrat",
		},
	},
	"& a": {
		color: "black",
	},
});

export const montserrat = Montserrat({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export default theme;
