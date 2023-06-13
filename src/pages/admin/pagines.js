import React, { useEffect, useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { Layers } from "@mui/icons-material";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { getServerSession } from "next-auth";
import { getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import CustomCard from "@/components/layout/CustomCard";
import moment from "moment";
import { useRouter } from "next/router";
import CustomButton from "@/components/elements/CustomButton";
import { DialogAddPagina } from "@/views/pagines/DialogAddPagina";

export default function PaginesAdmin({ pagines }) {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	return (
		<PageAdmin title="Pàgines" Icon={Layers} button={<CustomButton title={"Crear Pàgina"} onClick={() => setOpen(true)} />}>
			<CustomCard>
				<TableContainer>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>URL</TableCell>
								<TableCell align="right">Nom</TableCell>
								<TableCell align="right">Paraules clau</TableCell>
								<TableCell align="right">Idioma</TableCell>
								<TableCell align="right">Creada</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{pagines.map((pagina) => (
								<TableRow
									hover
									key={pagina.id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									onClick={() => router.push("/admin/pagina/" + pagina.slug)}
								>
									<TableCell component="th" scope="row">
										/{pagina.slug}
									</TableCell>
									<TableCell align="right">{pagina.titol}</TableCell>
									<TableCell align="right">{pagina.keywords}</TableCell>
									<TableCell align="right">{pagina.idioma?.nom}</TableCell>
									<TableCell align="right">{moment(pagina.created_at).format("DD/MM/YYYY HH:mm")}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
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
