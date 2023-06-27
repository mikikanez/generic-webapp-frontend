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
import { CustomTabVertical, CustomTabsVertical } from "@/components/elements/CustomTabsVertical";

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
			fullScreen
		>
			<DialogTitle>Afegir component</DialogTitle>
			<DialogContent>
				<TabContext value={tab}>
					<Grid spacing={0} container>
						<Grid item md={2} pr={2}>
							<CustomTabsVertical onChange={handleChange} aria-label="alta select" orientation="vertical">
								{componentsList.map((tab) => (
									<CustomTabVertical
										key={tab.id}
										value={tab.id}
										label={
											<Box
												display="flex"
												alignItems={"center"}
												justifyContent={"flex-start"}
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
							</CustomTabsVertical>
						</Grid>
						<Grid item md={10}>
							{componentsList?.map((tipus) => (
								<TabPanel key={tipus.id} value={tipus.id} index={0} style={{ padding: 0 }}>
									<Grid spacing={2} container mt={1}>
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
						</Grid>
					</Grid>
				</TabContext>
			</DialogContent>
			<DialogActions>
				<CustomButton onClick={() => setOpen(false)} title="Tancar" fullWidth />
				<CustomButton onClick={crear} title="Afegir" success fullWidth disabled={!componentSel} />
			</DialogActions>
		</Dialog>
	);
}
