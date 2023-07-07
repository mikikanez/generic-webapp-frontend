import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";

export default function Component31({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"xl"} style={{ padding: "10%" }}>
				<Grid container spacing={8}>
					<Grid item md={6} xs={12}>
						<Box>
							<Typography
								variant="h2"
								textAlign={"center"}
								fontWeight={"bold"}
								textTransform={"unset"}
								mb={4}
								color={Number(component.dark) ? "white" : "black"}
							>
								{valor(0, component)}
							</Typography>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(1, component) }}
								variant="body1"
								textAlign={"center"}
								color={Number(component.dark) ? "white" : "black"}
							></Typography>
						</Box>
					</Grid>
					<Grid item md={6} xs={12}>
						<Box>
							<Typography
								variant="h2"
								textAlign={"center"}
								fontWeight={"bold"}
								textTransform={"unset"}
								mb={4}
								color={Number(component.dark) ? "white" : "black"}
							>
								{valor(2, component)}
							</Typography>
							<Typography
								dangerouslySetInnerHTML={{ __html: valor(3, component) }}
								variant="body1"
								textAlign={"center"}
								color={Number(component.dark) ? "white" : "black"}
							></Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
