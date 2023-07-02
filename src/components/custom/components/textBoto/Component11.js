import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component11({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} py={2} px={3} {...props}>
			<Container disableGutters maxWidth="lg">
				<Box py={2}>
					<Grid container spacing={4}>
						<Grid item md={6} xs={12} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>

							{valor(2, component) && (
								<Typography variant="body1" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={3} color={component.dark ? theme.palette.details.main: theme.palette.secondary.main}>
									{valor(2, component)}
								</Typography>
							)}
							{valor(0, component) && (
								<Typography variant="h2" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={3} color={component.dark ? "white" : "black"}>
									{valor(0, component)}
								</Typography>
							)}
							{valor(1, component) && (
								<Box>
									<Typography
										dangerouslySetInnerHTML={{ __html: valor(1, component) }}
										variant="body1"
										textAlign={"left"}
										color={component.dark ? "white" : theme.palette.background.dark}
									></Typography>
								</Box>
							)}
						</Grid>
						<Grid item md={6} xs={12} display={"flex"} alignItems={"center"} zIndex={100} justifyContent={"space-evenly"}>
							<Grid container spacing={4}>
								<Grid item md={6} xs={12}>
									{valor(3, component)?.titol && (
										<CustomButtonPublic
											background
											title={valor(3, component)?.titol}
											onClick={() => router.push(valor(3, component)?.link)}
											light={component.dark}
										/>
									)}
								</Grid>
								<Grid item md={6} xs={12}>
									{valor(4, component)?.titol && (
										<CustomButtonPublic
											background
											title={valor(4, component)?.titol}
											onClick={() => router.push(valor(4, component)?.link)}
											light={component.dark}
										/>
									)}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
