import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import styles from "@/styles/layout.module.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWindowSize } from "@/core/utils";
import { useCallback, useEffect, useState } from "react";
import { Overlay } from "@/components/elements/Overlay";

export default function Component23({ component, matches, imatges, theme, router, ...props }) {
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
		console.log(width);
	}, [width]);

	return (
		<Box
			style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main, position: "relative", overflow: "hidden" }}
			{...props}
			ref={div}
		>
			<Container disableGutters maxWidth={false} style={{ position: "relative", overflow: "hidden", width: width }}>
				<Swiper
					navigation={true}
					modules={[Autoplay, Pagination, FreeMode, Navigation, Thumbs]}
					slidesPerView={1}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
					className="mySlider"
					width={props.preview ? width : width}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					spaceBetween={30}
					centeredSlides={true}
					effect={"fade"}
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
									height: "80vh",
								}}
								display={"flex"}
								alignItems={"center"}
							>
								<Container style={{ textAlign: matches ? "" : "center", zIndex: 100 }}>
									<Typography variant="h1" mb={4} color={component.dark ? "white" : "black"}>
										{slide?.titol}
									</Typography>
									<Divider
										sx={{
											borderWidth: 5,
											width: "40%",
											borderColor: component.dark ? "white" : "black",
											justifyContent: "center",
											margin: matches ? "" : "auto",
										}}
									/>
									<Typography variant="h2" textTransform={"none"} mt={4} color={component.dark ? "white" : "black"}>
										{slide?.subtitol}
									</Typography>
								</Container>
							</Box>
							<Overlay light={!component.dark} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
}
