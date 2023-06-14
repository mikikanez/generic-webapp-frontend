import PrecisionManufacturing from "@mui/icons-material/PrecisionManufacturing";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import moment from "moment";
import { useRouter } from "next/router";

const PaginesColumns = (maquines) => {
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
			name: "titol",
			label: "Nom",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
			},
		},
		{
			name: "keywords",
			label: "Paraules clau",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
			},
		},
		{
			name: "idioma",
			label: "Idioma",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => value.nom,
			},
		},

		{
			name: "menu",
			label: "Ubicació",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => (value === 1 ? "Menú principal" : value === 2 ? "Peu de pàgina" : ""),
			},
		},
		{
			name: "created_at",
			label: "Data creació",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => moment(value).format("DD/MM/YYYY HH:mm"),
			},
		},
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

export default PaginesColumns;
