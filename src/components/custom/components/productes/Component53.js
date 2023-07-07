import { getList } from "@/lib/API";
import { Box, Chip, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CustomLink from "@/components/elements/CustomLink";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";
import { productes_disseny } from "../../productes";
import { useOpcions } from "@/context/OpcionsContext";
import { isDark } from "@/core/createTheme";
import { motion, AnimatePresence } from "framer-motion";

export default function Component53({ component, matches, imatges, theme, router, ...props }) {
	const [productes, setProductes] = useState([]);
	const [productesFilter, setProductesFilter] = useState([]);
	const [categories, setCategories] = useState([]);
	const [catSel, setCatSel] = useState(0);
	const opcions = useOpcions();

	useEffect(() => {
		const obtenir = async () => {
			const data = await getList("productes");
			const categories = await getList("categoriesProducte");
			setProductes(data);
			setCategories(categories);
		};
		obtenir();
	}, []);

	useEffect(() => {
		catSel ? setProductesFilter(productes.filter((i) => i.categories.filter((c) => c.id === catSel).length > 0)) : setProductesFilter(productes);
	}, [catSel, productes]);

	const renderProducte = (producte) => {
		const Producte = productes_disseny.filter((producte_disseny) => producte_disseny.id === Number(opcions?.producte_disseny))[0].component;
		return <Producte producte={producte} component={component} />;
	};

	return (
		<Box style={{ backgroundColor: component.dark ? theme.palette.primary.main : theme.palette.background.main }} {...props}>
			<Container maxWidth={"lg"}>
				<Box display={"flex"} justifyContent={"center"} my={4}>
					<Stack spacing={2} direction={"row"}>
						<Categoria
							label={"Todas"}
							variant={catSel === 0 ? "filled" : "outlined"}
							clickable={true}
							onClick={() => setCatSel(0)}
							className={catSel === 0 && "activat"}
						/>

						{categories?.map((cat) => (
							<Categoria
								key={cat?.id}
								label={cat?.nom}
								variant={catSel === cat.id ? "filled" : "outlined"}
								className={catSel === cat.id && "activat"}
								clickable={true}
								onClick={() => setCatSel(cat.id)}
							/>
						))}
					</Stack>
				</Box>
				<motion.div layout>
					<Grid container spacing={3} display={"flex"}>
						<AnimatePresence>
							{productesFilter?.map((producte) => (
								<Grid item md={4} xs={12} key={producte.id} height={"100%"}>
									<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
										{renderProducte(producte)}
									</motion.div>
								</Grid>
							))}
						</AnimatePresence>
					</Grid>
				</motion.div>
			</Container>
		</Box>
	);
}

const Categoria = styled(Chip)(({ theme }) => ({
	border: "1px solid #EEEEEC",
	transition: "0.2s",
	"& .activat": {
		backgroundColor: theme.palette.secondary.main,
		"& .text": {
			color: isDark(theme.palette.secondary.main) ? "white" : "black",
		},
	},
}));
