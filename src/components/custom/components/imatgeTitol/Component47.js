import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";

export default function Component47({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={'lg'}>
                <Box py={2}>
                    <Grid container spacing={4}>
                        <Grid item md={4} xs={12}>
                            {valor(2, component) && (
                                <Box style={{ width: "100%", height: matches ? 600 : 500, position: "relative", textAlign: "left" }}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 2)[0]?.imatge} fill style={{ objectFit: "cover" }} />
                                    <Box
                                        style={{ position: "absolute", width: "100%", height: "100%", background: component.dark ? "white" : "black", opacity: 0.2 }}
                                    ></Box>
                                    <Box
                                        position={"absolute"}
                                        width={"100%"}
                                        bottom={0}
                                        padding={3}
                                    >
                                        <Typography
                                            variant="h3"
                                            textAlign={"left"}
                                            fontWeight={"bold"}
                                            textTransform={"unset"}
                                            mb={4}
                                            color={component.dark ? "black" : "white"}
                                        >
                                            {valor(0, component)}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            textAlign={"left"}
                                            textTransform={"unset"}
                                            mb={4}
                                            color={component.dark ? "black" : "white"}
                                        >
                                            {valor(1, component)}
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                        <Grid item md={4} xs={12}>
                            {valor(5, component) && (
                                <Box style={{ width: "100%", height: matches ? 600 : 500, position: "relative", textAlign: "left" }}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 5)[0]?.imatge} fill style={{ objectFit: "cover" }} />
                                    <Box
                                        style={{ position: "absolute", width: "100%", height: "100%", background: component.dark ? "white" : "black", opacity: 0.2 }}
                                    ></Box>
                                    <Box
                                        position={"absolute"}
                                        width={"100%"}
                                        bottom={0}
                                        padding={3}
                                    >
                                        <Typography
                                            variant="h3"
                                            textAlign={"left"}
                                            fontWeight={"bold"}
                                            textTransform={"unset"}
                                            mb={4}
                                            color={component.dark ? "black" : "white"}
                                        >
                                            {valor(3, component)}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            textAlign={"left"}
                                            textTransform={"unset"}
                                            mb={4}
                                            color={component.dark ? "black" : "white"}
                                        >
                                            {valor(4, component)}
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                        <Grid item md={4} xs={12}>
                            {valor(8, component) && (
                                <Box style={{ width: "100%", height: matches ? 600 : 500, position: "relative", textAlign: "left" }}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 8)[0]?.imatge} fill style={{ objectFit: "cover" }} />
                                    <Box
                                        style={{ position: "absolute", width: "100%", height: "100%", background: component.dark ? "white" : "black", opacity: 0.2 }}
                                    ></Box>
                                    <Box
                                        position={"absolute"}
                                        width={"100%"}
                                        bottom={0}
                                        padding={3}
                                    >
                                        <Typography
                                            variant="h3"
                                            textAlign={"left"}
                                            fontWeight={"bold"}
                                            textTransform={"unset"}
                                            mb={4}
                                            color={component.dark ? "black" : "white"}
                                        >
                                            {valor(6, component)}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            textAlign={"left"}
                                            textTransform={"unset"}
                                            mb={4}
                                            color={component.dark ? "black" : "white"}
                                        >
                                            {valor(7, component)}
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Box>
			</Container>
		</Box>
	);
}
