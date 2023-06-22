import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { valor } from "..";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component4({ component, matches, imatges, theme, router, ...props }) {
	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.primary.main }} {...props}>
			<Container maxWidth="lg">
				<Box py={20} px={5} paddingBottom={0}>
					<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
						<Typography variant="h1" textAlign={"center"} textTransform={"capitalize"} mb={4} color={component.dark ? "white" : "white"}>
							{valor(0, component)}
						</Typography>
						<Box my={5}>
							<Typography variant="body1" textAlign={"center"} color={component.dark ? "white" : "white"}>
								{valor(1, component)}
							</Typography>
						</Box>

						<CustomButtonPublic
							secondary
							title={valor(3, component)?.titol}
							onClick={() => router.push(valor(3, component)?.link)}
							light={component.dark}
						/>
					</Box>
					<div
						style={{
							marginTop: matches ? "50px" : "30px",
						}}
					>
						<Image
							alt="Imatge"
							src={imatges.filter((i) => i.id === 2)[0]?.imatge}
							width={0}
							height={0}
							sizes="90vw"
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
				</Box>
			</Container>
		</Box>
	);
}
