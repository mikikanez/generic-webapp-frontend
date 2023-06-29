import { Box, Container, Typography } from "@mui/material";
import { valor } from "..";
import { useOpcions } from "@/context/OpcionsContext";

export default function Component13({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth="lg" style={{ position: "relative" }}>
				<Box display={"flex"} flexDirection={"column"} alignItems={"center"} py={10} px={3}>
					<Typography variant="h2" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={4} color={component.dark ? "white" : "black"}>
						{valor(0, component)}
					</Typography>
					{valor(1, component) && (
						<Box my={5}>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(1, component) }}
								variant="body1"
								textAlign={"left"}
								color={component.dark ? "white" : "black"}
							></Typography>
						</Box>
					)}
				</Box>
			</Container>
		</Box>
	);
}
