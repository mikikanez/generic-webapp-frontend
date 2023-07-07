import Chip from "@mui/material/Chip";
import moment from "moment";
import { useRouter } from "next/router";
import { Estat } from "../elements/Estat";
import Check from "@mui/icons-material/Check";
import Remove from "@mui/icons-material/Remove";

const ComandesColumns = (comandes) => {
	const router = useRouter();

	const columns = [
		{
			name: "id",
			label: "ID",
			options: {
				filter: false,
				sort: true,
				display: false,
				sortOrder: "desc",
			},
		},
		{
			name: "comanda_estat",
			label: "Nom",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => <Estat estat={value} />,
			},
		},
		{
			name: "unique_id",
			label: "ID",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => <Chip label={value} />,
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
		{
			name: "id",
			label: "Cognoms",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRenderLite: (dataIndex) => comandes[dataIndex].cognom1 + " " + comandes[dataIndex].cognom2,
			},
		},
		{
			name: "preu",
			label: "Preu",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => value + "€",
			},
		},
		{
			name: "factura",
			label: "Factura",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => (value === 1 ? <Check /> : <Remove />),
			},
		},
		{
			name: "productes",
			label: "Productes",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) =>
					value.map((item) => <Chip key={item?.id} label={item?.titol + " x" + item?.pivot?.quantitat} style={{ marginRight: 5 }} />),
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
		// 				<IconButton onClick={() => router.push(`/admin/pagina/${comandes[dataIndex].slug}`)}>
		// 					<RemoveRedEye />
		// 				</IconButton>
		// 			);
		// 		},
		// 	},
		// },
	];
	return columns;
};

export default ComandesColumns;
