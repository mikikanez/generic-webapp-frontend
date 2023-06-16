import { Circle } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useTheme } from "@mui/material/styles";
import ItailoredButton from "@/components/elements/ItailoredButton";

export default function Component3({ component }) {
	console.log(component);
	const matches = useMediaQuery("(min-width:960px)");

	const theme = useTheme();

	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : "" }}>
			<Container maxWidth="md">
				<Box py={30} px={5}>
					<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
						<Typography variant="h1" textAlign={"center"} textTransform={"capitalize"} mb={4} color={component.dark ? "white" : "dark"}>
							{valor(0, component)}
						</Typography>
						<Box my={5}>
							<Typography variant="body1" textAlign={"center"} color={component.dark ? "white" : "dark"}>
								{valor(1, component)}
							</Typography>
						</Box>
						<ItailoredButton title={valor(3, component)} href={""} target="_blank" color={"white !important"} />
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
