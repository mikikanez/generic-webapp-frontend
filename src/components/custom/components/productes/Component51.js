import { getList } from "@/lib/API";
import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useOpcions } from "@/context/OpcionsContext";
import { productes_disseny } from "../../productes";

export default function Component51({ component, matches, imatges, theme, router, ...props }) {
	const [productes, setProductes] = useState([]);
	const opcions = useOpcions();

	useEffect(() => {
		const obtenir = async () => {
			const data = await getList("productes?limit=3");
			setProductes(data);
		};
		obtenir();
	}, []);

	const renderProducte = (producte) => {
		const Producte = productes_disseny.filter((producte_disseny) => producte_disseny.id === Number(opcions?.producte_disseny))[0].component;
		return <Producte producte={producte} component={component} />;
	};

	return (
		<Box style={{ backgroundColor: Number(component.dark) ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"lg"}>
				<Grid container spacing={3} display={"flex"} justifyContent={"center"}>
					{productes?.map((producte) => (
						<Grid item md={4} xs={12} key={producte.id} flex={1}>
							{renderProducte(producte)}
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
