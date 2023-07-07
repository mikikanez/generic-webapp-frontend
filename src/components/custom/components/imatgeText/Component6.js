import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component6({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
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
								color={Number(component.dark) ? "white" : "black"}
							>
								{valor(0, component)}
							</Typography>
							<Box my={5}>
								<Typography variant="body1" textAlign={"left"} color={Number(component.dark) ? "white" : "black"}>
									{valor(1, component)}
								</Typography>
							</Box>
							<Box my={5}>
								<Typography
									dangerouslySetInnerHTML={{ __html: valor(3, component) }}
									variant="body1"
									textAlign={"left"}
									color={Number(component.dark) ? "white" : "black"}
								></Typography>
							</Box>
						</Box>
					</Grid>
					<Grid item md={6} xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
						<div style={{ width: "100%", height: "100%", position: "relative", textAlign: "left", maxWidth: "480px", maxHeight: "360px" }}>
							<Image alt="Imatge" src={imatges.filter((i) => i.id === 2)[0]?.imatge} fill style={{ objectFit: "cover" }} />
						</div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
