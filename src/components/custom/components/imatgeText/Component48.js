import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component48({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={'lg'}>
				<Box py={2}>
                    <Grid container spacing={8}>
                        <Grid item md={6} xs={12}>
                            <Box display={'flex'}>
                                <Box mr={3} minWidth={80} height={80} position={'relative'}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 3)[0]?.imatge} fill style={{ objectFit: "cover" }} />
                                </Box>
                                <Box>
                                    {valor(1, component) && (
                                        <Typography variant="h4" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={3} color={component.dark ? theme.palette.details.main: theme.palette.background.dark}>
                                            {valor(1, component)}
                                        </Typography>
                                    )}
                                    {valor(2, component) && (
                                        <Box>
                                            <Typography
                                                dangerouslySetInnerHTML={{ __html: valor(2, component) }}
                                                variant="body1"
                                                textAlign={"left"}
                                                color={component.dark ? 'white' : 'black'}
                                            ></Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                            <Box display={'flex'} mt={5}>
                                <Box mr={3} minWidth={80} height={80} position={'relative'}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 6)[0]?.imatge} fill style={{ objectFit: "cover" }} />
                                </Box>
                                <Box>
                                    {valor(3, component) && (
                                        <Typography variant="h4" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={3} color={component.dark ? theme.palette.details.main: theme.palette.background.dark}>
                                            {valor(4, component)}
                                        </Typography>
                                    )}
                                    {valor(4, component) && (
                                        <Box>
                                            <Typography
                                                dangerouslySetInnerHTML={{ __html: valor(5, component) }}
                                                variant="body1"
                                                textAlign={"left"}
                                                color={component.dark ? 'white' : 'black'}
                                            ></Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                            <Box display={'flex'} mt={5}>
                                <Box mr={3} minWidth={80} height={80} position={'relative'}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 9)[0]?.imatge} fill style={{ objectFit: "cover" }} />
                                </Box>
                                <Box>
                                    {valor(5, component) && (
                                        <Typography variant="h4" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={3} color={component.dark ? theme.palette.details.main: theme.palette.background.dark}>
                                            {valor(7, component)}
                                        </Typography>
                                    )}
                                    {valor(6, component) && (
                                        <Box>
                                            <Typography
                                                dangerouslySetInnerHTML={{ __html: valor(8, component) }}
                                                variant="body1"
                                                textAlign={"left"}
                                                color={component.dark ? 'white' : 'black'}
                                            ></Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={6} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            {valor(0, component) && (
                                <Box width={'100%'} height={matches? 378 : 200} position={'relative'}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 0)[0]?.imatge} fill style={{ objectFit: "contain" }} />
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Box>
			</Container>
		</Box>
	);
}
