import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";

export default function Component26({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"xl"} style={{ padding: "10%" }}>
				<Grid container spacing={8}>
					<Grid item md={4} xs={12}>
						<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
							<div
								style={{
									border: Number(component.dark) ? "1px solid white" : "1px solid " + theme.palette.secondary.main,
									color: Number(component.dark) ? "white" : theme.palette.secondary.main,
									borderRadius: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "50px",
									height: "50px",
								}}
							>
								1
							</div>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(0, component) }}
								variant="body1"
								textAlign={"center"}
								color={Number(component.dark) ? "white" : "black"}
								mt={4}
							></Typography>
						</Box>
					</Grid>
					<Grid item md={4} xs={12}>
						<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
							<div
								style={{
									border: Number(component.dark) ? "1px solid white" : "1px solid " + theme.palette.secondary.main,
									color: Number(component.dark) ? "white" : theme.palette.secondary.main,
									borderRadius: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "50px",
									height: "50px",
								}}
							>
								2
							</div>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(1, component) }}
								variant="body1"
								textAlign={"center"}
								color={Number(component.dark) ? "white" : "black"}
								mt={4}
							></Typography>
						</Box>
					</Grid>
					<Grid item md={4} xs={12}>
						<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
							<div
								style={{
									border: Number(component.dark) ? "1px solid white" : "1px solid " + theme.palette.secondary.main,
									color: Number(component.dark) ? "white" : theme.palette.secondary.main,
									borderRadius: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "50px",
									height: "50px",
								}}
							>
								3
							</div>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(2, component) }}
								variant="body1"
								textAlign={"center"}
								color={Number(component.dark) ? "white" : "black"}
								mt={4}
							></Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
