import React, { useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import Inventory from "@mui/icons-material/Inventory";
import { getServerSession } from "next-auth";
import { getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import CustomCard from "@/components/layout/CustomCard";
import { useRouter } from "next/router";
import CustomButton from "@/components/elements/CustomButton";
import { ThemeProvider } from "@emotion/react";
import MUIDataTable from "mui-datatables";
import getMuiTheme from "@/components/tables/getMuiTheme";
import { Box, Grid } from "@mui/material";
import TableOptions from "@/components/tables/TableOptions";
import ProductesColumns from "@/components/tables/ProductesColumns";
import CategoriesColumns from "@/components/tables/CategoriesColumns";
import TableOptionsCategories from "@/components/tables/TableOptionsCategories";
import { DialogAddCategoriaProducte } from "@/views/botiga/DialogAddCategoriaProducte";

export default function EntradesAdmin({ productes, categories }) {
	const router = useRouter();
	const columns = ProductesColumns(productes);
	const columnsCategories = CategoriesColumns(categories);
	const options = TableOptions("producte");
	const [open, setOpen] = useState(false);
	const [cat, setCat] = useState("");

	console.log(productes);

	const editCat = (value) => {
		setCat(categories.filter((i) => i.slug === value)[0]);
		setOpen(true);
	};
	const optionsCat = TableOptionsCategories(editCat);

	return (
		<PageAdmin
			title="Productes"
			Icon={Inventory}
			button={
				<Box display="flex">
					<CustomButton title={"Crear categoria"} onClick={() => setOpen(true)} />
					<Box mx={1} />
					<CustomButton title={"Crear producte"} onClick={() => router.push("producte")} />
				</Box>
			}
		>
			<Grid container spacing={3}>
				<Grid item md={9} xs={12}>
					<CustomCard title={"Productes"}>
						<ThemeProvider theme={getMuiTheme()}>
							<MUIDataTable data={productes} columns={columns} options={options} />
						</ThemeProvider>
					</CustomCard>
				</Grid>
				<Grid item md={3} xs={12}>
					<CustomCard title={"Categories"}>
						<ThemeProvider theme={getMuiTheme()}>
							<MUIDataTable data={categories} columns={columnsCategories} options={optionsCat} />
						</ThemeProvider>
					</CustomCard>
				</Grid>
			</Grid>
			<DialogAddCategoriaProducte open={open} setOpen={setOpen} cat={cat} setCat={setCat} />
		</PageAdmin>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let productes = [];
	let categories = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		productes = await getList("productes");
		categories = await getList("categoriesProducte");
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			productes: productes,
			categories: categories,
		},
	};
};
