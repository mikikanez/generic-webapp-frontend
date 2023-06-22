import ComponentWrap from "@/components/custom/components/imatgeText/ComponentWrap";
import { componentDefault } from "@/core/utils";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FitToViewport } from "react-fit-to-viewport";

export const ComponentMiniPreview = ({ setComponentSel, c, componentSel, Component, index }) => {
	const matches = useMediaQuery("(min-width:1260px)");

	return (
		<ComponentItem onClick={() => setComponentSel(c)} className={componentSel.id === c.id ? "active" : ""}>
			<Box display={"flex"} alignItems={"center"}>
				<Typography variant="caption" className="text" fontSize={12} letterSpacing={0} textAlign={"center"} mt={1} mb={2}>
					{c?.id} - {c?.nom}
				</Typography>
			</Box>
			<FitToViewport minZoom={0} maxZoom={0.2} style={{ transformOrigin: "top center" }} width={matches ? 1385 : 1000} height={180}>
				<Box style={{ borderBottomRightRadius: 40, borderBottomLeftRadius: 40 }} overflow={"hidden"}>
					<ComponentWrap
						Component={Component}
						component={componentDefault(c, index)}
						height={900}
						display="flex"
						alignItems="center"
						justifyContent="center"
					/>
				</Box>
			</FitToViewport>
		</ComponentItem>
	);
};

const ComponentItem = styled(Box)(({ theme }) => ({
	borderRadius: 10,
	background: "#f0f0f0",
	paddingTop: 10,
	cursor: "pointer",
	transition: "0.2s",
	textAlign: "center",
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	"&:hover": {
		backgroundColor: "#3f3f3f",
		"& .text": {
			color: "white",
		},
		"& .MuiSvgIcon-root": {
			color: "white",
		},
	},
	"&.active": {
		backgroundColor: "#1f1f1f",
		"& .text": {
			color: "white",
		},
		"& .MuiSvgIcon-root": {
			color: "white",
		},
	},
}));
