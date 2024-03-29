import { Box, Container, Grid, Typography } from "@mui/material";
import { valor } from "..";

export default function Component16({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth="lg" style={{ position: "relative", display: "flex", justifyContent: "flex-start" }}>
				<Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} maxWidth={matches ? "50%" : "100%"} py={10} px={3}>
					<Typography
						dangerouslySetInnerHTML={{ __html: valor(0, component) }}
						variant="body1"
						textAlign={"left"}
						color={Number(component.dark) ? "white" : "black"}
					></Typography>
				</Box>
			</Container>
		</Box>
	);
}
