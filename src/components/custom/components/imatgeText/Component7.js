import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component7({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth="lg" style={{ position: "relative", padding: "5% 0" }}>
				<Grid container spacing={4}>
					<Grid item md={6} xs={12} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} zIndex={100} justifyContent={"space-between"}>
						<Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} p={10}>
							<Typography
								variant="h2"
								textAlign={"left"}
								fontWeight={"bold"}
								textTransform={"unset"}
								mb={4}
								color={component.dark ? "white" : "black"}
							>
								{valor(0, component)}
							</Typography>
							<Box my={5}>
								<Typography variant="body1" textAlign={"left"} color={component.dark ? "white" : "black"}>
									{valor(1, component)}
								</Typography>
							</Box>
							<Box my={5}>
								<Typography
									dangerouslySetInnerHTML={{ __html: valor(3, component) }}
									variant="body1"
									textAlign={"left"}
									color={component.dark ? "white" : "black"}
								></Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item md={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
						<div
							style={{
								width: "100%",
								height: "70%",
								position: "relative",
								textAlign: "left",
								maxWidth: "400px",
								maxHeight: "233px",
								paddingRight: "10%",
							}}
						>
							<div style={{ width: "100%", height: "100%", position: "absolute", backgroundColor: "white" }}></div>
							<div style={{ width: "100%", height: "100%", position: "absolute", top: "15%", right: "15%" }}>
								<Image alt="Imatge" src={imatges.filter((i) => i.id === 2)[0]?.imatge} fill style={{ objectFit: "cover" }} />
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
