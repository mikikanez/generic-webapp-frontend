import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component11({ component, matches, imatges, theme, router }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} py={10} px={20}>
			<Container disableGutters maxWidth="lg" style={{ position: "relative"}}>
				<Grid container spacing={4}>
					<Grid item md={6} xs={12} display={"flex"} flexDirection={'column'} justifyContent={"center"} alignItems={"flex-start"}>
                        <Typography
                            variant="h2"
                            textAlign={"left"}
                            fontWeight={"bold"}
                            textTransform={"unset"}
                            mb={4}
                            color={component.dark ? "white" : "black"}
                        >
                            {valor(0, component)}
                        </Typography>
                        <Typography variant="body1" textAlign={"left"} color={component.dark ? "white" : "black"}>
                            {valor(1, component)}
                        </Typography>
					</Grid>
					<Grid item md={6} xs={12} display={"flex"} alignItems={"center"} zIndex={100} justifyContent={"space-evenly"}>
                            <CustomButtonPublic
								background
								title={valor(2, component)?.titol}
								onClick={() => router.push(valor(3, component)?.link)}
								light={component.dark}
							/>
                            <CustomButtonPublic
								background
								title={valor(3, component)?.titol}
								onClick={() => router.push(valor(3, component)?.link)}
								light={component.dark}
							/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
