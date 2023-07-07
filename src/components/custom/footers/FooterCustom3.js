import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useOpcions } from "@/context/OpcionsContext";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import Image from "next/image";
import { isDark } from "@/core/createTheme";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const FooterCustom3 = ({ footerColor }) => {
	const opcions = useOpcions();
	const matches = useMediaQuery("(min-width:960px)");

	const items = [
		...opcions?.pagines
			?.filter((i) => i.menu === 2)
			?.map((item) => {
				return { title: item.titol, to: "/" + item.slug };
			}),
	];

	const itemsMenu = [
		...opcions?.pagines
			?.filter((i) => i.menu === 1)
			?.map((item) => {
				return { title: item.titol, to: "/" + item.slug };
			}),
	];

	return (
		<Box
			style={{
				backgroundSize: "contain",
				backgroundAttachment: "fixed",
				backgroundColor: footerColor,
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
					<Grid item md={5} xs={12} textAlign={"center"}>
						<Box textAlign={matches ? "right" : "center"}>
							{itemsMenu.map((item, index) =>
								index % 2 == 0 ? (
									<Link key={item.to} href={item.to} style={{ padding: 10 }}>
										<Typography variant="footer" color={isDark(footerColor) ? "white" : "black"}>
											{item.title}
										</Typography>
									</Link>
								) : null
							)}
						</Box>
					</Grid>
					<Grid item md={2} xs={12} textAlign={"center"}>
						{opcions?.logo ? (
							<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} height={50} width={150} alt="G" style={{ objectFit: "contain" }} />
						) : (
							<Typography variant="h3" color={isDark(footerColor) ? "white" : "black"} my={3}>
								{opcions?.titol}
							</Typography>
						)}
					</Grid>

					<Grid item md={5} xs={12} textAlign={"center"}>
						<Box textAlign={matches ? "left" : "center"}>
							{itemsMenu.map((item, index) =>
								index % 2 != 0 ? (
									<Link key={item.to} href={item.to} style={{ padding: 10 }}>
										<Typography variant="footer" color={isDark(footerColor) ? "white" : "black"}>
											{item.title}
										</Typography>
									</Link>
								) : null
							)}
						</Box>
					</Grid>

					<Grid item md={12} xs={12} textAlign={"center"}>
						<Box
							py={2}
							style={{
								borderTop: "1px solid " + (isDark(footerColor) ? "white" : "black"),
								width: "70%",
								margin: "0 auto",
							}}
						></Box>
					</Grid>
					<Grid item md={12} xs={12} textAlign={"center"} paddingTop={"0 !important"}>
						<Box textAlign={"center"}>
							{items.map((item, index) => (
								<Link key={item.to} href={item.to} style={{ padding: 10 }}>
									<Typography variant="footer" color={isDark(footerColor) ? "white" : "black"}>
										{item.title}
									</Typography>
								</Link>
							))}
						</Box>
					</Grid>
					<Grid item md={12} xs={12} textAlign={"center"}>
						<Stack direction={"row"} spacing={2} justifyContent={"center"}>
							{opcions?.instagram && (
								<a href={opcions?.instagram} target={"_blank"} rel="noreferrer">
									<Instagram color={isDark(footerColor === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary"} />
								</a>
							)}
							{opcions?.twitter && (
								<a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
									<Twitter color={isDark(footerColor === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary"} />
								</a>
							)}
							{opcions?.youtube && (
								<a href={opcions?.youtube} target={"_blank"} rel="noreferrer">
									<YouTube color={isDark(footerColor === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary"} />
								</a>
							)}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default FooterCustom3;
