import { useRouter } from "next/router";

const CategoriesColumns = (maquines) => {
	const router = useRouter();

	const columns = [
		{
			name: "slug",
			label: "URL",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => "/" + value,
			},
		},
		{
			name: "nom",
			label: "Nom",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
			},
		},
		// {
		// 	name: "idioma",
		// 	label: "Idioma",
		// 	options: {
		// 		filter: false,
		// 		sort: true,
		// 		sortOrder: "desc",
		// 		customBodyRender: (value) => value.nom,
		// 	},
		// },

		// {
		// 	name: "id",
		// 	label: "Accions",
		// 	options: {
		// 		filter: false,
		// 		sort: false,
		// 		empty: true,
		// 		customBodyRenderLite: (dataIndex) => {
		// 			return (
		// 				<IconButton onClick={() => router.push(`/admin/pagina/${maquines[dataIndex].slug}`)}>
		// 					<RemoveRedEye />
		// 				</IconButton>
		// 			);
		// 		},
		// 	},
		// },
	];
	return columns;
};

export default CategoriesColumns;
