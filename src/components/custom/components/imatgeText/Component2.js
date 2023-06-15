import { Circle } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useTheme } from "@mui/material/styles";

export default function Component2({ component }) {
	console.log(component);

	const theme = useTheme();

	return (
		<Container maxWidth="xl" style={{ backgroundColor: theme.palette.primary.main }}>
			<Box py={10} px={5}>
				<Grid container spacing={4} height={"50vh"}>
					<Grid item md={2}></Grid>
					<Grid
						item
						md={4}
						xs={12}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"flex-end"}
						mt={10}
						zIndex={100}
						justifyContent={"space-between"}
					>
						<Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
							<Typography variant="h1" textAlign={"right"} mb={4} color="white">
								{valor(0, component)}
							</Typography>
							<Divider sx={{ borderWidth: 5, width: "40%", borderColor: "white" }} />
							<Box my={5}>
								<Typography variant="body2" textAlign={"right"} color="white">
									{valor(1, component)}
								</Typography>
							</Box>
						</Box>
						<Box display={"flex"} flexDirection={"column"}>
							<Circle style={{ marginTop: 5, marginBottom: 5 }} color="info" />
							<Circle style={{ marginTop: 5, marginBottom: 5 }} color="info" />
							<Circle style={{ marginTop: 5, marginBottom: 5 }} color="info" />
						</Box>
					</Grid>
					<Grid item md={6} xs={12}>
						<div style={{ width: "100%", height: "100%", position: "relative", textAlign: "left" }}>
							<Image alt="Imatge" src={process.env.NEXT_PUBLIC_STORAGE + "exemple.jpg"} fill objectFit="cover" />
						</div>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
