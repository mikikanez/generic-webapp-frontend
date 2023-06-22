import CustomButton from "@/components/elements/CustomButton";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { components } from "@/components/custom/components";
import { componentDefault } from "@/core/utils";
import { CustomTab, CustomTabs } from "@/components/elements/CustomTabs";
import { List } from "@mui/icons-material";
import { TabContext, TabPanel } from "@mui/lab";
import { ComponentMiniPreview } from "./ComponentMiniPreview";

export function DialogAddComponent({ open, setOpen, componentsList, componentsPreview, setComponentsPreview }) {
	const [tab, setTab] = useState(1);
	const [componentSel, setComponentSel] = useState("");
	const { enqueueSnackbar } = useSnackbar();

	const crear = async () => {
		const elements = componentDefault(componentSel, componentsPreview.length > 0 ? componentsPreview[componentsPreview.length - 1]?.id + 1 : 1000);
		setComponentsPreview((prev) => [...prev, elements]);
		enqueueSnackbar("Component afegit", {
			variant: "success",
		});
		setOpen(false);
		setTimeout(() => {
			scrollToBottom();
		}, 100);
	};

	const handleChange = (event, newValue) => {
		setTab(newValue);
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
				<TabContext value={tab}>
					<CustomTabs onChange={handleChange} aria-label="alta select">
						{componentsList.map((tab) => (
							<CustomTab
								key={tab.id}
								value={tab.id}
								label={
									<Box
										display="flex"
										alignItems={"center"}
										onDragOver={(event) => {
											handleChange(event, tab.id);
										}}
									>
										<List color="primary" />
										<Typography ml={1} variant="caption">
											{tab.nom}
										</Typography>
									</Box>
								}
							/>
						))}
					</CustomTabs>
					{componentsList?.map((tipus) => (
						<TabPanel key={tipus.id} value={tipus.id} index={0} style={{ padding: 0 }}>
							<Grid spacing={4} container mt={1}>
								{tipus.components?.map((c, index) => {
									const Component = components.filter((com) => c.id === com.id)?.[0]?.component;
									return (
										<Grid item md={3} key={c.id} xs={12}>
											<ComponentMiniPreview
												c={c}
												Component={Component}
												setComponentSel={setComponentSel}
												componentSel={componentSel}
												index={index}
											/>
										</Grid>
									);
								})}
							</Grid>
						</TabPanel>
					))}
				</TabContext>
			</DialogContent>
			<DialogActions>
				<CustomButton onClick={() => setOpen(false)} title="Tancar" fullWidth />
				<CustomButton onClick={crear} title="Afegir" success fullWidth />
			</DialogActions>
		</Dialog>
	);
}
