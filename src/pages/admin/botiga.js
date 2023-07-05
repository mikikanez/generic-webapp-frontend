import React, { useEffect, useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { Inventory, LocalShipping, Newspaper, Palette, Settings, ShoppingCart } from "@mui/icons-material";
import { getServerSession } from "next-auth";
import { getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import CustomCard from "@/components/layout/CustomCard";
import { useRouter } from "next/router";
import CustomButton from "@/components/elements/CustomButton";
import { ThemeProvider } from "@emotion/react";
import MUIDataTable from "mui-datatables";
import getMuiTheme from "@/components/tables/getMuiTheme";
import { Box, Grid, Typography } from "@mui/material";
import TableOptions from "@/components/tables/TableOptions";
import ProductesColumns from "@/components/tables/ProductesColumns";
import { useAuth } from "@/core/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { TabContext, TabPanel } from "@mui/lab";
import { CustomTab, CustomTabs } from "@/components/elements/CustomTabs";
import Parametres from "@/views/botiga/Parametres";

export default function EntradesAdmin({ configuracio }) {
	const [tab, setTab] = useState(1);
	const { enqueueSnackbar } = useSnackbar();
	const { register, trigger, getValues, watch, control, setValue, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		console.log(configuracio);
		configuracio.map((item) => setValue(item.nom, item.valor));
	}, [configuracio]);

	function opcio(nom) {
		return configuracio.filter((i) => i.nom === nom)[0];
	}

	const enviar = async (values) => {
		console.log(values);
		setLoading(true);
		try {
			const { message } = await addElement("opcions", values, user.token.accessToken);
			enqueueSnackbar(message, {
				variant: "success",
			});
		} catch (e) {
			enqueueSnackbar("Error: Alguna cosa no ha anat bé", {
				variant: "error",
			});
		}
		setLoading(false);
		router.reload("/admin/configuracio");
	};

	const handleChange = (event, newValue) => {
		setTab(newValue);
	};

	const tabs = [
		{ id: 1, nom: "Paràmetres", icon: Settings },
		{ id: 2, nom: "Disseny", icon: Palette },
		{ id: 3, nom: "Enviament", icon: LocalShipping },
	];

	return (
		<form onSubmit={handleSubmit(enviar)}>
			<PageAdmin title="Botiga" Icon={ShoppingCart} button={<CustomButton title={"Crear producte"} onClick={() => router.push("producte")} />}>
				<TabContext value={tab}>
					<Box my={3}>
						<CustomTabs onChange={handleChange} aria-label="alta select">
							{tabs.map((tab) => (
								<CustomTab
									key={tab.id}
									value={tab.id}
									label={
										<Box
											display="flex"
											alignItems={"center"}
											onDragOver={(event) => {
												handleChange(event, tab.id);
											}}
										>
											<tab.icon color="primary" />
											<Typography ml={1} variant="caption">
												{tab.nom}
											</Typography>
										</Box>
									}
								/>
							))}
						</CustomTabs>
					</Box>
					<TabPanel value={1} index={0} style={{ padding: 0 }}>
						<Parametres opcio={opcio} register={register} control={control} setValue={setValue} />
					</TabPanel>
					<TabPanel value={2} index={0} style={{ padding: 0 }}></TabPanel>
					<TabPanel value={3} index={0} style={{ padding: 0 }}></TabPanel>
				</TabContext>

				<CustomButton type="submit" title={"Guardar"} loading={loading} success />
			</PageAdmin>
		</form>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let configuracio = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		configuracio = await getList("opcions");
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			configuracio: configuracio,
		},
	};
};
