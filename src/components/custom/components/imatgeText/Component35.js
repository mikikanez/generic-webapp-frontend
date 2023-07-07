import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component35({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth={false}>
				<Grid container spacing={8} display={"flex"} justifyContent={"center"}>
					<Grid item md={12} xs={12}>
						<div style={{ width: "100%", height: matches ? 900 : 500, position: "relative", textAlign: "left" }}>
							<Image alt="Imatge" src={imatges.filter((i) => i.id === 2)[0]?.imatge} fill style={{ objectFit: "cover" }} />
							<div
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",
									background: Number(component.dark) ? "white" : "black",
									opacity: 0.2,
								}}
							></div>
							<Box
								position={"absolute"}
								width={"50%"}
								height={"50%"}
								top="0"
								left="0"
								right="0"
								bottom="0"
								margin={"auto"}
								display={"flex"}
								flexDirection={"column"}
								justifyContent={"center"}
								alignItems={"center"}
							>
								<Typography variant="h1" textAlign={"center"} color={Number(component.dark) ? "black" : "white"} mb={4}>
									{valor(0, component)}
								</Typography>
								<Typography
									dangerouslySetInnerHTML={{ __html: valor(1, component) }}
									variant="body1"
									textAlign={"center"}
									color={Number(component.dark) ? "black" : "white"}
									mb={4}
								></Typography>
								<CustomButtonPublic
									secondary
									title={valor(3, component)?.titol}
									onClick={() => router.push(valor(3, component)?.link)}
									light={Number(component.dark)}
								/>
							</Box>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
