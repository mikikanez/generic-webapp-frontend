import { Box, Container, Grid, Typography } from "@mui/material";
import { valor } from "..";

export default function Component18({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth="lg" style={{ position: "relative", display: 'flex', justifyContent: 'center' }}>
				<Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} maxWidth={'50%'} py={10} px={3}>
						<Typography
							dangerouslySetInnerHTML={{ __html: valor(0, component) }}
							variant="body1"
							textAlign={"left"}
							color={component.dark ? "white" : "black"}
						></Typography>
				</Box>
			</Container>
		</Box>
	);
}
