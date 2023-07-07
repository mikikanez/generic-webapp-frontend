import CustomButton from "@/components/elements/CustomButton";
import CustomSelect from "@/components/elements/CustomSelect";
import CustomTextField from "@/components/elements/CustomTextField";
import { useAuth } from "@/core/hooks/useAuth";
import { slugify } from "@/core/utils";
import { addElement, getData, getList, updateElement } from "@/lib/API";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function DialogAddCategoriaProducte({ open, setOpen, cat, setCat }) {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		setError,
		formState: { errors },
		clearErrors,
		reset,
		control,
	} = useForm({ defaultValues: { idioma_id: 1 } });
	const [idiomes, setIdiomes] = useState([]);
	const [loading, setLoading] = useState(false);
	const { user } = useAuth();
	const router = useRouter();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		cat && reset(cat);
		const obtenir = async () => {
			setLoading(true);
			const data = await getList("idiomes");
			setIdiomes(data);
			setLoading(false);
		};
		open ? obtenir() : reset();
	}, [open]);

	useEffect(() => {
		watch("nom") && exist();
	}, [watch("nom")]);

	const exist = async () => {
		const slug = slugify(watch("nom") ?? "");
		setValue("slug", slug);
		let pagina;
		if (slug.length > 3) {
			pagina = cat ? null : await getData("categoriesProducteExist", slug);
			if (pagina) {
				setError("slug", { message: "Ja existeix una pàgina amb aquesta URL" });
				return true;
			} else {
				clearErrors("slug");
				return false;
			}
		}
	};

	const tancar = () => {
		setOpen(false);
		setCat();
	};

	const crear = async (values) => {
		console.log(values);
		const slugOcupat = cat ? false : await exist();
		if (!slugOcupat) {
			console.log(values);
			setLoading(true);
			try {
				let result = "";
				cat
					? (result = await updateElement("categoriesProducte", cat?.id, values, user.token.accessToken))
					: (result = await addElement("categoriesProducte", values, user.token.accessToken));

				enqueueSnackbar(result?.message, {
					variant: "success",
				});
				router.reload();
			} catch (e) {
				enqueueSnackbar("Error: Alguna cosa no ha anat bé", {
					variant: "error",
				});
				console.log(e);
			}
			setLoading(false);
		} else {
			console.log("error");
		}
	};

	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			disableScrollLock
			maxWidth="lg"
		>
			<form onSubmit={handleSubmit(crear)}>
				<DialogTitle>{cat ? "Editar" : "Nova"} categoria</DialogTitle>
				<DialogContent>
					<Grid spacing={3} container mt={1}>
						<Grid item md={6}>
							<CustomTextField register={register} name={"nom"} label={"Nom"} />
						</Grid>
						<Grid item md={6}>
							<CustomTextField
								register={register}
								name={"slug"}
								label={"URL"}
								disabled
								errors={errors.slug}
								InputLabelProps={{
									shrink: true,
								}}
								adornment="/"
							/>
						</Grid>
						<Grid item md={6}>
							<CustomSelect register={register} label={"Idioma"} list={idiomes} name={"idioma_id"} defaultValue={1} control={control} />
						</Grid>
						<Grid item md={6}>
							<CustomTextField register={register} name={"keywords"} label={"Paraules clau"} />
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<CustomButton onClick={tancar} title="Tancar" fullWidth />
					<CustomButton type="submit" title={cat ? "Guardar" : "Crear"} success fullWidth loading={loading} />
				</DialogActions>
			</form>
		</Dialog>
	);
}
