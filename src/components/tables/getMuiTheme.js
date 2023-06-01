import { createTheme } from "@mui/material";

const getMuiTheme = () =>
	createTheme({
		components: {
			MUIDataTable: {
				styleOverrides: {
					root: {
						boxShadow: "none",
						borderRadius: 0,
						paddingTop: 20,
						zIndex: 0,
						marginBottom: 80,
						overflow: "hidden",
						position: "relative",
						fontFamily: "Roboto",
					},
					paper: {
						boxShadow: "none",
					},
				},
			},
			MuiTableCell: {
				styleOverrides: {
					root: {
						fontFamily: "Roboto",
						fontSize: 16,
						padding: 5,
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						fontFamily: "Roboto",
						fontSize: 16,
					},
				},
			},

			MUIDataTableSelectCell: {
				styleOverrides: {
					headerCell: {
						fontFamily: "Roboto",
					},
				},
			},
			MuiTablePagination: {
				styleOverrides: {
					selectLabel: {
						fontFamily: "Roboto",
					},
					displayedRows: {
						fontFamily: "Roboto",
					},
				},
			},
			MuiSelect: {
				styleOverrides: {
					select: {
						fontFamily: "Roboto",
						fontSize: 16,
					},
				},
			},
		},
	});

export default getMuiTheme;
