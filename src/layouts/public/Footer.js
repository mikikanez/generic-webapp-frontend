import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { Container } from "@mui/system";
import Image from "next/image";
import theme from "@/styles/theme";
import Language from "@mui/icons-material/Language";
import styles from "@/styles/Home.module.css";
import { useOpcions } from "@/context/OpcionsContext";
import { Twitter } from "@mui/icons-material";

const Footer = () => {
	const matches = useMediaQuery("(min-width:960px)");
	const opcions = useOpcions();

	return (
		<Box
			style={{
				borderTop: "1px solid " + theme.palette.secondary.main,
				backgroundSize: "contain",
				backgroundAttachment: "fixed",
			}}
			displayPrint="none"
		>
			<Container maxWidth={"xl"}>
				<Grid
					container
					spacing={3}
					style={{
						paddingTop: 50,
						paddingBottom: 50,
						display: "flex",
						alignItems: "center",
					}}
				>
					<Grid item md={12} xs={12} textAlign={"center"}>
						<Typography variant="footer" component={"p"} fontWeight={800} mb={1}>
							{opcions?.titol}
						</Typography>
						<Typography variant="footer" component={"p"} mb={1}>
							{opcions?.descripcio}
						</Typography>
					</Grid>
				</Grid>
			</Container>
			<Box py={2} style={{ borderTop: "1px solid white" }}>
				<Container maxWidth={"xl"}>
					<Grid container>
						<Grid item md={12} xs={12} textAlign={"center"}>
							<Stack direction={"row"} spacing={2} justifyContent={"center"} mt={1}>
								{opcions?.instagram && (
									<a href={opcions?.instagram} target={"_blank"} rel="noreferrer">
										<Instagram color="info" />
									</a>
								)}
								{opcions?.twitter && (
									<a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
										<Twitter color="info" />
									</a>
								)}
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
