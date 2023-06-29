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
import "swiper/css/effect-fade";
import { useWindowSize } from "@/core/utils";
import { useCallback, useEffect, useState } from "react";
import { Overlay } from "@/components/elements/Overlay";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component38({ component, matches, imatges, theme, router, ...props }) {
	const size = useWindowSize();
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(100);
	const div = useCallback((node) => {
		if (node !== null) {
			setHeight(node.getBoundingClientRect().height);
			setWidth(node.getBoundingClientRect().width);
		}
	}, []);
	return (
		<Box
			style={{
				backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main,
				overflow: "hidden",
				position: "relative",
			}}
			{...props}
			ref={div}
		>
			<Container disableGutters maxWidth={false} style={{ position: "relative", overflow: "hidden", width: width }}>
				<Swiper
					navigation={true}
					modules={[Autoplay, Pagination, Navigation, EffectFade]}
					slidesPerView={1}
					className="mySlider"
					width={props.preview ? width : width}
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
					style={{
						"--swiper-navigation-color": component.dark ? "white" : "black",
						"--swiper-pagination-color": component.dark ? "white" : "black",
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
								justifyContent={"center"}
								flexDirection={"column"}
							>
								<Typography variant="h1" mb={4} color={component.dark ? "white" : "black"} zIndex={100}>
									{slide?.titol}
								</Typography>
								<Typography variant="h2" textTransform={"none"} mt={4} color={component.dark ? "white" : "black"} zIndex={100}>
									{slide?.subtitol}
								</Typography>
								{slide?.boto?.titolBoto && (
									<Box zIndex={100} mt={8}>
										<CustomButtonPublic
											background
											title={slide?.boto?.titolBoto}
											onClick={() => router.push(slide?.boto?.link)}
											light={component.dark}
										/>
									</Box>
								)}
							</Box>
							<Overlay light={!component.dark} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
}
