import React, { useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { Layers, Newspaper } from "@mui/icons-material";
import { getServerSession } from "next-auth";
import { getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import CustomCard from "@/components/layout/CustomCard";
import { useRouter } from "next/router";
import CustomButton from "@/components/elements/CustomButton";
import { DialogAddPagina } from "@/views/pagines/DialogAddPagina";
import { ThemeProvider } from "@emotion/react";
import MUIDataTable from "mui-datatables";
import TableOptions from "@/components/tables/TableOptions";
import getMuiTheme from "@/components/tables/getMuiTheme";
import PaginesColumns from "@/components/tables/PaginesColumns";
import { Box, Grid } from "@mui/material";
import { DialogAddCategoria } from "@/views/entrades/DialogAddCategoria";

export default function EntradesAdmin({ entrades }) {
	const router = useRouter();
	const columns = PaginesColumns(entrades);
	const options = TableOptions();
	const [open, setOpen] = useState(false);

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
					<CustomCard>
						<ThemeProvider theme={getMuiTheme()}>
							<MUIDataTable data={entrades} columns={columns} options={options} />
						</ThemeProvider>
					</CustomCard>
				</Grid>
				<Grid item md={4}>
					<CustomCard>
						<ThemeProvider theme={getMuiTheme()}>
							<MUIDataTable data={entrades} columns={columns} options={options} />
						</ThemeProvider>
					</CustomCard>
				</Grid>
			</Grid>

			<DialogAddCategoria open={open} setOpen={setOpen} />
		</PageAdmin>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let entrades = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		entrades = await getList("entrades");
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			entrades: entrades,
		},
	};
};
