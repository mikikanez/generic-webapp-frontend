import { Circle } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useTheme } from "@mui/material/styles";
import ItailoredButton from "@/components/elements/ItailoredButton";

export default function Component4({ component }) {
	console.log(component);
	const matches = useMediaQuery("(min-width:960px)");

	const theme = useTheme();

	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.primary.main }}>
			<Container maxWidth="xl">
				<Box py={20} px={5} paddingBottom={0}>
					<Grid container spacing={4}>
						<Grid item md={2}></Grid>
						<Grid
							item
							md={8}
							xs={12}
							display={"flex"}
							flexDirection={"column"}
							alignItems={matches ? "flex-end" : "flex-start"}
							mt={10}
							zIndex={100}
							justifyContent={"space-between"}
						>
							<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
								<Typography variant="h1" textAlign={"center"} textTransform={'capitalize'} mb={4} color={component.dark ? "white" : "white"}>
									{valor(0, component)}
								</Typography>
								<Box my={5}>
									<Typography variant="body1" textAlign={"center"} color={component.dark ? "white" : "white"}>
										{valor(1, component)}
									</Typography>
								</Box>
							    <ItailoredButton title={valor(3, component)} href={""} target="_blank"  backgroundColor={theme.palette.secondary.main} color='black !important'/>
							</Box>
                            <div style={{ width: "100%", height: matches ? 480 : 280, position: "relative", textAlign: "left", marginTop: matches ? '50px' : '30px'}}>
								<Image alt="Imatge" src={'http://127.0.0.1:8000/storage/logo/' + valor(2, component)} fill objectFit="contain" />
							</div>
						</Grid>
						<Grid item md={2}></Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
