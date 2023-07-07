import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component1({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth="lg">
				<Box py={2}>
					<Grid container spacing={8}>
						<Grid item md={5} xs={12} display={"flex"} flexDirection={"column"} mt={10} zIndex={100} justifyContent={"space-between"}>
							<Box>
								<Typography
									dangerouslySetInnerHTML={{ __html: valor(0, component) }}
									variant="h2"
									mb={4}
									color={Number(component.dark) ? "white" : theme.palette.background.dark}
									textTransform={"unset"}
									fontWeight={"bold"}
								></Typography>
								<Box my={5}>
									<Typography variant="body2" color={Number(component.dark) ? "white" : "dark"}>
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
						<Grid item md={7} xs={12}>
							<div style={{ width: "100%", height: matches ? 700 : 500, position: "relative", textAlign: "left" }}>
								<Image alt="Imatge" src={imatges.filter((i) => i.id === 2)[0]?.imatge} fill style={{ objectFit: "cover" }} />
							</div>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
