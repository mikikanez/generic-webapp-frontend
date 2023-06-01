import React, { useEffect, useState } from "react";
import "moment/locale/ca";
import { getServerSession } from "next-auth";
import PageAdmin from "@/components/layout/PageAdmin";
import { addElement, getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import { Settings } from "@mui/icons-material";
import CustomCard from "@/components/layout/CustomCard";
import CustomTextField from "@/components/elements/CustomTextField";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "@/components/elements/CustomButton";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import ColorPicker from "mui-color-picker";
import { useAuth } from "@/core/hooks/useAuth";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import CustomSelect from "@/components/elements/CustomSelect";

export default function ConfiguracioAdmin({ configuracio }) {
	const { enqueueSnackbar } = useSnackbar();
	const { register, reset, watch, control, setValue, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		configuracio.map((item) => setValue(item.nom, item.valor));
	}, [configuracio]);

	const enviar = async (values) => {
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

	return (
		<PageAdmin title="Configuració" Icon={Settings}>
			<form onSubmit={handleSubmit(enviar)}>
				<Grid spacing={3} container>
					<Grid item md={6}>
						<CustomCard title={"Opcions generals"}>
							<CustomTextField register={register} key={configuracio?.[0].id} name={configuracio?.[0].nom} label={configuracio?.[0].descripcio} />
							<CustomTextField
								register={register}
								key={configuracio?.[1].id}
								name={configuracio?.[1].nom}
								label={configuracio?.[1].descripcio}
								mt={3}
								rows={3}
								multiline
							/>
						</CustomCard>
					</Grid>
					<Grid item md={6}>
						<CustomCard title={"Opcions de disseny"}>
							<Grid spacing={3} container>
								<Grid item md={6}>
									<Controller
										control={control}
										name={configuracio?.[2].nom}
										render={({ field: { onChange, onBlur, value, name, ref } }) => (
											<ColorPicker
												onChange={(color) => onChange(color)}
												onBlur={onBlur}
												value={watch("primary")}
												defaultValue={"Color primary"}
												name={name}
												label={configuracio?.[2].descripcio}
												ref={ref}
												fullWidth
											/>
										)}
									/>
								</Grid>
								<Grid item md={6}>
									<Controller
										control={control}
										name={configuracio?.[3].nom}
										render={({ field: { onChange, onBlur, value, name, ref } }) => (
											<ColorPicker
												onChange={(color) => onChange(color)}
												onBlur={onBlur}
												value={watch("secondary")}
												defaultValue={"Color secondari"}
												name={name}
												label={configuracio?.[3].descripcio}
												ref={ref}
												fullWidth
											/>
										)}
									/>
								</Grid>
								<Grid item md={12}>
									<FormControl fullWidth>
										<InputLabel htmlFor="tipus">{configuracio?.[6].descripcio}</InputLabel>
										<Select
											{...register(configuracio?.[6].nom)}
											fullWidth
											variant="outlined"
											label={configuracio?.[6].descripcio}
											defaultValue={configuracio?.[6].valor}
										>
											{tipografies?.map((item) => (
												<MenuItem key={item} value={item}>
													{item}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
							</Grid>
						</CustomCard>
						<CustomCard title={"Xarxes socials"}>
							<Grid spacing={3} container>
								<Grid item md={6}>
									<CustomTextField
										register={register}
										key={configuracio?.[7].id}
										name={configuracio?.[7].nom}
										label={configuracio?.[7].descripcio}
									/>
								</Grid>
								<Grid item md={6}>
									<CustomTextField
										register={register}
										key={configuracio?.[8].id}
										name={configuracio?.[8].nom}
										label={configuracio?.[8].descripcio}
									/>
								</Grid>
							</Grid>
						</CustomCard>
					</Grid>
				</Grid>
				<CustomButton type="submit" title={"Guardar"} loading={loading} />
			</form>
		</PageAdmin>
	);
}

const tipografies = ["Montserrat", "Roboto"];

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
