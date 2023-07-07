import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component46({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth="lg">
				<Box py={2}>
					<Grid container spacing={8}>
						<Grid item md={6} xs={12} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
							<Box>
								{valor(1, component) && (
									<Typography
										variant="body1"
										mb={4}
										textAlign={"left"}
										fontWeight={"bold"}
										textTransform={"unset"}
										color={Number(component.dark) ? theme.palette.details.main : theme.palette.secondary.main}
									>
										{valor(1, component)}
									</Typography>
								)}
								{valor(0, component) && (
									<Typography
										variant="h2"
										mb={4}
										color={Number(component.dark) ? "white" : "black"}
										textTransform={"unset"}
										fontWeight={"bold"}
									>
										{valor(0, component)}
									</Typography>
								)}
								{valor(2, component) && (
									<Box my={5}>
										<Typography variant="body2" color={Number(component.dark) ? "white" : theme.palette.background.dark}>
											{valor(2, component)}
										</Typography>
									</Box>
								)}
								{valor(4, component)?.titol && (
									<Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
										<CustomButtonPublic
											background
											title={valor(4, component)?.titol}
											onClick={() => router.push(valor(4, component)?.link)}
											light={Number(component.dark)}
										/>
									</Box>
								)}
							</Box>
						</Grid>
						<Grid item md={6} xs={12}>
							{valor(3, component) && (
								<div style={{ width: "100%", height: matches ? 413 : 500, position: "relative", textAlign: "left" }}>
									<Image alt="Imatge" src={imatges.filter((i) => i.id === 3)[0]?.imatge} fill style={{ objectFit: "cover" }} />
								</div>
							)}
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
