import { createTheme } from "@mui/material/styles";

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
					},
					paper: {
						boxShadow: "none",
					},
				},
			},
			MuiTableCell: {
				styleOverrides: {
					root: {
						fontSize: 16,
						padding: 20,
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						fontSize: 16,
					},
				},
			},

			MUIDataTableSelectCell: {
				styleOverrides: {
					headerCell: {},
				},
			},
			MuiTablePagination: {
				styleOverrides: {
					selectLabel: {},
					displayedRows: {},
				},
			},
			MuiSelect: {
				styleOverrides: {
					select: {
						fontSize: 16,
					},
				},
			},
		},
	});

export default getMuiTheme;
