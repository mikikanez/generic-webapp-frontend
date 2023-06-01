const TableOptions = () => {
	// const { enqueueSnackbar } = useSnackbar();

	const options = {
		rowsPerPage: 20,
		enableNestedDataAccess: ".",
		filterType: "checkbox",
		selectableRows: "none",
		// customToolbar: () => <CustomToolbar />,
		// onFilterChange: filterFunc ? filterFunc : () => null,
		// onRowsDelete: (rowsDeleted) => {
		//     rowsDeleted.data.forEach(async (item) => {
		//         let message = await deleteOrder(orders[item.dataIndex].id);
		//         enqueueSnackbar(message, {
		//             variant: 'success',
		//         });
		//         console.log(message);
		//     });
		// },
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

export default TableOptions;
