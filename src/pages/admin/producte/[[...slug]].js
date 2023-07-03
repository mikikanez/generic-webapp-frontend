import React, { useEffect, useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { CircleOutlined, Delete, Edit, Inventory } from "@mui/icons-material";
import { getServerSession } from "next-auth";
import CustomCard from "@/components/layout/CustomCard";
import { addElement, deleteElement, getData, getList, updateElement } from "@/lib/API";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Box, Checkbox, Chip, Collapse, Fab, FormControlLabel, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CustomTextField from "@/components/elements/CustomTextField";
import CustomButton from "@/components/elements/CustomButton";
import { useRouter } from "next/router";
import { constructPagina, slugify } from "@/core/utils";
import { useSnackbar } from "notistack";
import { useAuth } from "@/core/hooks/useAuth";
import Thumb from "@/components/elements/Thumb";
import InputImage from "@/components/elements/InputImage";
import CustomTiny from "@/components/elements/CustomTiny";
import { constructFormProducte } from "@/lib/ConstructForm";

export default function ProducteAdd({ producte, idiomes, categories }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const { user } = useAuth();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		getValues,
		control,
		formState: { errors },
		trigger,
		reset,
	} = useForm({ shouldUnregister: false, defaultValues: producte });

	useEffect(() => {
		const slug = slugify(watch("nom") ?? "");
		setValue("slug", slug);
	}, [watch("nom")]);

	const deleteProducte = async () => {
		setLoading(true);
		try {
			const { message } = await deleteElement("pagines", producte.id, user.token.accessToken);
			router.push("/admin/pagines");
			enqueueSnackbar(message, {
				variant: "success",
			});
			setTimeout(() => {
				router.reload();
			}, 300);
		} catch (e) {
			enqueueSnackbar("Error: Alguna cosa no ha anat bé", {
				variant: "error",
			});
			console.log(e);
		}
		setLoading(false);
	};

	const guardar = async (values) => {
		console.log(values);
		setLoading(true);
		try {
			let result = "";
			producte
				? (result = await updateElement("productes", producte.id, constructFormProducte(values), user.token.accessToken))
				: (result = await addElement("productes", constructFormProducte(values), user.token.accessToken));
			enqueueSnackbar(result.message, {
				variant: "success",
			});
			router.push(producte ? "/admin/producte/" + values.slug : "/admin/productes");
		} catch (e) {
			enqueueSnackbar("Error: Alguna cosa no ha anat bé", {
				variant: "error",
			});
			console.log(e);
		}
		setLoading(false);
	};

	return (
		<PageAdmin title={producte ? producte.nom + " - " + producte?.preu + "€" : "Nou producte"} Icon={Inventory}>
			<form onSubmit={handleSubmit(guardar)}>
				<CustomCard>
					<CustomTextField
						register={register}
						name={"nom"}
						label={"Nom"}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</CustomCard>
				<Grid container spacing={3}>
					<Grid md={8} xs={12} item>
						<CustomCard title={"Descripció"}>
							<CustomTiny
								name={"descripcio"}
								type="text"
								register={register}
								setValue={setValue}
								height={300}
								getValues={getValues}
								watch={watch}
							/>
						</CustomCard>
						<CustomCard title={"Especificacions"}>
							<CustomTiny
								name={"especificacions"}
								type="text"
								register={register}
								setValue={setValue}
								height={300}
								getValues={getValues}
								watch={watch}
							/>
						</CustomCard>
					</Grid>
					<Grid md={4} xs={12} item>
						<CustomCard title={"Informació"}>
							<CustomTextField
								register={register}
								name={"slug"}
								label={"URL"}
								InputLabelProps={{
									shrink: true,
								}}
								adornment={"/botiga/"}
								disabled
							/>
							<CustomTextField
								register={register}
								name={"preu"}
								type="double"
								label={"Preu"}
								InputLabelProps={{
									shrink: true,
								}}
								mt={3}
							/>
							<FormControlLabel
								control={
									<Controller
										name={"stock_activat"}
										control={control}
										defaultValue={String(producte?.stock_activat) === "1"}
										render={({ field: { value, ref, ...field } }) => (
											<Checkbox
												{...field}
												inputRef={ref}
												checked={String(value) === "1"}
												color="primary"
												size={"medium"}
												value={1}
												disableRipple
												defaultChecked={watch("stock_activat")}
												onChange={(event) => setValue("stock_activat", event.target.checked ? "1" : "0")}
											/>
										)}
									/>
								}
								label={"Activar stock"}
								labelPlacement="end"
							/>
							<Collapse in={String(watch("stock_activat")) === "1"}>
								<CustomTextField
									register={register}
									name={"stock"}
									label={"Stock"}
									type={"number"}
									InputLabelProps={{
										shrink: true,
									}}
									mt={1}
								/>
							</Collapse>

							<Box style={{ border: "1px solid #cacaca", borderRadius: 5 }} my={2} p={2}>
								<Typography>Imatge destacada</Typography>
								<InputImage name={"imatge"} register={register} trigger={trigger} text={"Imatge destacada"} />
								<Thumb file={watch("imatge") ?? "exemple.jpg"} />
							</Box>
							<CustomButton title={"Guardar"} success type="submit" fullWidth />
						</CustomCard>
					</Grid>
				</Grid>
			</form>
		</PageAdmin>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let producte = "";
	let categories = [];
	let idiomes = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		categories = await getList("categories", session?.user?.token?.accessToken);
		idiomes = await getList("idiomes", session?.user?.token?.accessToken);
		producte = await getData("productes", context?.query.slug);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			producte: producte ?? "",
			categories: categories,
			idiomes: idiomes,
		},
	};
};
