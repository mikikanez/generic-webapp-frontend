import React, { useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { Layers, LocalShipping } from "@mui/icons-material";
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
import ComandesColumns from "@/components/tables/ComandesColumns";

export default function PaginesAdmin({ comandes }) {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const columns = ComandesColumns(comandes);
	const options = TableOptions("comanda");
	console.log(comandes);

	return (
		<PageAdmin title="Comandes" Icon={LocalShipping}>
			<CustomCard>
				<ThemeProvider theme={getMuiTheme()}>
					<MUIDataTable data={comandes} columns={columns} options={options} />
				</ThemeProvider>
			</CustomCard>
		</PageAdmin>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let comandes = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		comandes = await getList("comandes");
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			comandes: comandes,
		},
	};
};
