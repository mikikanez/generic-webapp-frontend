import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component1({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} py={15} px={2} {...props}>
			<Container disableGutters maxWidth="lg" style={{ position: "relative" }}>
				<Grid container spacing={4}>
					<Grid item md={12} xs={12} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>
						<Typography variant="h2" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} color={component.dark ? "white" : "black"}>
							{valor(0, component)}
						</Typography>
					</Grid>
					<Grid item md={6} xs={12} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}></Grid>
					<Grid item md={6} xs={12} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} zIndex={100} justifyContent={"space-evenly"}>
						<Divider sx={{ borderWidth: 1, width: "100%", borderColor: theme.palette.primary.main, marginBottom: "25px" }} />
						<Typography
							dangerouslySetInnerHTML={{ __html: valor(1, component) }}
							variant="body1"
							textAlign={"left"}
							color={component.dark ? "white" : "black"}
						></Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
