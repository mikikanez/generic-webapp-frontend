import React, { useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import Layers from "@mui/icons-material/Layers";
import { getServerSession } from "next-auth";
import { getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import CustomCard from "@/components/layout/CustomCard";
import CustomButton from "@/components/elements/CustomButton";
import { DialogAddPagina } from "@/views/pagines/DialogAddPagina";
import { ThemeProvider } from "@emotion/react";
import MUIDataTable from "mui-datatables";
import TableOptions from "@/components/tables/TableOptions";
import getMuiTheme from "@/components/tables/getMuiTheme";
import PaginesColumns from "@/components/tables/PaginesColumns";

export default function PaginesAdmin({ pagines }) {
	const [open, setOpen] = useState(false);
	const columns = PaginesColumns(pagines);
	const options = TableOptions("pagina");

	return (
		<PageAdmin title="Pàgines" Icon={Layers} button={<CustomButton title={"Crear Pàgina"} onClick={() => setOpen(true)} />}>
			<CustomCard>
				<ThemeProvider theme={getMuiTheme()}>
					<MUIDataTable data={pagines} columns={columns} options={options} />
				</ThemeProvider>
			</CustomCard>
			<DialogAddPagina open={open} setOpen={setOpen} />
		</PageAdmin>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let pagines = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		pagines = await getList("pagines");
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			pagines: pagines,
		},
	};
};
