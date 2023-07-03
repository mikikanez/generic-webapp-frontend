import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useState } from "react";

export default function Component39({ component, matches, imatges, theme, router, ...props }) {
	
	return (
		<Box
			style={{
				backgroundColor: component.dark ? theme.palette.background.main : theme.palette.background.dark,
				display: "flex",
				flexDirection: "column",
				zIndex: 100,
				position: "relative",
			}}
			{...props}
		>
			<Container maxWidth="lg">
                <Box py={10}>
					<Grid container spacing={8}>
						<Grid item md={3} xs={12}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                {valor(0, component) != '' ? <Box mb={3} width={90} height={90} position={'relative'}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 0)[0]?.imatge} fill style={{ objectFit: "contain" }} />
                                </Box> : <></>}
                                <Typography variant="h2" fontWeight={'bold'} color={component.dark ? theme.palette.background.dark : theme.palette.background.main} textAlign={'center'}>
                                    {valor(1, component)}
                                </Typography>
                                <Typography variant="body1" color={component.dark ? theme.palette.primary.main : theme.palette.details.main} mt={3} textAlign={'center'}>
                                    {valor(2, component)}
                                </Typography>
                            </Box>
						</Grid>
						<Grid item md={3} xs={12}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                {valor(3, component) != '' ? <Box mb={3} width={90} height={90} position={'relative'}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 3)[0]?.imatge} fill style={{ objectFit: "contain" }} />
                                </Box> : <></>}
                                <Typography variant="h2" fontWeight={'bold'} color={component.dark ? theme.palette.background.dark : theme.palette.background.main} textAlign={'center'}>
                                    {valor(4, component)}
                                </Typography>
                                <Typography variant="body1" color={component.dark ? theme.palette.primary.main : theme.palette.details.main} mt={3} textAlign={'center'}>
                                    {valor(5, component)}
                                </Typography>
                            </Box>
						</Grid>
						<Grid item md={3} xs={12}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                {valor(6, component) != '' ? <Box mb={3} width={90} height={90} position={'relative'}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 6)[0]?.imatge} fill style={{ objectFit: "contain" }} />
                                </Box> : <></>}
                                <Typography variant="h2" fontWeight={'bold'} color={component.dark ? theme.palette.background.dark : theme.palette.background.main} textAlign={'center'}>
                                    {valor(7, component)}
                                </Typography>
                                <Typography variant="body1" color={component.dark ? theme.palette.primary.main : theme.palette.details.main} mt={3} textAlign={'center'}>
                                    {valor(8, component)}
                                </Typography>
                            </Box>
						</Grid>
						<Grid item md={3} xs={12}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                {valor(9, component) != '' ? <Box mb={3} width={90} height={90} position={'relative'}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 9)[0]?.imatge} fill style={{ objectFit: "contain" }} />
                                </Box> : <></>}
                                <Typography variant="h2" fontWeight={'bold'} color={component.dark ? theme.palette.background.dark : theme.palette.background.main} textAlign={'center'}>
                                    {valor(10, component)}
                                </Typography>
                                <Typography variant="body1" color={component.dark ? theme.palette.primary.main : theme.palette.details.main} mt={3} textAlign={'center'}>
                                    {valor(11, component)}
                                </Typography>
                            </Box>
						</Grid>
					</Grid>
				</Box>
            </Container>
		</Box>
	);
}
