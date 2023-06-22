import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomGoogleMaps from "@/components/elements/CustomGoogleMaps";

export default function Component2({ component, matches, imatges, theme, router }) {
	return (
        	<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }}>
                <Container disableGutters maxWidth={false} style={{ position: "relative" }}>
                    <Grid container spacing={4}>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            style={{
                                backgroundColor: component.dark ? theme.palette.background.main : theme.palette.primary.main,
                            }}
                            paddingY={"0 !important"}
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
                                <CustomGoogleMaps width='320px' height='360px' iconColor={theme.palette.primary.main} lat={valor(1, component)?.lat} lng={valor(1, component)?.lng} apiKey={valor(1, component)?.apiKey}/>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"flex-start"}
                            zIndex={100}
                            justifyContent={"space-between"}
                            style={{
                                backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main,
                            }}
                        >
                            <Box
                                p={10}
                            >
                                <Typography dangerouslySetInnerHTML={{ __html: valor(0, component) }} variant="body1" textAlign={"left"} color={component.dark ? "white" : "black"}></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
	);
}
