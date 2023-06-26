import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component12({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth="lg" style={{ position: "relative" }}>
				<Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} py={10} px={3}>
					<Typography variant="h2" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={4} color={component.dark ? "white" : "black"}>
						{valor(0, component)}
					</Typography>
					<Box my={5}>
						<Typography
							dangerouslySetInnerHTML={{ __html: valor(1, component) }}
							variant="body1"
							textAlign={"left"}
							color={component.dark ? "white" : "black"}
						></Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
