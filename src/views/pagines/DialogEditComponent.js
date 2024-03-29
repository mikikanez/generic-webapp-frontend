import CustomButton from "@/components/elements/CustomButton";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import ComponentChooser from "./ComponentChooser";
import { RenderElement } from "@/components/elements/RenderElement";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import CustomCheckbox from "@/components/elements/CustomCheckbox";
import { constructComponent } from "@/core/utils";
import { FitToViewport } from "react-fit-to-viewport";

export function DialogEditComponent({ open, setOpen, componentSel, setComponentsPreview, componentsPreview }) {
	const { enqueueSnackbar } = useSnackbar();
	const [componentLive, setComponentLive] = useState(componentSel);

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
	} = useForm({ shouldUnregister: false, defaultValues: componentLive });

	useEffect(() => {
		console.log(componentSel);
		setComponentLive(componentSel);
		reset(componentSel);
		setValue("dark", Number(componentSel?.dark));
		componentSel?.component_pagina_element?.map((element) => setValue(String(element.id), element.valor));
	}, [componentSel]);

	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			const com = constructComponent(componentSel, value);
			setComponentLive(com);
		});
		return () => subscription.unsubscribe();
	}, [watch, componentSel]);

	const crear = async () => {
		setComponentsPreview((prev) =>
			prev.map((item) => {
				if (item.id === componentSel.id) {
					return { ...componentLive };
				}
				return item;
			})
		);
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			disableScrollLock
			maxWidth="lg"
			fullWidth
		>
			<form onSubmit={handleSubmit(crear)}>
				<DialogTitle>Editar component</DialogTitle>
				<DialogContent>
					<FitToViewport minZoom={0} maxZoom={0.4} style={{ transformOrigin: "left top" }} width={2000} height={450}>
						<Box style={{ borderRadius: 20, border: "1px solid", overflow: "hidden" }}>
							{componentLive && <ComponentChooser com={componentLive} height={1000} display="flex" alignItems="center" justifyContent="center" />}
						</Box>
					</FitToViewport>
					<CustomCheckbox control={control} setValue={setValue} label="Mode fosc/alternatiu" name="dark" />
					<Grid spacing={2} container mt={1}>
						{componentSel?.component_pagina_element?.map((el, index) => (
							<Grid item md={el.element.nom === "textarea" || el.element.nom === "maps" || el.element.nom === "galeria" ? 12 : 6} key={el.id}>
								<RenderElement
									defaultValue={el.valor}
									element={el.element}
									name={el.id}
									register={register}
									control={control}
									setValue={setValue}
									watch={watch}
									trigger={trigger}
									getValues={getValues}
									desc={componentSel?.component?.elements?.[index].pivot.descripcio}
								/>
							</Grid>
						))}
					</Grid>
				</DialogContent>
				<DialogActions>
					<CustomButton onClick={() => setOpen(false)} title="Tancar" fullWidth />
					<CustomButton onClick={() => crear()} title="Guardar" success fullWidth />
				</DialogActions>
			</form>
		</Dialog>
	);
}
