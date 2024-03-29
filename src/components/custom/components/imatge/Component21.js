import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Component21({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth={false}>
				<div style={{ width: "100%", height: matches ? 500 : 300, position: "relative", textAlign: "left" }}>
					<Image alt="Imatge" src={imatges.filter((i) => i.id === 0)[0]?.imatge} fill style={{ objectFit: "cover" }} />
				</div>
			</Container>
		</Box>
	);
}
