import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component5({ component, matches, imatges, theme, router }) {
	return (
		<Container
			disableGutters
			maxWidth={false}
			style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main, position: "relative" }}
		>
			<Grid container spacing={4}>
				<Grid
					py={20}
					item
					md={6}
					xs={12}
					display={"flex"}
					flexDirection={"column"}
					alignItems={"flex-start"}
					zIndex={100}
					justifyContent={"space-between"}
				>
					<Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"} p={10}>
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
						<Box my={5}>
							<Typography variant="body1" textAlign={"left"} color={component.dark ? "white" : "black"}>
								{valor(1, component)}
							</Typography>
						</Box>
						<CustomButtonPublic
							background
							title={valor(3, component)?.titol}
							onClick={() => router.push(valor(3, component)?.link)}
							light={component.dark}
						/>
					</Box>
				</Grid>
				<Grid
					item
					md={6}
					xs={12}
					style={{
						backgroundColor: component.dark ? theme.palette.background.main : theme.palette.primary.main,
					}}
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
						<div style={{ width: "100%", height: "100%", position: "relative", textAlign: "left", maxWidth: "420px" }}>
							<Image alt="Imatge" src={imatges.filter((i) => i.id === 2)[0]?.imatge} fill objectFit="cover" />
						</div>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}