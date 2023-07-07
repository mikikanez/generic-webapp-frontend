import { Box } from "@mui/material";
import { valor } from "..";

export default function Component40({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box
			style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main, height: valor(0, component) }}
			{...props}
		/>
	);
}
