import React, { useEffect, useState } from "react";
import "moment/locale/ca";
import { getServerSession } from "next-auth";
import PageAdmin from "@/components/layout/PageAdmin";
import { addElement, getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import { BarChart, Instagram, Language, Menu, Palette, Settings, Twitter } from "@mui/icons-material";
import CustomCard from "@/components/layout/CustomCard";
import CustomTextField from "@/components/elements/CustomTextField";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "@/components/elements/CustomButton";
import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	InputAdornment,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	Typography,
} from "@mui/material";
import ColorPicker from "mui-color-picker";
import { useAuth } from "@/core/hooks/useAuth";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import CustomSelect from "@/components/elements/CustomSelect";
import Thumb from "@/components/elements/Thumb";
import ImageInput from "@/components/elements/InputImage";
import { tipografies } from "@/core/fonts";
import { menus } from "@/components/custom/menus";
import { useTheme } from "@emotion/react";
import { footers } from "@/components/custom/footers";
import { TabContext, TabPanel } from "@mui/lab";
import { CustomTab, CustomTabs } from "@/components/elements/CustomTabs";
import General from "@/views/personalitzacio/General";
import Disseny from "@/views/personalitzacio/Disseny";
import Menus from "@/views/personalitzacio/Menus";
import PeuDePagina from "@/views/personalitzacio/PeuDePagina";
import Idiomes from "@/views/personalitzacio/Idiomes";

export default function ConfiguracioAdmin({ configuracio }) {
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
		{ id: 1, nom: "General", icon: Settings },
		{ id: 2, nom: "Disseny", icon: Palette },
		{ id: 3, nom: "Menús", icon: Menu },
		{ id: 4, nom: "Peu de pàgina", icon: BarChart },
		{ id: 5, nom: "Idiomes", icon: Language },
	];

	return (
		<form onSubmit={handleSubmit(enviar)}>
			<PageAdmin title="Personalització" Icon={Settings} button={<CustomButton type="submit" title={"Guardar"} loading={loading} />}>
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
						<General register={register} opcio={opcio} />
					</TabPanel>
					<TabPanel value={2} index={0} style={{ padding: 0 }}>
						<Disseny
							register={register}
							opcio={opcio}
							control={control}
							setValue={setValue}
							watch={watch}
							trigger={trigger}
							getValues={getValues}
						/>
					</TabPanel>
					<TabPanel value={3} index={0} style={{ padding: 0 }}>
						<Menus watch={watch} getValues={getValues} opcions={opcio("pagines").valor} />
					</TabPanel>
					<TabPanel value={4} index={0} style={{ padding: 0 }}>
						<PeuDePagina watch={watch} getValues={getValues} opcions={opcio("pagines").valor} />
					</TabPanel>
					<TabPanel value={5} index={0} style={{ padding: 0 }}>
						<Idiomes watch={watch} getValues={getValues} />
					</TabPanel>
				</TabContext>

				<CustomButton type="submit" title={"Guardar"} loading={loading} />
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
