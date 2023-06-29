import React, { useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { Newspaper } from "@mui/icons-material";
import { getServerSession } from "next-auth";
import { getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import CustomCard from "@/components/layout/CustomCard";
import { useRouter } from "next/router";
import CustomButton from "@/components/elements/CustomButton";
import { ThemeProvider } from "@emotion/react";
import MUIDataTable from "mui-datatables";
import getMuiTheme from "@/components/tables/getMuiTheme";
import PaginesColumns from "@/components/tables/PaginesColumns";
import { Box, Grid } from "@mui/material";
import { DialogAddCategoria } from "@/views/entrades/DialogAddCategoria";
import CategoriesColumns from "@/components/tables/CategoriesColumns";
import TableOptionsCategories from "@/components/tables/TableOptionsCategories";

export default function EntradesAdmin({ entrades, categories }) {
	const router = useRouter();
	const columns = PaginesColumns(entrades);
	const columnsCategories = CategoriesColumns(categories);
	const [open, setOpen] = useState(false);
	const [cat, setCat] = useState("");

	const editCat = (value) => {
		setCat(categories.filter((i) => i.slug === value)[0]);
		setOpen(true);
	};
	const options = TableOptionsCategories(editCat);

	return (
		<PageAdmin
			title="Entrades"
			Icon={Newspaper}
			button={
				<Box display="flex">
					<CustomButton title={"Crear categoria"} onClick={() => setOpen(true)} />
					<Box mx={1} />
					<CustomButton title={"Crear entrada"} onClick={() => router.push("entrada")} />
				</Box>
			}
		>
			<Grid container spacing={3}>
				<Grid item md={8}>
					<CustomCard title={"Entrades"}>
						<ThemeProvider theme={getMuiTheme()}>
							<MUIDataTable data={entrades} columns={columns} options={options} />
						</ThemeProvider>
					</CustomCard>
				</Grid>
				<Grid item md={4}>
					<CustomCard title={"Categories"}>
						<ThemeProvider theme={getMuiTheme()}>
							<MUIDataTable data={categories} columns={columnsCategories} options={options} />
						</ThemeProvider>
					</CustomCard>
				</Grid>
			</Grid>

			<DialogAddCategoria open={open} setOpen={setOpen} cat={cat} setCat={setCat} />
		</PageAdmin>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let entrades = [];
	let categories = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		entrades = await getList("entrades");
		categories = await getList("categories");
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			entrades: entrades,
			categories: categories,
		},
	};
};
