import CustomButton from "@/components/elements/CustomButton";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import ComponentChooser from "./ComponentChooser";
import { RenderElement } from "@/components/elements/RenderElement";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import CustomCheckbox from "@/components/elements/CustomCheckbox";

export function DialogEditComponent({ open, setOpen, componentSel, setComponentsPreview, componentsPreview }) {
	const { enqueueSnackbar } = useSnackbar();
	const [componentLive, setComponentLive] = useState(componentSel);

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
	} = useForm({ shouldUnregister: false, defaultValues: componentLive });

	useEffect(() => {
		setComponentLive(componentSel);
		reset(componentSel);
	}, [componentSel]);

	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			const com = {
				id: componentSel?.id,
				component_id: componentSel?.component_id,
				dark: value["dark"],
				component_pagina_element: componentSel?.component_pagina_element?.map((elementSel) => {
					return { id: elementSel?.id, element: elementSel.element, valor: value[elementSel?.id] };
				}),
			};
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
						{/* <Box> */}
						<Box style={{ borderRadius: 20, border: "1px solid", overflow: "hidden" }}>
							{componentLive && <ComponentChooser com={componentLive} />}
						</Box>
					</Box>
					<Grid spacing={2} container mt={1}>
						{componentSel?.component_pagina_element?.map((el) => (
							<Grid item md={6} key={el.id}>
								<RenderElement defaultValue={el.valor} element={el.element} name={el.id} register={register} control={control} />
							</Grid>
						))}
					</Grid>
					<CustomCheckbox control={control} setValue={setValue} label="Mode fosc" name="dark" />
				</DialogContent>
				<DialogActions>
					<CustomButton onClick={() => setOpen(false)} title="Tancar" fullWidth />
					<CustomButton onClick={() => crear()} title="Guardar" success fullWidth />
				</DialogActions>
			</form>
		</Dialog>
	);
}
