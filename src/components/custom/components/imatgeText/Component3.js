import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { valor } from "..";
import { useTheme, styled } from "@mui/material/styles";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component3({ component }) {
	console.log(component);
	const matches = useMediaQuery("(min-width:960px)");
	const theme = useTheme();

	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main, position: "relative" }}>
			<Container maxWidth="md">
				<Box py={30} px={5} style={{ zIndex: 100, position: "relative" }}>
					<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
						<Typography variant="h1" textAlign={"center"} textTransform={"capitalize"} mb={4} color={component.dark ? "white" : "dark"}>
							{valor(0, component)}
						</Typography>
						<Box my={5}>
							<Typography variant="body1" textAlign={"center"} color={component.dark ? "white" : "dark"}>
								{valor(1, component)}
							</Typography>
						</Box>
						<CustomButtonPublic title={valor(3, component)} light={component.dark} />
					</Box>
				</Box>
				<BoxBlur />
			</Container>
		</Box>
	);
}

const BoxBlur = styled(Box)(({ theme }) => ({
	filter: "blur(150px)",
	backgroundColor: theme.palette.secondary.main,
	opacity: 0.3,
	width: 700,
	height: 400,
	transform: "rotate(-15deg)",
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	zIndex: 0,
	margin: "auto",
}));
