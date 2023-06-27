import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { useState } from "react";

export default function Component36({ component, matches, imatges, theme, router, ...props }) {
    const [isHover, setIsHover] = useState(null);
    const [text, setText] = useState(valor(6, component))

    const handleMouseEnter = (index) => {
        setIsHover(index);
        setText(valor((index+7), component));
    };
    const handleMouseLeave = (index) => {
        setIsHover(index);
        setText(valor(6, component));
    };
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main, minHeight: matches ? 300 : 500, display: 'flex', flexDirection: 'column' }} {...props}>
			<Box style={{position: 'relative', display: 'flex', justifyContent: 'center', bottom: '60px'}}>
                <div
                    style={{    
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 20px',
                        width: matches ? '160px' : '94px'
                    }}
                >
                    <div
                        style={{
                            height: matches ? '144px' : '94px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid ' + theme.palette.secondary.main,
                            borderRadius: '10px',
                            backgroundColor: isHover == 0 ? theme.palette.secondary.main : '#fff',
                            transition: 'background-color 0.75s',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={()=>{handleMouseEnter(0)}}
                        onMouseLeave={()=>{handleMouseLeave(null)}}
                    >
                        <Image alt="Imatge" src={imatges.filter((i) => i.id === 1)[0]?.imatge}  width={60} height={60} style={{filter: isHover == 0 ? 'brightness(100) saturate(0%)' : 'unset'}} />
                    </div>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        color={component.dark ? "black" : theme.palette.secondary.main}
                        mt={1}
                    >{valor(0, component)}</Typography>
                </div>
                <div
                    style={{    
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 20px',
                        width: matches ? '160px' : '94px'
                    }}
                >
                    <div
                        style={{
                            height: matches ? '144px' : '94px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid ' + theme.palette.secondary.main,
                            borderRadius: '10px',
                            backgroundColor: isHover == 1 ? theme.palette.secondary.main : '#fff',
                            transition: 'background-color 0.75s',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={()=>{handleMouseEnter(1)}}
                        onMouseLeave={()=>{handleMouseLeave(null)}}
                    >
                        <Image alt="Imatge" src={imatges.filter((i) => i.id === 3)[0]?.imatge}  width={60} height={60} style={{filter: isHover == 1 ? 'brightness(100) saturate(0%)' : 'unset'}} />
                    </div>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        color={component.dark ? "black" : theme.palette.secondary.main}
                        mt={1}
                    >{valor(2, component)}</Typography>
                </div>
                <div
                    style={{    
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 20px',
                        width: matches ? '160px' : '94px'
                    }}
                >
                    <div
                        style={{
                            height: matches ? '144px' : '94px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid ' + theme.palette.secondary.main,
                            borderRadius: '10px',
                            backgroundColor: isHover == 2 ? theme.palette.secondary.main : '#fff',
                            transition: 'background-color 0.75s',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={()=>{handleMouseEnter(2)}}
                        onMouseLeave={()=>{handleMouseLeave(null)}}
                    >
                        <Image alt="Imatge" src={imatges.filter((i) => i.id === 5)[0]?.imatge}  width={60} height={60} style={{filter: isHover == 2 ? 'brightness(100) saturate(0%)' : 'unset'}} />
                    </div>
                    <Typography
                        variant="body1"
                        textAlign={"center"}
                        color={component.dark ? "black" : theme.palette.secondary.main}
                        mt={1}
                    >{valor(4, component)}</Typography>
                </div>
            </Box>
            <Box>
                <Typography
                    variant="h1"
                    textAlign={"center"}
                    color={component.dark ? "black" : theme.palette.secondary.main}
                    mb={4}
                    fontWeight={400}
                    textTransform={'unset'}
                >{text}</Typography>
            </Box>
		</Box>
	);
}
