import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import styles from "@/styles/layout.module.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import 'swiper/css/effect-fade';
import { useWindowSize } from "@/core/utils";
import { useCallback, useEffect, useState } from "react";

export default function Component38({ component, matches, imatges, theme, router, ...props }) {
	const size = useWindowSize();
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const div = useCallback((node) => {
		if (node !== null) {
			setHeight(node.getBoundingClientRect().height);
			setWidth(node.getBoundingClientRect().width);
		}
	}, []);
	return (
		<Box
			style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main, overflow: "hidden", height: '100vh', width: '100vw', position: 'relative'}}
			{...props}
			ref={div}
		>
			<Container disableGutters maxWidth={false} style={{ position: "relative", overflow: "hidden", height: '100%' }}>
				<Swiper
					navigation={true}
					modules={[Autoplay, Pagination, Navigation, EffectFade]}
					slidesPerView={1}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
					className="mySlider"
					width={props.preview ? 300 : width}
                    autoHeight={true}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					spaceBetween={0}
					centeredSlides={true}
					pagination={{
						clickable: true,
					}}
				>
					{valor(0, component)?.map((slide, index) => (
						<SwiperSlide key={index}>
							<Box
								style={{
									backgroundImage: `url(${imatges.filter((i) => i.id === index)[0]?.imatge})`,
									backgroundSize: "cover",
									height: "100vh",
								}}
								display={"flex"}
								alignItems={"center"}
                                justifyContent={'center'}
                                flexDirection={'column'}
							>                           
                                <Typography variant="h1" mb={4} color={component.dark ? "white" : "black"}>
                                    {slide?.titol}
                                </Typography>
                                <Typography variant="h2" textTransform={"none"} mt={4} color={component.dark ? "white" : "black"}>
                                    {slide?.subtitol}
                                </Typography>
							</Box>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
}
