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
		console.log(component);
	}, [component]);

	return (
		<Box
			style={{
				backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main,
				position: "relative",
				overflow: "hidden",
			}}
			{...props}
			ref={div}
		>
			<Container disableGutters maxWidth={false} style={{ position: "relative", overflow: "hidden", width: width }}>
				<Swiper
					navigation={true}
					modules={[Autoplay, Pagination, FreeMode, Navigation, Thumbs, EffectFade]}
					slidesPerView={1}
					className="mySlider"
					width={props.preview ? width : width}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					spaceBetween={30}
					centeredSlides={true}
					effect={"effectFade"}
					pagination={{
						clickable: true,
					}}
					style={{
						"--swiper-navigation-color": Number(component.dark) ? "white" : "black",
						"--swiper-pagination-color": Number(component.dark) ? "white" : "black",
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
									<Typography variant="h1" mb={4} color={Number(component.dark) ? "white" : "black"}>
										{slide?.titol}
									</Typography>
									<Divider
										sx={{
											borderWidth: 3,
											width: "40%",
											borderColor: Number(component.dark) ? "white" : "black",
											justifyContent: "center",
											margin: matches ? "" : "auto",
										}}
									/>
									<Typography variant="h2" textTransform={"none"} mt={4} color={Number(component.dark) ? "white" : "black"}>
										{slide?.subtitol}
									</Typography>
									{slide?.boto?.titolBoto && (
										<Box zIndex={100} mt={4}>
											<CustomButtonPublic
												background
												title={slide?.boto?.titolBoto}
												onClick={() => router.push(slide?.boto?.link)}
												light={Number(component.dark)}
											/>
										</Box>
									)}
								</Container>
							</Box>
							<Overlay light={!Number(component.dark)} />
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Box>
	);
}
