import { Circle } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useTheme } from "@mui/material/styles";

export default function Component1({ component }) {
	console.log(component);
	const matches = useMediaQuery("(min-width:960px)");

	const theme = useTheme();

	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : "" }}>
			<Container maxWidth="xl">
				<Box py={20} px={5}>
					<Grid container spacing={4}>
						<Grid item md={2}></Grid>
						<Grid
							item
							md={4}
							xs={12}
							display={"flex"}
							flexDirection={"column"}
							alignItems={matches ? "flex-end" : "flex-start"}
							mt={10}
							zIndex={100}
							justifyContent={"space-between"}
						>
							<Box display={"flex"} flexDirection={"column"} alignItems={matches ? "flex-end" : "flex-start"}>
								<Typography variant="h1" textAlign={matches ? "right" : "left"} mb={4} color={component.dark ? "white" : "dark"}>
									{valor(0, component)}
								</Typography>
								<Divider sx={{ borderWidth: 5, width: "40%", borderColor: theme.palette.secondary.main }} />
								<Box my={5}>
									<Typography variant="body2" textAlign={matches ? "right" : "left"} color={component.dark ? "white" : "dark"}>
										{valor(1, component)}
									</Typography>
								</Box>
							</Box>
							{matches && (
								<Box display={"flex"} flexDirection={"column"}>
									<Circle style={{ marginTop: 5, marginBottom: 5, width: 40, height: 40 }} color={component.dark ? "info" : "primary"} />
									<Circle style={{ marginTop: 5, marginBottom: 5, width: 40, height: 40 }} color={component.dark ? "info" : "primary"} />
									<Circle style={{ marginTop: 5, marginBottom: 5, width: 40, height: 40 }} color={component.dark ? "info" : "primary"} />
								</Box>
							)}
						</Grid>
						<Grid item md={6} xs={12}>
							<div style={{ width: "100%", height: matches ? 700 : 500, position: "relative", textAlign: "left" }}>
								<Image alt="Imatge" src={process.env.NEXT_PUBLIC_STORAGE + "exemple.jpg"} fill objectFit="cover" />
							</div>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
