import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";

export default function Component20({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth="lg">
				<Box py={20}>
					<Grid container spacing={8} display={"flex"} justifyContent={"center"}>
						<Grid item md={7} xs={12}>
							<div style={{ width: "100%", height: matches ? 700 : 500, position: "relative", textAlign: "left" }}>
								<Image alt="Imatge" src={imatges.filter((i) => i.id === 0)[0]?.imatge} fill style={{ objectFit: "cover" }} />
							</div>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
