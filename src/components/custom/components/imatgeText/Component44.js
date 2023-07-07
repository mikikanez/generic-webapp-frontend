import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomLink from "@/components/elements/CustomLink";

export default function Component44({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"lg"}>
				<Box py={2}>
					<Grid container spacing={6}>
						<Grid item md={4} xs={12}>
							<Box>
								{valor(1, component) && (
									<Typography
										variant="h4"
										textAlign={"left"}
										fontWeight={"bold"}
										textTransform={"unset"}
										mb={3}
										color={Number(component.dark) ? "white" : "black"}
									>
										{valor(1, component)}
									</Typography>
								)}
								{valor(2, component) && (
									<Typography
										dangerouslySetInnerHTML={{ __html: valor(2, component) }}
										variant="body1"
										textAlign={"left"}
										color={Number(component.dark) ? "white" : "black"}
										small={matches ? false : true}
										mb={2}
									></Typography>
								)}
								<CustomLink
									title={valor(3, component)?.titol}
									onClick={() => router.push(valor(3, component)?.link)}
									light={Number(component.dark)}
								/>
								{valor(0, component) && (
									<Box style={{ width: "100%", minHeight: matches ? 300 : 500, height: "100%", position: "relative" }} mt={2}>
										<Image alt="Imatge" src={imatges.filter((i) => i.id === 0)[0]?.imatge} fill objectFit="cover" />
									</Box>
								)}
							</Box>
						</Grid>
						<Grid item md={4} xs={12}>
							<Box>
								{valor(5, component) && (
									<Typography
										variant="h4"
										textAlign={"left"}
										fontWeight={"bold"}
										textTransform={"unset"}
										mb={3}
										color={Number(component.dark) ? "white" : "black"}
									>
										{valor(5, component)}
									</Typography>
								)}
								{valor(6, component) && (
									<Typography
										dangerouslySetInnerHTML={{ __html: valor(6, component) }}
										variant="body1"
										textAlign={"left"}
										color={Number(component.dark) ? "white" : "black"}
										mb={2}
									></Typography>
								)}
								<CustomLink
									title={valor(7, component)?.titol}
									onClick={() => router.push(valor(7, component)?.link)}
									light={Number(component.dark)}
								/>
								{valor(4, component) && (
									<Box style={{ width: "100%", minHeight: matches ? 300 : 500, height: "100%", position: "relative" }} mt={2}>
										<Image alt="Imatge" src={imatges.filter((i) => i.id === 4)[0]?.imatge} fill objectFit="cover" />
									</Box>
								)}
							</Box>
						</Grid>
						<Grid item md={4} xs={12}>
							<Box>
								{valor(9, component) && (
									<Typography
										variant="h4"
										textAlign={"left"}
										fontWeight={"bold"}
										textTransform={"unset"}
										mb={3}
										color={Number(component.dark) ? "white" : "black"}
									>
										{valor(9, component)}
									</Typography>
								)}
								{valor(10, component) && (
									<Typography
										dangerouslySetInnerHTML={{ __html: valor(10, component) }}
										variant="body1"
										textAlign={"left"}
										color={Number(component.dark) ? "white" : "black"}
										mb={2}
									></Typography>
								)}
								<CustomLink
									title={valor(11, component)?.titol}
									onClick={() => router.push(valor(11, component)?.link)}
									light={Number(component.dark)}
								/>
								{valor(8, component) && (
									<Box style={{ width: "100%", minHeight: matches ? 300 : 500, height: "100%", position: "relative" }} mt={2}>
										<Image alt="Imatge" src={imatges.filter((i) => i.id === 8)[0]?.imatge} fill objectFit="cover" />
									</Box>
								)}
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
