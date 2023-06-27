import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { Container } from "@mui/system";
import theme from "@/styles/theme";
import { useOpcions } from "@/context/OpcionsContext";
import { Twitter } from "@mui/icons-material";
import Image from "next/image";
import { isDark } from "@/core/createTheme";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const FooterCustom4 = ({ footerAlt }) => {
	const opcions = useOpcions();
	const theme = useTheme();
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

                    <Grid item md={2} xs={12} textAlign={"center"}>
						{opcions?.logo ? (
							<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} height={50} width={150} alt="G" style={{ objectFit: "contain" }} />
						) : (
							<Typography variant="h3" color={isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "white" : "black"} my={3}>
								{opcions?.titol}
							</Typography>
						)}
					</Grid>

                    <Grid item md={3} xs={12} textAlign={"center"}>
                        <Box textAlign={matches ? "left" : "center"}>
                            <Typography variant="h3" color={(isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "white" : "black")} style={{ padding: 10 }}>{opcions?.titol}</Typography>
                            <Typography variant="footer" color={(isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "white" : "black")} style={{ padding: 10 }}>{opcions?.descripcio}</Typography>
                        </Box>
                        <Box textAlign={matches ? "left" : "center"}>
                            {items.map((item, index) => (
                                <Link key={item.to} href={item.to} style={{ padding: 10 }}>
                                    <Typography variant="footer" color={(isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "white" : "black")}>{item.title}</Typography>
                                </Link>
                            ))}
                        </Box>
                    </Grid>

					<Grid item md={2} xs={12} textAlign={"center"} py={'0 !important'}>
				        <Box py={2} style={{ background: (isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "white" : "black"), width: '1px', minHeight: '100px', height: '100%', margin: '0 auto'}}></Box>
                    </Grid>

                    <Grid item md={5} xs={12} textAlign={"center"}>
                        <Box textAlign={matches ? "left" : "center"}>
                            {itemsMenu.map((item, index) => (
                                <Link key={item.to} href={item.to} style={{ padding: 10 }}>
                                    <Typography variant="footer" color={(isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "white" : "black")}>{item.title}</Typography>
                                </Link>
                            ))}
                        </Box>
                        <Stack direction={"row"} spacing={2} justifyContent={matches ? "left" : "center"}>
                            {opcions?.instagram && (
                                <a href={opcions?.instagram} target={"_blank"} rel="noreferrer" style={{ padding: 10 }}>
                                    <Instagram color={(isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary")} />
                                </a>
                            )}
                            {opcions?.twitter && (
                                <a href={opcions?.twitter} target={"_blank"} rel="noreferrer" style={{ padding: 10 }}>
                                    <Twitter color={(isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "info" : "primary")} />
                                </a>
                            )}
                        </Stack>
                    </Grid>
                    {/* <Grid item md={12} xs={12} textAlign={"center"}>
                        <Stack direction={"row"} spacing={2} justifyContent={"center"}>
                            {opcions?.instagram && (
                                <a href={opcions?.instagram} target={"_blank"} rel="noreferrer">
                                    <Instagram color={(isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "black" : "white")} />
                                </a>
                            )}
                            {opcions?.twitter && (
                                <a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
                                    <Twitter color={(isDark(footerAlt === "1" ? opcions?.background : opcions?.primary) ? "black" : "white")} />
                                </a>
                            )}
                        </Stack>
                    </Grid> */}
				</Grid>
			</Container>
		</Box>
	);
};

export default FooterCustom4;
