import { Circle } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useTheme } from "@mui/material/styles";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component4({ component }) {
	console.log(component);
	const matches = useMediaQuery("(min-width:960px)");

	const theme = useTheme();

	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.primary.main }}>
			<Container maxWidth="lg">
				<Box py={20} px={5} paddingBottom={0}>
					<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
						<Typography variant="h1" textAlign={"center"} textTransform={"capitalize"} mb={4} color={component.dark ? "white" : "white"}>
							{valor(0, component)}
						</Typography>
						<Box my={5}>
							<Typography variant="body1" textAlign={"center"} color={component.dark ? "white" : "white"}>
								{valor(1, component)}
							</Typography>
						</Box>

						<CustomButtonPublic secondary title={valor(3, component)} light={component.dark} />
					</Box>
					<div
						style={{
							marginTop: matches ? "50px" : "30px",
						}}
					>
						<Image
							alt="Imatge"
							src={"http://127.0.0.1:8000/storage/" + valor(2, component)}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
				</Box>
			</Container>
		</Box>
	);
}
