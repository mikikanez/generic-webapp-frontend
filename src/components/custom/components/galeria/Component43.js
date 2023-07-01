import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { valor } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Thumbs, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWindowSize } from "@/core/utils";
import { useCallback, useEffect, useState } from "react";
import { Overlay } from "@/components/elements/Overlay";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";
import { Margin } from "@mui/icons-material";

export default function Component43({ component, matches, imatges, theme, router, ...props }) {
	const size = useWindowSize();
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(100);
	const div = useCallback((node) => {
		if (node !== null) {
			setHeight(node.getBoundingClientRect().height);
			setWidth(node.getBoundingClientRect().width);
		}
	}, []);

	useEffect(() => {
		console.log(component);
	}, [component]);

	return (
		<Box
			style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main}}
			{...props}
			ref={div}
		>
			<Container maxWidth={'lg'} style={{ position: "relative"}}>
                <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                    {valor(0, component)?.map((slide, index) => (
                            <Box
                                style={{
                                    backgroundImage: `url(${imatges.filter((i) => i.id === index)[0]?.imatge})`,
                                    backgroundSize: "contain",
                                    height: 100,
                                    width: '100%',
                                    maxWidth: 300
                                }}
                                margin={1}
                            >
                                
                            </Box>
                    ))}
                </Box>
			</Container>
		</Box>
	);
}
