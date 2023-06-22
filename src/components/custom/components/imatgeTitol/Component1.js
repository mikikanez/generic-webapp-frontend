import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";

export default function Component1({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container disableGutters maxWidth={false}>
                <Grid container spacing={8} display={'flex'} justifyContent={'center'}>
                    <Grid item md={12} xs={12}>
                        <div style={{ width: "100%", height: matches ? 900 : 500, position: "relative", textAlign: "left" }}>
                            <Image alt="Imatge" src={imatges.filter((i) => i.id === 1)[0]?.imatge} fill objectFit="cover" />
                            <div style={{position: 'absolute', width: '100%', height: '100%', background: (component.dark ? "white" : "black"), opacity: 0.2}}></div>
                            <Box position={'absolute'} width={'50%'} height={'50%'} top='0' left='0' right='0' bottom='0' margin={'auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Typography
                                    dangerouslySetInnerHTML={{ __html: valor(0, component) }}
                                    variant="h1"
                                    textAlign={"center"}
                                    color={component.dark ? "black" : "white"}
                                ></Typography>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
			</Container>
		</Box>
	);
}
