import React, { useEffect, useState } from "react";
import "moment/locale/ca";
import { getServerSession } from "next-auth";
import PageAdmin from "@/components/layout/PageAdmin";
import { addElement, getList } from "@/lib/API";
import { authOptions } from "../api/auth/[...nextauth]";
import { Instagram, Settings, Twitter } from "@mui/icons-material";
import CustomCard from "@/components/layout/CustomCard";
import CustomTextField from "@/components/elements/CustomTextField";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "@/components/elements/CustomButton";
import { Box, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select } from "@mui/material";
import ColorPicker from "mui-color-picker";
import { useAuth } from "@/core/hooks/useAuth";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import CustomSelect from "@/components/elements/CustomSelect";
import Thumb from "@/components/elements/Thumb";
import ImageInput from "@/components/elements/InputImage";

export default function ConfiguracioAdmin({ configuracio }) {
	const { enqueueSnackbar } = useSnackbar();
	const { register, trigger, getValues, watch, control, setValue, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
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

	return (
		<PageAdmin title="Configuració" Icon={Settings}>
			<form onSubmit={handleSubmit(enviar)}>
				<Grid spacing={3} container>
					<Grid item md={8}>
						<CustomCard title={"Opcions generals"}>
							<CustomTextField register={register} key={opcio("titol").id} name={opcio("titol").nom} label={opcio("titol").descripcio} />
							<CustomTextField
								register={register}
								key={opcio("descripcio").id}
								name={opcio("descripcio").nom}
								label={opcio("descripcio").descripcio}
								mt={3}
								rows={3}
								multiline
							/>
						</CustomCard>
					</Grid>
					<Grid item md={4}>
						<CustomCard title="Logotip">
							<Thumb file={watch("logo")} />

							<ImageInput name="logo" register={register} trigger={trigger} getValues={getValues} text={"Afegir logotip"} />
						</CustomCard>
						<CustomCard title={"Opcions de disseny"}>
							<Grid spacing={3} container>
								<Grid item md={6}>
									<Controller
										control={control}
										name={opcio("primary").nom}
										render={({ field: { onChange, onBlur, value, name, ref } }) => (
											<ColorPicker
												onChange={(color) => onChange(color)}
												onBlur={onBlur}
												value={watch("primary")}
												defaultValue={"Color primary"}
												name={name}
												label={opcio("primary").descripcio}
												ref={ref}
												fullWidth
											/>
										)}
									/>
								</Grid>
								<Grid item md={6}>
									<Controller
										control={control}
										name={opcio("secondary").nom}
										render={({ field: { onChange, onBlur, value, name, ref } }) => (
											<ColorPicker
												onChange={(color) => onChange(color)}
												onBlur={onBlur}
												value={watch("secondary")}
												defaultValue={"Color secondari"}
												name={name}
												label={opcio("secondary").descripcio}
												ref={ref}
												fullWidth
											/>
										)}
									/>
								</Grid>
								<Grid item md={12}>
									<FormControl fullWidth>
										<InputLabel htmlFor="tipus">{opcio("font").descripcio}</InputLabel>
										<Select
											{...register(opcio("font").nom)}
											fullWidth
											variant="outlined"
											label={opcio("font").descripcio}
											defaultValue={opcio("font").valor}
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
								<Grid item md={12}>
									<CustomTextField
										register={register}
										key={opcio("instagram").id}
										name={opcio("instagram").nom}
										label={opcio("instagram").descripcio}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<Instagram />
												</InputAdornment>
											),
										}}
									/>
								</Grid>
								<Grid item md={12}>
									<CustomTextField
										register={register}
										key={opcio("twitter").id}
										name={opcio("twitter").nom}
										label={opcio("twitter").descripcio}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<Twitter />
												</InputAdornment>
											),
										}}
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
