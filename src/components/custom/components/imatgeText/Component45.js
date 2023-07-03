import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomLink from "@/components/elements/CustomLink";

export default function Component45({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }}{...props}>
			<Container maxWidth={"lg"}>
				<Box py={2}>
					<Grid container spacing={6}>
						<Grid item md={3} xs={12}>
							<Box>
								{valor(0, component) && (
									<Box style={{ width: "100%", minHeight: matches ? 328 : 500, height: "100%", position: "relative"}}>
										<Image alt="Imatge" src={imatges.filter((i) => i.id === 0)[0]?.imatge} fill objectFit="cover" />
									</Box>
								)}
							</Box>
						</Grid>
						<Grid item md={3} xs={12}>
                            <Box>
								{valor(1, component) && (
									<Typography variant="h4" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={2} color={component.dark ? 'white' : 'black'}>
										{valor(1, component)}
									</Typography>
								)}
                                {valor(2, component) && (
									<Typography variant="body1" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} color={component.dark ? theme.palette.details.main : theme.palette.secondary.main}>
										{valor(2, component)}
									</Typography>
								)}
								{valor(3, component) && (
									<Typography
										dangerouslySetInnerHTML={{ __html: valor(3, component) }}
										variant="body1"
										textAlign={"left"}
										color={component.dark ? "white" : "black"}
										mt={4}
                                        mb={2}
									></Typography>
								)}
								<CustomLink
									title={valor(4, component)?.titol}
									onClick={() => router.push(valor(4, component)?.link)}
									light={component.dark}
								/>
                            </Box>
						</Grid>
						<Grid item md={3} xs={12}>
							<Box>
								{valor(5, component) && (
									<Box style={{ width: "100%", minHeight: matches ? 328 : 500, height: "100%", position: "relative"}}>
										<Image alt="Imatge" src={imatges.filter((i) => i.id === 5)[0]?.imatge} fill objectFit="cover" />
									</Box>
								)}
							</Box>
						</Grid>
						<Grid item md={3} xs={12}>
                            <Box>
								{valor(6, component) && (
									<Typography variant="h4" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={2} color={component.dark ? 'white' : 'black'}>
										{valor(6, component)}
									</Typography>
								)}
                                {valor(7, component) && (
									<Typography variant="body1" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} color={component.dark ? theme.palette.details.main : theme.palette.secondary.main}>
										{valor(7, component)}
									</Typography>
								)}
								{valor(8, component) && (
									<Typography
										dangerouslySetInnerHTML={{ __html: valor(8, component) }}
										variant="body1"
										textAlign={"left"}
										color={component.dark ? "white" : "black"}
										mt={4}
                                        mb={2}
									></Typography>
								)}
								<CustomLink
									title={valor(9, component)?.titol}
									onClick={() => router.push(valor(9, component)?.link)}
									light={component.dark}
								/>
                            </Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
