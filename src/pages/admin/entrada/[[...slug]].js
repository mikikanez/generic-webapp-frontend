import React, { useEffect, useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { CircleOutlined, Delete, Edit } from "@mui/icons-material";
import { getServerSession } from "next-auth";
import CustomCard from "@/components/layout/CustomCard";
import { deleteElement, getData, getList, updateElement } from "@/lib/API";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Box, Chip, Fab, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomTextField from "@/components/elements/CustomTextField";
import CustomButton from "@/components/elements/CustomButton";
import { useRouter } from "next/router";
import CustomSelect from "@/components/elements/CustomSelect";
import { constructPagina, slugify } from "@/core/utils";
import { useSnackbar } from "notistack";
import { useAuth } from "@/core/hooks/useAuth";
import Thumb from "@/components/elements/Thumb";
import InputImage from "@/components/elements/InputImage";
import CustomTiny from "@/components/elements/CustomTiny";
import { DialogAddCategoria } from "@/views/entrades/DialogAddCategoria";

export default function EntradaAdd({ entrada, idiomes, categories }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const { user } = useAuth();

	console.log(idiomes);

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
	} = useForm({ shouldUnregister: false, defaultValues: entrada });

	useEffect(() => {
		const slug = slugify(watch("titol") ?? "");
		setValue("slug", slug);
	}, [watch("titol")]);

	const deletePagina = async () => {
		setLoading(true);
		try {
			const { message } = await deleteElement("pagines", entrada.id, user.token.accessToken);
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
		console.log(idiomes);
		console.log(values);
		// setLoading(true);
		// try {
		// 	const { message } = await updateElement("pagines", entrada.id, constructFormPagina(values), user.token.accessToken);
		// 	enqueueSnackbar(message, {
		// 		variant: "success",
		// 	});
		// 	router.push("/admin/pagina/" + (values.slug === "inici" ? "" : values.slug));
		// 	setTimeout(() => {
		// 		router.reload();
		// 	}, 500);
		// } catch (e) {
		// 	enqueueSnackbar("Error: Alguna cosa no ha anat bé", {
		// 		variant: "error",
		// 	});
		// 	console.log(e);
		// }
		// setLoading(false);
	};

	return (
		<PageAdmin title={entrada?.titol === undefined ? "Nova entrada" : entrada.titol} Icon={CircleOutlined}>
			<form onSubmit={handleSubmit(guardar)}>
				<CustomCard>
					<CustomTextField
						register={register}
						name={"titol"}
						label={"Títol"}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</CustomCard>
				<Grid container spacing={3}>
					<Grid md={8} item>
						<CustomCard title={"Cos"}>
							<CustomTiny name={"cos"} type="text" register={register} setValue={setValue} height={800} getValues={getValues} watch={watch} />
						</CustomCard>
					</Grid>
					<Grid md={4} item>
						<CustomCard title={"Informació"}>
							<CustomTextField
								register={register}
								name={"slug"}
								label={"URL"}
								InputLabelProps={{
									shrink: true,
								}}
								adornment={"/"}
								disabled
							/>
							<CustomTextField
								register={register}
								name={"keywords"}
								label={"Paraules clau"}
								InputLabelProps={{
									shrink: true,
								}}
								mt={3}
							/>
							<CustomSelect register={register} label={"Idioma"} list={idiomes} name={"idioma_id"} control={control} mt={3} defaultValue={1} />
							<CustomSelect
								register={register}
								label={"Categoria"}
								list={categories}
								name={"categoria_id"}
								control={control}
								mt={3}
								defaultValue={Number(entrada?.categoria_id) ?? ""}
							/>
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
	let entrada = [];
	let categories = [];
	let idiomes = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		categories = await getList("categories", session?.user?.token?.accessToken);
		idiomes = await getList("idiomes", session?.user?.token?.accessToken);
		entrada = await getData("entrades", context?.query.slug);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			entrada: entrada ?? [],
			categories: categories,
			idiomes: idiomes,
		},
	};
};
