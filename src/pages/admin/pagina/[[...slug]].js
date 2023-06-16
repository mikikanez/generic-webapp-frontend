import React, { useEffect, useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { CircleOutlined, Layers } from "@mui/icons-material";
import { getServerSession } from "next-auth";
import CustomCard from "@/components/layout/CustomCard";
import { getData, getList, updateElement } from "@/lib/API";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomTextField from "@/components/elements/CustomTextField";
import CustomButton from "@/components/elements/CustomButton";
import { useRouter } from "next/router";
import CustomSelect from "@/components/elements/CustomSelect";
import { existSlug, slugify } from "@/core/utils";
import { useSnackbar } from "notistack";
import { useAuth } from "@/core/hooks/useAuth";
import { components } from "@/components/custom/components";
import ComponentChooser from "@/views/pagines/ComponentChooser";

export default function PaginesAdmin({ pagina, components }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [idiomes, setIdiomes] = useState([]);
	const { enqueueSnackbar } = useSnackbar();
	const { user } = useAuth();

	console.log(components);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		setError,
		control,
		formState: { errors },
		clearErrors,
		reset,
	} = useForm({ shouldUnregister: false, defaultValues: pagina });

	useEffect(() => {
		reset(pagina);
		setValue("idioma_id", Number(pagina.idioma_id ?? ""));
		setValue("menu", Number(pagina.menu) ?? 0);
		console.log(pagina);
	}, [pagina, reset, setValue]);

	useEffect(() => {
		const obtenir = async () => {
			setLoading(true);
			const data = await getList("idiomes");

			setIdiomes(data);
			setLoading(false);
		};
		open ? obtenir() : reset();
	}, [open]);

	useEffect(() => {
		const slug = slugify(watch("titol") ?? "");
		setValue("slug", slug);
	}, [watch("titol")]);

	const guardar = async (values) => {
		console.log(values);
		// setLoading(true);
		// try {
		// 	const { message } = await updateElement("pagines", pagina.id, values, user.token.accessToken);
		// 	enqueueSnackbar(message, {
		// 		variant: "success",
		// 	});
		// 	router.push("/admin/pagina/" + values.slug);
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
		<PageAdmin title={"Pàgina - " + pagina.titol} Icon={CircleOutlined}>
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
					<Grid item md={8}>
						<CustomCard title="Editor" sticky button={() => alert("hols")}>
							{pagina.component.map((com) => (
								<ComponentChooser key={com.id} com={com} />
							))}
						</CustomCard>
					</Grid>
					<Grid item md={4}>
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
							<CustomSelect
								register={register}
								label={"Idioma"}
								list={idiomes}
								name={"idioma_id"}
								control={control}
								mt={3}
								defaultValue={Number(pagina?.idioma_id) ?? "0"}
							/>
							<CustomSelect
								register={register}
								label={"Ubicació de la pàgina"}
								list={[
									{ id: 0, nom: "Altres" },
									{ id: 1, nom: "Menú principal" },
									{ id: 2, nom: "Peu de pàgina" },
								]}
								InputLabelProps={{
									shrink: true,
								}}
								defaultValue={Number(pagina?.menu) ?? 0}
								name={"menu"}
								control={control}
								mt={3}
							/>

							<Grid spacing={2} container mt={3}>
								<Grid item md={6}>
									<CustomButton title={"Veure pàgina"} fullWidth href={"/" + pagina.slug} target="_blank" />
								</Grid>
								<Grid item md={6}>
									<CustomButton type="submit" title={"Guardar"} success fullWidth loading={loading} />
								</Grid>
							</Grid>
						</CustomCard>
						<CustomCard>
							<CustomButton title={"Duplicar pàgina"} fullWidth href={"/" + pagina.slug} target="_blank" loading={loading} />
						</CustomCard>
					</Grid>
				</Grid>
			</form>
		</PageAdmin>
	);
}

export const getServerSideProps = async (context) => {
	let session = [];
	let pagina = "";
	let components = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		pagina = await getData("pagines", context?.query.slug ?? "-");
		components = await getList("components", session?.user?.token?.accessToken);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			pagina: pagina,
			components: components,
		},
	};
};
