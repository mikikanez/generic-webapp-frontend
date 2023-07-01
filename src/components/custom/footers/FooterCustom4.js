import React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import { Container } from "@mui/system";
import theme from "@/styles/theme";
import { useOpcions } from "@/context/OpcionsContext";
import { Twitter } from "@mui/icons-material";

import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from "next/image";
import { isDark } from "@/core/createTheme";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const FooterCustom4 = ({ footerColor }) => {
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
				backgroundColor: footerColor,
			}}
			displayPrint="none"
		>
			<Container maxWidth={"lg"}>
				<Grid
					container
					spacing={3}
					style={{
						paddingTop: 50,
						paddingBottom: 50,
						display: "flex",
						alignItems: "flex-start",
					}}
				>
                    <Grid item md={5} xs={12} textAlign={"left"} marginTop={5}>
                        <Box textAlign={matches ? "left" : "center"}>
                            <Typography variant="h3" fontWeight={'bold'} textTransform={'capitalize'} color={(isDark(footerColor ) ? "white" : "black")}>{opcions?.titol}</Typography>
                            <Typography variant="footer" color={(isDark(footerColor ) ? "white" : "black")}>{opcions?.descripcio}</Typography>
                        </Box>
                        <Stack direction={"row"} spacing={2} justifyContent={matches ? "left" : "center"} marginTop={2}>
                            {opcions?.instagram && (
                                <a href={opcions?.instagram} target={"_blank"} rel="noreferrer" style={{ background: opcions?.primary, height: '30px', width: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', overflow: 'hidden' }}>
                                    <Instagram color={(isDark(footerColor ) ? "info" : "primary")} />
                                </a>
                            )}
                            {opcions?.twitter && (
                                <a href={opcions?.twitter} target={"_blank"} rel="noreferrer" style={{ background: opcions?.primary, height: '30px', width: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', overflow: 'hidden' }}>
                                    <Twitter color={(isDark(footerColor ) ? "info" : "primary")} />
                                </a>
                            )}
                            {opcions?.youtube && (
                                <a href={opcions?.youtube} target={"_blank"} rel="noreferrer" style={{ background: opcions?.primary, height: '30px', width: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', overflow: 'hidden' }}>
                                    <YouTubeIcon color={(isDark(footerColor ) ? "info" : "primary")} />
                                </a>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item md={1} xs={12}></Grid>
                    <Grid item md={3} xs={12} textAlign={"center"}>
                        <Box textAlign={matches ? "left" : "center"} display={'flex'} flexDirection={'column'}>
                            {itemsMenu.map((item, index) => (
                                <Link key={item.to} href={item.to} style={{ padding: 10 }}>
                                    <Typography variant="footer" color={(isDark(footerColor ) ? "white" : "black")}>{item.title}</Typography>
                                </Link>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item md={3} xs={12} textAlign={"center"}>
                        <Box textAlign={matches ? "left" : "center"} display={'flex'} flexDirection={'column'}>
                            {items.map((item, index) => (
                                <Link key={item.to} href={item.to} style={{ padding: 10 }}>
                                    <Typography variant="footer" color={(isDark(footerColor ) ? "white" : "black")}>{item.title}</Typography>
                                </Link>
                            ))}
                        </Box>
                    </Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default FooterCustom4;
