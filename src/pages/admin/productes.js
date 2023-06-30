import React, { useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { Inventory, Newspaper } from "@mui/icons-material";
import { getServerSession } from "next-auth";
import { getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import CustomCard from "@/components/layout/CustomCard";
import { useRouter } from "next/router";
import CustomButton from "@/components/elements/CustomButton";
import { ThemeProvider } from "@emotion/react";
import MUIDataTable from "mui-datatables";
import getMuiTheme from "@/components/tables/getMuiTheme";
import { Grid } from "@mui/material";
import TableOptions from "@/components/tables/TableOptions";
import ProductesColumns from "@/components/tables/ProductesColumns";

export default function EntradesAdmin({ productes }) {
	const router = useRouter();
	const columns = ProductesColumns(productes);

	const options = TableOptions("producte");

	return (
		<PageAdmin title="Productes" Icon={Inventory} button={<CustomButton title={"Crear producte"} onClick={() => router.push("producte")} />}>
			<Grid container spacing={3}>
				<Grid item md={12}>
					<CustomCard title={"Productes"}>
						<ThemeProvider theme={getMuiTheme()}>
							<MUIDataTable data={productes} columns={columns} options={options} />
						</ThemeProvider>
					</CustomCard>
				</Grid>
			</Grid>
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
