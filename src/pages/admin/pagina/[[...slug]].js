import React, { useEffect, useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { CircleOutlined, Layers } from "@mui/icons-material";
import { getServerSession } from "next-auth";
import CustomCard from "@/components/layout/CustomCard";
import { getData, getList } from "@/lib/API";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomTextField from "@/components/elements/CustomTextField";
import CustomButton from "@/components/elements/CustomButton";
import { useRouter } from "next/router";
import CustomSelect from "@/components/elements/CustomSelect";

export default function PaginesAdmin({ pagina }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [idiomes, setIdiomes] = useState([]);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		setError,
		formState: { errors },
		clearErrors,
		reset,
	} = useForm();

	useEffect(() => {
		reset(pagina);
	}, [pagina, reset]);

	useEffect(() => {
		const obtenir = async () => {
			setLoading(true);
			const data = await getList("idiomes");
			setIdiomes(data);
			setLoading(false);
		};
		open ? obtenir() : reset();
	}, [open]);

	const guardar = async (values) => {
		console.log(values);
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
						<CustomCard title="Editor">
							{pagina.component_pagina.map((component) => (
								<Typography key={component.id}>{toString(component.component)}</Typography>
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
							<CustomSelect register={register} label={"Idioma"} list={idiomes} name={"idioma_id"} defaultValue={"1"} mt={3} />

							<Grid spacing={2} container mt={3}>
								<Grid item md={6}>
									<CustomButton title={"Veure pàgina"} fullWidth href={"/" + pagina.slug} target="_blank" />
								</Grid>
								<Grid item md={6}>
									<CustomButton title={"Guardar"} success fullWidth loading={loading} />
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
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		pagina = await getData("pagines", context?.query.slug ?? "-");
		console.log(pagina);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			session: session,
			pagina: pagina,
		},
	};
};
