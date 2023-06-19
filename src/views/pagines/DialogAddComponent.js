import CustomButton from "@/components/elements/CustomButton";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { components } from "@/components/custom/components";

export function DialogAddComponent({ open, setOpen, componentsList, componentsPreview, setComponentsPreview }) {
	const [componentSel, setComponentSel] = useState("");
	const { enqueueSnackbar } = useSnackbar();

	const crear = async () => {
		// console.log(componentsPreviewcomponentsPreview.length - 1);
		const elements = {
			id: componentsPreview.length > 0 ? componentsPreview[componentsPreview.length - 1]?.id + 1 : 1000,
			component_id: componentSel.id,
			dark: 0,
			component_pagina_element: componentSel.elements.map((elementSel) => {
				return {
					id: elementSel.id,
					element: elementSel,
					valor:
						elementSel.nom === "imatge" ? "exemple.jpg" : elementSel.nom === "boto" ? '{"titol": "Text botó", "extern": 0, "link": "/"}' : "Text",
				};
			}),
		};
		setComponentsPreview((prev) => [...prev, elements]);
		enqueueSnackbar("Component afegit", {
			variant: "success",
		});
		setOpen(false);
		setTimeout(() => {
			scrollToBottom();
		}, 100);
	};

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
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
			<DialogTitle>Afegir component</DialogTitle>
			<DialogContent>
				<Grid spacing={2} container mt={1}>
					{componentsList?.map((c, i) => {
						const Icon = components.filter((com) => c.id === com.id)[0].icon;
						return (
							<Grid item md={3} key={c.id}>
								<ComponentItem onClick={() => setComponentSel(c)} className={componentSel.id === c.id ? "active" : ""}>
									<Icon />
									<Typography variant="caption" fontSize={12} letterSpacing={0} textAlign={"center"} ml={1}>
										{c?.nom}
									</Typography>
								</ComponentItem>
							</Grid>
						);
					})}
				</Grid>
			</DialogContent>
			<DialogActions>
				<CustomButton onClick={() => setOpen(false)} title="Tancar" fullWidth />
				<CustomButton onClick={crear} title="Afegir" success fullWidth />
			</DialogActions>
		</Dialog>
	);
}

const ComponentItem = styled(Box)(({ theme }) => ({
	borderRadius: 10,
	background: "#f0f0f0",
	padding: 10,
	cursor: "pointer",
	transition: "0.2s",
	textAlign: "center",
	display: "flex",
	alignItems: "center",
	"&:hover": {
		transform: "scale(1.05)",
	},
	"&.active": {
		backgroundColor: "#2f2f2f",
		"& .MuiTypography-root": {
			color: "white",
		},
		"& .MuiSvgIcon-root": {
			color: "white",
		},
	},
}));
