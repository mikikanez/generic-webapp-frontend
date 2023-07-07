import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";

export default function Component33({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"xl"} style={{ padding: "10%" }}>
				<Grid container spacing={8}>
					<Grid item md={6} xs={12}>
						<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
							<div style={{ width: "100%", minHeight: matches ? 300 : 500, height: "100%", position: "relative", textAlign: "left" }}>
								<Image alt="Imatge" src={imatges.filter((i) => i.id === 0)[0]?.imatge} fill objectFit="contain" />
							</div>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(1, component) }}
								variant="body1"
								textAlign={"left"}
								color={Number(component.dark) ? "white" : "black"}
								mt={4}
							></Typography>
						</Box>
					</Grid>
					<Grid item md={6} xs={12}>
						<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
							<div style={{ width: "100%", minHeight: matches ? 300 : 500, height: "100%", position: "relative", textAlign: "left" }}>
								<Image alt="Imatge" src={imatges.filter((i) => i.id === 2)[0]?.imatge} fill objectFit="contain" />
							</div>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(3, component) }}
								variant="body1"
								textAlign={"left"}
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
