import { Box, Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useTheme } from "@mui/material/styles";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component1({ component }) {
	const matches = useMediaQuery("(min-width:960px)");
	const theme = useTheme();

	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }}>
			<Container maxWidth="xl">
				<Box py={20} px={5}>
					<Grid container spacing={8}>
						<Grid item md={5} xs={12} display={"flex"} flexDirection={"column"} mt={10} zIndex={100} justifyContent={"space-between"}>
							<Box>
								<Typography variant="h1" mb={4} color={component.dark ? "white" : "dark"}>
									{valor(0, component)}
								</Typography>
								<Divider sx={{ borderWidth: 5, width: "40%", borderColor: theme.palette.secondary.main }} />
								<Box my={5}>
									<Typography variant="body2" color={component.dark ? "white" : "dark"}>
										{valor(1, component)}
									</Typography>
								</Box>
								<CustomButtonPublic title={"Veure"} light={component.dark} />
							</Box>
						</Grid>
						<Grid item md={7} xs={12}>
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