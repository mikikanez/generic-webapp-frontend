import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { red, green, blue, grey } from "@mui/material/colors";

const EstatDesign = styled(Box)(({ id }) => ({
	backgroundColor: id === 1 ? grey[500] : id === 2 ? blue[500] : id === 3 ? green[500] : red[500],
	padding: 10,
	borderRadius: 10,
	display: "inline-flex",
	"& .MuiTypography-root": {
		fontSize: 14,
	},
}));

export const Estat = ({ estat }) => {
	return (
		<EstatDesign id={estat.id}>
			<Typography color="white">{estat.nom}</Typography>
		</EstatDesign>
	);
};
