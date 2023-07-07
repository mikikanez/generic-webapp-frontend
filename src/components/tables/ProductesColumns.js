import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import moment from "moment";
import { useRouter } from "next/router";

const ProductesColumns = (maquines) => {
	const router = useRouter();

	const columns = [
		{
			name: "slug",
			label: "URL",
			options: {
				filter: false,
				sort: true,
				display: false,
				sortOrder: "desc",
			},
		},
		{
			name: "imatge",
			label: "Imatge",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => <Avatar src={process.env.NEXT_PUBLIC_STORAGE + value} />,
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
			name: "stock",
			label: "Stock",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => (value ? value + " u" : "-"),
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
			name: "categories",
			label: "Categories",
			options: {
				filter: false,
				sort: true,
				sortOrder: "desc",
				customBodyRender: (value) => value.map((item) => <Chip key={item?.id} label={item?.nom} style={{ marginRight: 5 }} />),
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

export default ProductesColumns;
