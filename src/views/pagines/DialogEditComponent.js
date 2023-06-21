import CustomButton from "@/components/elements/CustomButton";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import ComponentChooser from "./ComponentChooser";
import { RenderElement } from "@/components/elements/RenderElement";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import CustomCheckbox from "@/components/elements/CustomCheckbox";
import { constructComponent } from "@/core/utils";

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
		setComponentLive(componentSel);
		reset(componentSel);
		componentSel?.component_pagina_element?.map((element) => setValue(String(element.id), element.valor));
	}, [componentSel]);

	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			const com = constructComponent(componentSel, value);
			console.log(com);
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
					<Box style={{ transform: "scale(0.5)", marginTop: "-15%", height: 800, width: "100%" }}>
						<Box style={{ borderRadius: 20, border: "1px solid", overflow: "hidden" }}>
							{componentLive && <ComponentChooser com={componentLive} />}
						</Box>
					</Box>
					<Grid spacing={2} container mt={1}>
						{componentSel?.component_pagina_element?.map((el) => (
							<Grid item md={el.element.nom === "textarea" ? 12 : 6} key={el.id}>
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
								/>
							</Grid>
						))}
					</Grid>
					<CustomCheckbox control={control} setValue={setValue} label="Mode fosc/alternatiu" name="dark" />
				</DialogContent>
				<DialogActions>
					<CustomButton onClick={() => setOpen(false)} title="Tancar" fullWidth />
					<CustomButton onClick={() => crear()} title="Guardar" success fullWidth />
				</DialogActions>
			</form>
		</Dialog>
	);
}
