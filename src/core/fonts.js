import { Inter, Montserrat, Roboto, Lobster, Josefin_Sans, Oswald, Raleway, Mulish, Lexend } from "next/font/google";

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

export const lobster = Lobster({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const josefin_sans = Josefin_Sans({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const oswald = Oswald({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const raleway = Raleway({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const mulish = Mulish({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const lexend = Lexend({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const font = (data) => {
	switch (data?.font) {
		case "Montserrat":
			return montserrat;
		case "Inter":
			return inter;
		case "Roboto":
			return roboto;
		case "Raleway":
			return raleway;
		case "Josefin Sans":
			return josefin_sans;
		case "Lobster":
			return lobster;
		case "Oswald":
			return oswald;
		case "Mulish":
			return mulish;
		case "Lexend":
			return lexend;
		default:
			return montserrat;
	}
};

export const tipografies = ["Inter", "Josefin Sans", "Lexend", "Lobster", "Montserrat", "Mulish", "Oswald", "Raleway", "Roboto"];
