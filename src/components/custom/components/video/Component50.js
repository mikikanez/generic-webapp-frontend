import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/material/styles";

const BoxPlay = styled(Box)(({ theme }) => ({
	transition: "0.2s",
    height: '100%',
    width: 144,
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    cursor: 'pointer',
	"&:hover": {
		background: theme.palette.details.main
	},
}));

export default function Component50({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={'lg'}>
				<Box py={2}>
                    <Grid container spacing={8}>
                        <Grid item md={4} xs={12} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
                            {valor(5, component) && (
                                <Typography
                                    variant="h4"
                                    textAlign={"left"}
                                    color={component.dark ? theme.palette.details.main : theme.palette.secondary.main}
                                >{valor(5, component)}</Typography>
                            )}
                            {valor(6, component) && (
                                <Typography
                                    variant="h3"
                                    textAlign={"left"}
                                    textTransform={'capitalize'}
                                    fontWeight={'bold'}
                                    color={component.dark ? 'white' : 'black'}
                                    mt={2}
                                >{valor(6, component)}</Typography>
                            )}
                            {valor(7, component) && (
                                <Typography
                                    dangerouslySetInnerHTML={{ __html: valor(7, component) }}
                                    variant="body1"
                                    textAlign={"left"}
                                    color={component.dark ? "white" : "black"}
                                    mt={2}
                                ></Typography>
                            )}
                            {valor(8, component) && (
                                <Typography
                                    variant="h2"
                                    textAlign={"left"}
                                    textTransform={'capitalize'}
                                    fontWeight={'bold'}
                                    color={component.dark ? theme.palette.secondary.main : theme.palette.primary.main}
                                    mt={2}
                                >{valor(8, component)}</Typography>
                            )}
                        </Grid>
                        <Grid item md={8} xs={12}>
                            {valor(0, component) && (
                                <Box width={'100%'} height={484} position={'relative'}>
                                    <Image alt="Imatge" src={imatges.filter((i) => i.id === 0)[0]?.imatge} fill style={{ objectFit: "cover" }} />
                                    <Box position={'absolute'} width={'100%'} height={144} bottom={0} backgroundColor={component.dark ? theme.palette.background.main : theme.palette.background.dark} display={'flex'}>
                                        <a href={valor(1, component)}>
                                            <BoxPlay>
                                                    <PlayArrowIcon htmlColor={component.dark ? 'black' : 'white'} sx={{width: '30%', height: '30%'}}/>
                                            </BoxPlay>
                                        </a>
                                        <Box display={'flex'} height={'100%'} width={'81%'} alignItems={'center'} justifyContent={'center'}>
                                            {valor(2, component) && (
                                                <Box height={'50%'} display={'flex'} alignItems={'center'} padding={'5%'}>
                                                    <Typography
                                                        dangerouslySetInnerHTML={{ __html: valor(2, component) }}
                                                        variant="body1"
                                                        textAlign={"center"}
                                                        color={component.dark ? "black" : "white"}
                                                    ></Typography>
                                                </Box>
                                            )}
                                            {valor(3, component) && (
                                                <Box borderRight={component.dark ? '1px solid black' : '1px solid white'} borderLeft={component.dark ? '1px solid black' : '1px solid white'} height={'50%'} display={'flex'} alignItems={'center'} padding={'5%'}>
                                                    <Typography
                                                        dangerouslySetInnerHTML={{ __html: valor(3, component) }}
                                                        variant="body1"
                                                        textAlign={"center"}
                                                        color={component.dark ? "black" : "white"}
                                                    ></Typography>
                                                </Box>
                                            )}
                                            {valor(4, component) && (
                                                <Box height={'50%'} display={'flex'} alignItems={'center'} padding={'5%'}>
                                                    <Typography
                                                        dangerouslySetInnerHTML={{ __html: valor(4, component) }}
                                                        variant="body1"
                                                        textAlign={"center"}
                                                        color={component.dark ? "black" : "white"}
                                                    ></Typography>
                                                </Box>
                                            )}
                                        </Box>
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
