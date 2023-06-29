import { isDark } from "@/core/createTheme";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Boto3 = styled(Button)(({ theme }) => ({
	boxShadow: "none",
	textTransform: "none",
	borderRadius: 0,
	lineHeight: 1,
	borderRadius: 50,
	"&:hover": {
		backgroundColor: theme.palette.secondary.main,
		boxShadow: "none",
		"& .MuiTypography-root": {
			color: isDark(theme.palette.secondary.main) ? "white" : "black",
		},
	},
	"&:active": {
		boxShadow: "none",
		backgroundColor: theme.palette.background.main,
		borderColor: theme.palette.background.main,
	},
	"&:focus": {
		boxShadow: "0 0 0 0.2rem " + theme.palette.background.main,
	},
}));
