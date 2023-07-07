import React from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import LocalShipping from "@mui/icons-material/LocalShipping";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import { getServerSession } from "next-auth";
import CustomCard from "@/components/layout/CustomCard";
import { getData } from "@/lib/API";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Avatar, Box, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import CustomButton from "@/components/elements/CustomButton";
import { useRouter } from "next/router";
import moment from "moment";
import { Estat } from "@/components/elements/Estat";

export default function EntradaAdd({ comanda }) {
	const router = useRouter();

	return (
		<PageAdmin title={"Comanda " + comanda.unique_id} Icon={LocalShipping}>
			<Grid spacing={3} container>
				<Grid item md={4}>
					<CustomCard title={"Informació contacte"}>
						<Dada nom="Nom">
							{comanda.nom} {comanda.cognom1} {comanda.cognom2}
						</Dada>
						<Dada nom="E-mail">{comanda.email}</Dada>

						<Dada nom="Telèfon">{comanda.telefon}</Dada>
					</CustomCard>
					<Box display={comanda.factura === 1 ? "block" : "none"}>
						<CustomCard title={"Informació facturació"}>
							<Dada nom="Raó social">{comanda.rao}</Dada>
							<Dada nom="NIF/DNI">{comanda.nif}</Dada>
							<Dada nom="Direcció">{comanda.direccio}</Dada>
							<Dada nom="Població">{comanda.poblacio}</Dada>
							<Dada nom="Província">{comanda.provincia}</Dada>
							<Dada nom="Codi postal">{comanda.codi_postal}</Dada>
							<Dada nom="País">{comanda.pais}</Dada>
						</CustomCard>
					</Box>
				</Grid>
				<Grid item md={4}>
					<CustomCard title={"Informació enviament"}>
						<Dada nom="Direcció">{comanda.direccio_enviament}</Dada>
						<Dada nom="Població">{comanda.poblacio_enviament}</Dada>
						<Dada nom="Província">{comanda.provincia_enviament}</Dada>
						<Dada nom="Codi postal">{comanda.codi_postal_enviament}</Dada>
						<Dada nom="País">{comanda.pais_enviament}</Dada>
					</CustomCard>
				</Grid>
				<Grid item md={4}>
					<CustomCard title={"Informació"}>
						<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
							<Dada nom="Data comanda">{moment(comanda.created_at).format("DD/MM/YYYY")}</Dada>
							<Estat estat={comanda.comanda_estat} />
						</Box>
					</CustomCard>
					<CustomCard title={"Productes"}>
						<List>
							{comanda.productes?.map((item, index) => (
								<div key={index}>
									<ListItem
										alignItems="flex-start"
										style={{ minWidth: 300 }}
										secondaryAction={
											<IconButton edge="end" aria-label="comments" onClick={() => router.push("/admin/producte/" + item.slug)}>
												<RemoveRedEye />
											</IconButton>
										}
									>
										<ListItemAvatar>
											<Avatar
												variant="rounded"
												src={process.env.NEXT_PUBLIC_STORAGE + item?.imatge}
												style={{ width: 50, height: 50, marginRight: 20 }}
											/>
										</ListItemAvatar>
										<ListItemText
											primary={
												<Typography>
													{item?.titol} <small style={{ color: "grey" }}>x{item.pivot.quantitat}</small>
												</Typography>
											}
											secondary={
												<>
													<Typography>{(Math.round(item?.preu * 100) / 100) * item.pivot.quantitat} €</Typography>
												</>
											}
										/>
									</ListItem>
								</div>
							))}
							<Divider />
							<Box display="flex" justifyContent={"space-between"} mt={1}>
								<Typography pt={1} pb={1} pl={2} variant="h5">
									Total:
								</Typography>
								<Box textAlign={"right"}>
									<Typography pt={1} pr={2} variant="h3">
										{comanda.preu} €
									</Typography>
								</Box>
							</Box>
						</List>
					</CustomCard>
					<CustomCard title={"Accions"}>
						<Stack direction={"row"} spacing={2}>
							<CustomButton success title={"Guardar"} fullWidth />
							<CustomButton danger title={"Retornar"} fullWidth />
						</Stack>
					</CustomCard>
				</Grid>
			</Grid>
		</PageAdmin>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let comanda = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		comanda = await getData("comandes", context?.query.slug);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			comanda: comanda,
		},
	};
};

const Dada = ({ nom, children }) => {
	return (
		<Box mb={2}>
			<Typography variant="h6">{nom}</Typography>
			<Typography>{children}</Typography>
		</Box>
	);
};
