import * as React from "react";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import { TabList } from "@mui/lab";

const CustomTabsVertical = styled((props) => (
	<TabList
		allowScrollButtonsMobile
		visibleScrollbar
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
	/>
))(({ theme }) => ({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
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

const CustomTabVertical = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
	textTransform: "none",
	fontSize: 15,
	marginRight: 10,
	color: "rgba(255, 255, 255, 0.7)",
	zIndex: 100,
	backgroundColor: "#0000000F",
	marginTop: 10,
	marginBottom: 10,
	borderRadius: 10,
	transition: "0.2s",
	alignItems: "flex-start",
	"& .MuiSvgIcon-root": {
		fill: theme.palette.primary.main,
		transition: "0.4s",
	},
	"& .MuiTypography-root": {
		color: theme.palette.primary.main,
		transition: "0.4s",
	},

	"&.Mui-selected": {
		backgroundColor: theme.palette.primary.main,

		"& .MuiSvgIcon-root": {
			fill: "white",
			color: "white",
		},
		"& .MuiTypography-root": {
			color: "white",
		},
	},
	"&.Mui-focusVisible": {
		backgroundColor: theme.palette.primary.main,
	},
}));

export { CustomTabVertical, CustomTabsVertical };
