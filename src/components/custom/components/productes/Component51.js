import { getList } from "@/lib/API";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CustomLink from "@/components/elements/CustomLink";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";

export default function Component51({ component, matches, imatges, theme, router, ...props }) {
	const [productes, setProductes] = useState([]);

	useEffect(() => {
		const obtenir = async () => {
			const data = await getList("productes?limit=3");
			setProductes(data);
		};
		obtenir();
	}, []);

	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"lg"}>
				<Grid container spacing={3} display={"flex"} justifyContent={"center"}>
					{productes?.map((producte) => (
						<Grid item md={4} xs={12} key={producte.id}>
							<Product>
								<Box p={5}>
									<Typography variant="h3">{producte.titol}</Typography>
									<Typography
										dangerouslySetInnerHTML={{ __html: producte.descripcio.substring(0, 80) + "..." }}
										variant="body1"
										textAlign={"left"}
										color={component.dark ? "white" : "black"}
										mt={4}
										mb={4}
									></Typography>
									<CustomLink title={"Leer más"} onClick={() => router.push("/producte/" + producte.slug)} />
								</Box>
								<div style={{ width: "100%", height: 300, position: "relative", textAlign: "left" }}>
									<Image alt="Imatge" src={process.env.NEXT_PUBLIC_STORAGE + producte.imatge} fill style={{ objectFit: "cover" }} />
								</div>
								<Box p={5}>
									<Typography
										dangerouslySetInnerHTML={{ __html: producte.especificacions.substring(0, 80) + "..." }}
										variant="body1"
										textAlign={"left"}
										color={component.dark ? "white" : "black"}
										mt={4}
									></Typography>
									<Typography variant="h2" textAlign={"right"} mt={2}>
										{producte.preu} €
									</Typography>
									<Box my={2} />
									<CustomButtonPublic title={"Comprar"} fullWidth secondary onClick={() => router.push("/producte/" + producte.slug)} />
								</Box>
							</Product>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}

const svg =
	'data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="#F6C416" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const Product = styled(Box)({
	border: "1px solid #EEEEEC",
	"& li": {
		content: '""',
		paddingBottom: 20,
		// background: `url('${svg}')`,
		// "list-style-type": "none",
		// marginBottom: "1rem",
	},
});
