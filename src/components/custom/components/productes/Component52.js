import { getList } from "@/lib/API";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CustomLink from "@/components/elements/CustomLink";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";
import { productes_disseny } from "../../productes";
import { useOpcions } from "@/context/OpcionsContext";

export default function Component52({ component, matches, imatges, theme, router, ...props }) {
	const [productes, setProductes] = useState([]);
	const opcions = useOpcions();

	useEffect(() => {
		const obtenir = async () => {
			const data = await getList("productes");
			setProductes(data);
		};
		obtenir();
	}, []);

	const renderProducte = (producte) => {
		const Producte = productes_disseny.filter((producte_disseny) => producte_disseny.id === Number(opcions?.producte_disseny))[0].component;
		return <Producte producte={producte} component={component} />;
	};

	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"lg"}>
				<Grid container spacing={3} display={"flex"}>
					{productes?.map((producte) => (
						<Grid item md={4} xs={12} key={producte.id} height={"100%"}>
							{renderProducte(producte)}
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
