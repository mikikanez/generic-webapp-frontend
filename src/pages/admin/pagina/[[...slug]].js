import React, { useEffect, useState } from "react";
import PageAdmin from "@/components/layout/PageAdmin";
import { CircleOutlined, Delete, Edit } from "@mui/icons-material";
import { getServerSession } from "next-auth";
import CustomCard from "@/components/layout/CustomCard";
import { getData, getList, updateElement } from "@/lib/API";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Box, Chip, Fab, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomTextField from "@/components/elements/CustomTextField";
import CustomButton from "@/components/elements/CustomButton";
import { useRouter } from "next/router";
import CustomSelect from "@/components/elements/CustomSelect";
import { slugify } from "@/core/utils";
import { useSnackbar } from "notistack";
import { useAuth } from "@/core/hooks/useAuth";
import ComponentChooser from "@/views/pagines/ComponentChooser";
import { DialogAddComponent } from "@/views/pagines/DialogAddComponent";
import { DialogEditComponent } from "@/views/pagines/DialogEditComponent";
import { styled } from "@mui/material/styles";
import { DialogEliminar } from "@/components/elements/DialogEliminar";
import { constructFormPagina } from "@/lib/ConstructForm";
import OrdreComponents from "@/views/pagines/OrdreComponents";
import Thumb from "@/components/elements/Thumb";
import InputImage from "@/components/elements/InputImage";

export default function PaginesAdmin({ pagina, components }) {
	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [openEliminar, setOpenEliminar] = useState(false);
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [idiomes, setIdiomes] = useState([]);
	const [componentsPreview, setComponentsPreview] = useState([]);
	const [componentSel, setComponentSel] = useState();
	const { enqueueSnackbar } = useSnackbar();
	const { user } = useAuth();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		setError,
		control,
		formState: { errors },
		trigger,
		reset,
	} = useForm({ shouldUnregister: false, defaultValues: pagina });

	useEffect(() => {
		reset(pagina);
		setValue("idioma_id", Number(pagina.idioma_id ?? ""));
		setValue("menu", Number(pagina.menu) ?? 0);
		setComponentsPreview(pagina.components);
	}, [pagina, reset, setValue]);

	useEffect(() => {
		const obtenir = async () => {
			setLoading(true);
			const data = await getList("idiomes");
			setIdiomes(data);
			setLoading(false);
		};
		obtenir();
	}, [open]);

	useEffect(() => {
		const slug = slugify(watch("titol") ?? "");
		setValue("slug", slug);
	}, [watch("titol")]);

	const deleteComponent = (id) => {
		setComponentsPreview((prev) => prev.filter((i) => i.id !== id));
		setOpenEliminar(false);
	};

	const guardar = async (values) => {
		values.components = componentsPreview;

		setLoading(true);
		try {
			const { message } = await updateElement("pagines", pagina.id, constructFormPagina(values), user.token.accessToken);
			enqueueSnackbar(message, {
				variant: "success",
			});
			router.push("/admin/pagina/" + values.slug);
			setTimeout(() => {
				router.reload();
			}, 500);
		} catch (e) {
			enqueueSnackbar("Error: Alguna cosa no ha anat bé", {
				variant: "error",
			});
			console.log(e);
		}
		setLoading(false);
	};
	console.log(componentsPreview);

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

				<Grid container spacing={3} direction={{ xs: "column-reverse", xl: "row" }}>
					<Grid item lg={12} xl={8} xs={12}>
						<CustomCard title="Editor" sticky button onClick={() => setOpen(true)} style={{ overflow: "hidden" }}>
							{componentsPreview?.map((com) => (
								<Box key={com.id} style={{ position: "relative", overflow: "hidden" }}>
									<Overlay>
										<Chip label={com?.component?.id + " - " + com?.component?.nom} />
										<Box mt={2}>
											<Fab
												onClick={() => {
													setComponentSel(com);
													setOpenEdit(true);
												}}
												style={{ marginRight: 10 }}
											>
												<Edit />
											</Fab>
											<Fab
												onClick={() => {
													setComponentSel(com);
													setOpenEliminar(true);
												}}
												color="danger"
											>
												<Delete />
											</Fab>
										</Box>
									</Overlay>
									{com && <ComponentChooser com={com} preview />}
								</Box>
							))}
						</CustomCard>
					</Grid>
					<Grid item lg={6} xl={4} md={6} xs={12}>
						<Grid container spacing={2}>
							<Grid item lg={6} xl={12} md={6} xs={12}>
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
									{pagina.slug !== "" && (
										<Box style={{ border: "1px solid #cacaca", borderRadius: 5 }} my={2} p={2}>
											<Typography>Imatge destacada</Typography>
											<InputImage name={"imatge"} register={register} trigger={trigger} text={"Imatge destacada"} />
											<Thumb file={watch("imatge")} />
										</Box>
									)}

									<Grid spacing={2} container mt={3}>
										<Grid item md={4}>
											<CustomButton title={"Eliminar pàgina"} fullWidth danger />
										</Grid>
										<Grid item md={4}>
											<CustomButton title={"Veure pàgina"} fullWidth href={"/" + pagina.slug} target="_blank" />
										</Grid>
										<Grid item md={4}>
											<CustomButton title={"Duplicar pàgina"} fullWidth href={"/" + pagina.slug} target="_blank" loading={loading} />
										</Grid>
										<Grid item md={12}>
											<CustomButton type="submit" title={"Guardar"} success fullWidth loading={loading} />
										</Grid>
									</Grid>
								</CustomCard>
							</Grid>
							<Grid item lg={6} xl={12} md={6} xs={12}>
								<CustomCard title={"Ordre components"}>
									<OrdreComponents components={componentsPreview} setComponentsPreview={setComponentsPreview} />
								</CustomCard>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<DialogAddComponent
					open={open}
					setOpen={setOpen}
					componentsList={components}
					componentsPreview={componentsPreview}
					setComponentsPreview={setComponentsPreview}
				/>
				<DialogEditComponent
					open={openEdit}
					setOpen={setOpenEdit}
					componentSel={componentSel}
					setComponentsPreview={setComponentsPreview}
					componentsPreview={componentsPreview}
				/>
				<DialogEliminar open={openEliminar} setOpen={setOpenEliminar} element={"component"} onClick={() => deleteComponent(componentSel.id)} />
			</form>
		</PageAdmin>
	);
}

const Overlay = styled(Box)(({ theme }) => ({
	position: "absolute",
	width: "100%",
	height: "100%",
	zIndex: 500,
	transition: "0.2s",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#FFFFFF40",
	display: "flex",
	flexDirection: "column",
	opacity: 0,
	"&:hover": {
		opacity: 1,
	},
}));

export const getServerSideProps = async (context) => {
	let session = [];
	let pagina = "";
	let components = [];
	try {
		session = await getServerSession(context.req, context.res, authOptions);
		pagina = await getData("pagines", context?.query.slug ?? "-");
		components = await getList("tipus", session?.user?.token?.accessToken);
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
