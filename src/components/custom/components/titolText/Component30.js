import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";

export default function Component30({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={'lg'}>
				<Box py={2}>
                    <Grid container spacing={8}>
                        <Grid item md={6} xs={12}>
                            <Box display={'flex'}>
                                <Box mr={2.5}>
                                    {valor(4, component) ? <Box width={32} height={32} position={'relative'} borderRadius={'100%'} overflow={'hidden'}>
                                        <Image alt="Imatge" src={imatges.filter((i) => i.id === 4)[0]?.imatge} fill style={{ objectFit: "cover" }} />
                                    </Box> : <></>}
                                </Box>
                                <Box>
                                    <Typography variant="h4" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={4} color={component.dark ? "white" : "black"}>
                                        {valor(0, component)}
                                    </Typography>
                                    <Typography
                                        dangerouslySetInnerHTML={{ __html: valor(1, component) }}
                                        variant="body1"
                                        textAlign={"left"}
                                        color={component.dark ? "white" : "black"}
                                    ></Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box display={'flex'}>
                                <Box mr={2.5}>
                                    {valor(5, component) ? <Box width={32} height={32} position={'relative'} borderRadius={'100%'} overflow={'hidden'}>
                                        <Image alt="Imatge" src={imatges.filter((i) => i.id === 5)[0]?.imatge} fill style={{ objectFit: "cover" }} />
                                    </Box> : <></>}
                                </Box>
                                <Box>
                                    <Typography variant="h4" textAlign={"left"} fontWeight={"bold"} textTransform={"unset"} mb={4} color={component.dark ? "white" : "black"}>
                                        {valor(2, component)}
                                    </Typography>
                                    <Typography
                                        dangerouslySetInnerHTML={{ __html: valor(3, component) }}
                                        variant="body1"
                                        textAlign={"left"}
                                        color={component.dark ? "white" : "black"}
                                    ></Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
			</Container>
		</Box>
	);
}
