import { useRouter } from "next/router";

const TableOptionsCategories = (editCat) => {
	// const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();

	const options = {
		rowsPerPage: 20,
		enableNestedDataAccess: ".",
		filterType: "checkbox",
		selectableRows: "none",
		draggableColumns: { enabled: true },
		print: "false",
		onRowClick: (row) => {
			editCat(row[0].slice(1));
		},
		textLabels: {
			body: {
				noMatch: "No hi han entrades",
				toolTip: "Ordenar",
				columnHeaderTooltip: (column) => `${"Ordenat per"} ${column.label}`,
			},
			pagination: {
				next: "Següent pàgina",
				previous: "Pàgina anterior",
				rowsPerPage: "Files per pàgina:",
				displayRows: "de", // 1-10 of 30
			},
			toolbar: {
				search: "Cercar",
				downloadCsv: "Descarregar CSV",
				print: "Imprimir",
				viewColumns: "Veure columnes",
				filterTable: "Filtrar taula",
			},
			filter: {
				title: "FILTRES",
				reset: "resetejar",
				all: "Tots",
			},
			viewColumns: {
				title: "Mostrar columnes",
			},
			selectedRows: {
				text: "Fila/es eliminades",
				delete: "Eliminar",
			},
		},
	};
	return options;
};

export default TableOptionsCategories;
