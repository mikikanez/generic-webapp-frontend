import * as React from "react";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import { TabList } from "@mui/lab";

const CustomTabs = styled((props) => (
	<TabList
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
	/>
))(({ theme }) => ({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
		height: "100%",
		zIndex: 0,
	},
	"& .MuiTabs-indicatorSpan": {
		width: "100%",
		height: "100%",
		backgroundColor: theme.palette.primary.main,
		borderRadius: 10,
	},
}));

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
	textTransform: "none",
	fontSize: 15,
	marginRight: 10,
	color: "rgba(255, 255, 255, 0.7)",
	zIndex: 100,
	"& .MuiSvgIcon-root": {
		fill: theme.palette.primary.main,
	},
	"& .MuiTypography-root": {
		transition: "0.4s",
	},
	"& .MuiSvgIcon-root": {
		transition: "0.4s",
	},
	"&.Mui-selected": {
		"& .MuiTypography-root": {
			color: "#fff",
		},
		"& .MuiSvgIcon-root": {
			color: "#fff",
		},
	},
	"&.Mui-focusVisible": {
		backgroundColor: theme.palette.primary.main,
	},
}));

export { CustomTab, CustomTabs };
