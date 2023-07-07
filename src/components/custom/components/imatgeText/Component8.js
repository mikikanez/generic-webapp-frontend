import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component8({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth={false} style={{ position: "relative" }}>
				<Grid container spacing={4}>
					<Grid
						item
						md={6}
						xs={12}
						style={{
							backgroundColor: Number(component.dark) ? theme.palette.background.main : theme.palette.primary.main,
						}}
						paddingY={"0 !important"}
					>
						<Box
							p={10}
							style={{
								backgroundColor: Number(component.dark) ? theme.palette.background.main : theme.palette.primary.main,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								height: "100%",
							}}
						>
							<div style={{ width: "100%", height: "100%", maxWidth: "320px", maxHeight: "360px", position: "relative", textAlign: "left" }}>
								<Image alt="Imatge" src={imatges.filter((i) => i.id === 2)[0]?.imatge} fill style={{ objectFit: "cover" }} />
							</div>
						</Box>
					</Grid>
					<Grid
						item
						md={6}
						xs={12}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"flex-start"}
						zIndex={100}
						justifyContent={"space-between"}
						padding={"5% 0 !important"}
					>
						<Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} p={10}>
							<Typography
								variant="h2"
								textAlign={"left"}
								fontWeight={"bold"}
								textTransform={"unset"}
								mb={4}
								color={Number(component.dark) ? "white" : "black"}
							>
								{valor(0, component)}
							</Typography>
							<Box my={5}>
								<Typography variant="body1" textAlign={"left"} color={Number(component.dark) ? "white" : "black"}>
									{valor(1, component)}
								</Typography>
							</Box>
							<CustomButtonPublic
								background
								title={valor(3, component)?.titol}
								onClick={() => router.push(valor(3, component)?.link)}
								light={Number(component.dark)}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
