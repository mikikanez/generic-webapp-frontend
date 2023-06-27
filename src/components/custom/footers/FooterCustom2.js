import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { Container } from "@mui/system";
import { useOpcions } from "@/context/OpcionsContext";
import { Twitter } from "@mui/icons-material";
import Image from "next/image";
import { isDark } from "@/core/createTheme";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const FooterCustom2 = ({ footerAlt }) => {
	const opcions = useOpcions();
	const theme = useTheme();

	const items = [
		...opcions?.pagines
			?.filter((i) => i.menu === 2)
			?.map((item) => {
				return { title: item.titol, to: "/" + item.slug };
			}),
	];

	return (
		<Box
			style={{
				backgroundSize: "contain",
				backgroundAttachment: "fixed",
				backgroundColor: footerAlt === "1" ? theme.palette.background.main : theme.palette.primary.main,
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
						{opcions?.logo ? (
							<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} height={50} width={150} alt="G" style={{ objectFit: "contain" }} />
						) : (
							<Typography variant="h3" color={isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "white" : "black"} my={3}>
								{opcions?.titol}
							</Typography>
						)}
					</Grid>

					<Grid item md={12} xs={12} textAlign={"center"}>
						<Typography
							variant="footer"
							color={isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "white" : "black"}
							component={"p"}
							mb={1}
						>
							{opcions?.descripcio}
						</Typography>
					</Grid>
				</Grid>
				<Box textAlign={"center"} mb={5}>
					{items.map((item) => (
						<Link key={item.to} href={item.to} style={{ padding: 10 }}>
							<Typography variant="footer">{item.title}</Typography>
						</Link>
					))}
				</Box>
			</Container>
			<Box py={2} style={{ borderTop: "1px solid " + (footerAlt === "1" ? "black" : "white") }}>
				<Container maxWidth={"xl"}>
					<Grid container>
						<Grid item md={12} xs={12} textAlign={"center"}>
							<Stack direction={"row"} spacing={2} justifyContent={"center"} mt={1}>
								{opcions?.instagram && (
									<a href={opcions?.instagram} target={"_blank"} rel="noreferrer">
										<Instagram color={isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary"} />
									</a>
								)}
								{opcions?.twitter && (
									<a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
										<Twitter color={isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary"} />
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

export default FooterCustom2;
