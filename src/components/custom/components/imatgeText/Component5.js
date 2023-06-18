import { Circle } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useTheme } from "@mui/material/styles";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component5({ component }) {
	console.log(component);
	const matches = useMediaQuery("(min-width:960px)");

	const theme = useTheme();

	return (
        <Container disableGutters maxWidth={false} style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main, position: "relative" }}>
            <Grid container spacing={4}>
                <Grid
                    item
                    md={6}
                    xs={12}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    zIndex={100}
                    justifyContent={"space-between"}
                    sx={{padding:'15% 10% !important'}}
                >
                    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
                        <Typography variant="h3" textAlign={"left"} fontWeight={'bold'} textTransform={'unset'} mb={4} color="black">
                            {valor(0, component)}
                        </Typography>
                        <Box my={5}>
                            <Typography variant="body1" textAlign={"left"} color="black">
                                {valor(1, component)}
                            </Typography>
                        </Box>
                        <CustomButtonPublic background title={valor(3, component)} light={component.dark} />
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} sx={{backgroundColor: component.dark ? theme.palette.background.main : theme.palette.primary.main}}>
                    <Box style={{ display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                        <div style={{ width: "100%", height: "100%", position: "relative", textAlign: "left", maxWidth: '66.66%', maxHeight: '66.66%' }}>
                            <Image alt="Imatge" src={process.env.NEXT_PUBLIC_STORAGE + "exemple.jpg"} fill objectFit="cover" />
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
	);
}
