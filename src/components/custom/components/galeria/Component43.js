import { Box, Container } from "@mui/material";
import { valor } from "..";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useWindowSize } from "@/core/utils";
import { useCallback, useEffect, useState } from "react";

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
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props} ref={div}>
			<Container maxWidth={"lg"} style={{ position: "relative" }}>
				<Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} py={2}>
					{valor(0, component)?.map((slide, index) => (
						<Box
							key={index}
							style={{
								minHeight: matches ? 100 : 100,
								height: "100%",
								position: "relative",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
							m={5}
						>
							<img alt="Imatge" src={imatges.filter((i) => i.id === index)[0]?.imatge} fill objectFit="cover" />
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
}
