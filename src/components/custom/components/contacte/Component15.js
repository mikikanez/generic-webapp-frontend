import { Box, Container, Grid, Typography } from "@mui/material";
import { valor } from "..";
import CustomGoogleMaps from "@/components/elements/CustomGoogleMaps";
import { useOpcions } from "@/context/OpcionsContext";

export default function Component15({ component, matches, imatges, theme, router }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth={false} style={{ position: "relative" }}>
				<Grid container spacing={4}>
					<Grid
						item
						md={6}
						xs={12}
						style={{
							backgroundColor: component.dark ? theme.palette.background.main : theme.palette.primary.main,
						}}
						paddingY={"0 !important"}
					>
						<Box
							p={10}
							style={{
								backgroundColor: component.dark ? theme.palette.background.main : theme.palette.primary.main,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								height: "100%",
							}}
						>
							<CustomGoogleMaps
								width="320px"
								height="360px"
								iconColor={theme.palette.primary.main}
								lat={valor(1, component)?.lat}
								lng={valor(1, component)?.lng}
								apiKey={opcions?.apiKey}
							/>
						</Box>
					</Grid>
					<Grid
						item
						md={6}
						xs={12}
						display={"flex"}
						flexDirection={"column"}
						alignItems={"flex-start"}
						zIndex={100}
						justifyContent={"center"}
						style={{
							backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main,
						}}
					>
						<Box p={10}>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(0, component) }}
								variant="body1"
								textAlign={"left"}
								color={component.dark ? "white" : "black"}
							></Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
