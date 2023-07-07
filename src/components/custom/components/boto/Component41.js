import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component41({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"lg"}>
				<Box py={2}>
					<Grid container spacing={8}>
						<Grid item md={12} xs={12} display={"flex"} justifyContent={"center"}>
							<CustomButtonPublic
								background
								title={valor(0, component)?.titol}
								onClick={() => router.push(valor(0, component)?.link)}
								light={component.dark}
							/>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
}
