import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component42({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"lg"}>
				<Box py={2}>
					<Grid container spacing={8}>
						<Grid item md={6} xs={12}>
							<Box display={"flex"}>
								<Box
									mr={3}
									minWidth={80}
									height={80}
									backgroundColor={Number(component.dark) ? theme.palette.secondary.main : theme.palette.primary.main}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
								>
									<Typography
										variant="h3"
										fontWeight={"bold"}
										color={Number(component.dark) ? theme.palette.background.dark : theme.palette.background.main}
									>
										01
									</Typography>
								</Box>
								<Box>
									{valor(1, component) && (
										<Typography
											variant="h3"
											textAlign={"left"}
											fontWeight={"bold"}
											textTransform={"unset"}
											mt={1}
											mb={3}
											color={Number(component.dark) ? theme.palette.details.main : theme.palette.background.dark}
										>
											{valor(1, component)}
										</Typography>
									)}
									{valor(2, component) && (
										<Box>
											<Typography
												dangerouslySetInnerHTML={{ __html: valor(2, component) }}
												variant="body1"
												textAlign={"left"}
												color={Number(component.dark) ? "white" : "black"}
											></Typography>
										</Box>
									)}
								</Box>
							</Box>
							<Box display={"flex"} mt={5}>
								<Box
									mr={3}
									minWidth={80}
									height={80}
									backgroundColor={Number(component.dark) ? theme.palette.secondary.main : theme.palette.primary.main}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
								>
									<Typography
										variant="h3"
										fontWeight={"bold"}
										color={Number(component.dark) ? theme.palette.background.dark : theme.palette.background.main}
									>
										02
									</Typography>
								</Box>
								<Box>
									{valor(3, component) && (
										<Typography
											variant="h3"
											textAlign={"left"}
											fontWeight={"bold"}
											textTransform={"unset"}
											mt={1}
											mb={3}
											color={Number(component.dark) ? theme.palette.details.main : theme.palette.background.dark}
										>
											{valor(3, component)}
										</Typography>
									)}
									{valor(4, component) && (
										<Box>
											<Typography
												dangerouslySetInnerHTML={{ __html: valor(4, component) }}
												variant="body1"
												textAlign={"left"}
												color={Number(component.dark) ? "white" : "black"}
											></Typography>
										</Box>
									)}
								</Box>
							</Box>
							<Box display={"flex"} mt={5}>
								<Box
									mr={3}
									minWidth={80}
									height={80}
									backgroundColor={Number(component.dark) ? theme.palette.secondary.main : theme.palette.primary.main}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
								>
									<Typography
										variant="h3"
										fontWeight={"bold"}
										color={Number(component.dark) ? theme.palette.background.dark : theme.palette.background.main}
									>
										03
									</Typography>
								</Box>
								<Box>
									{valor(5, component) && (
										<Typography
											variant="h3"
											textAlign={"left"}
											fontWeight={"bold"}
											textTransform={"unset"}
											mt={1}
											mb={3}
											color={Number(component.dark) ? theme.palette.details.main : theme.palette.background.dark}
										>
											{valor(5, component)}
										</Typography>
									)}
									{valor(6, component) && (
										<Box>
											<Typography
												dangerouslySetInnerHTML={{ __html: valor(6, component) }}
												variant="body1"
												textAlign={"left"}
												color={Number(component.dark) ? "white" : "black"}
											></Typography>
										</Box>
									)}
								</Box>
							</Box>
						</Grid>

						<Grid item md={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
							{valor(0, component) && (
								<Box width={"100%"} height={matches ? 378 : 200} position={"relative"}>
									<Image alt="Imatge" src={imatges.filter((i) => i.id === 0)[0]?.imatge} fill style={{ objectFit: "contain" }} />
								</Box>
							)}
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
