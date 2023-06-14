import Dashboard from "@mui/icons-material/Dashboard";
import Group from "@mui/icons-material/Group";
import { CircleOutlined, Layers, Settings } from "@mui/icons-material";
import { useOpcions } from "@/context/OpcionsContext";
import { Divider, List, Typography } from "@mui/material";
import NavBarItem from "./NavBarItem";

const PaginesItems = ({ onMobileClose }) => {
	const opcions = useOpcions();

	const items = [
		{
			href: "/admin",
			icon: Dashboard,
			title: "Inici",
		},

		// {
		// 	href: "/admin/usuaris",
		// 	icon: Group,
		// 	title: "Usuaris",
		// },
		{
			href: "/admin/personalitzacio",
			icon: Settings,
			title: "Personalització",
		},
		{
			title: "Pàgines",
		},
		{
			href: "/admin/pagines",
			icon: Layers,
			title: "Totes les pàgines",
		},
		{
			title: "Menú principal",
		},
		{
			href: "/admin/pagina",
			icon: CircleOutlined,
			title: "Inici",
		},
		...opcions?.pagines
			?.filter((i) => i.menu === 1)
			?.map((item) => {
				return item.slug && { title: item.titol, href: "/admin/pagina/" + item.slug, icon: CircleOutlined, pagines: true };
			}),
		{
			title: opcions?.pagines?.filter((i) => i.menu === 2).length ? "Peu de pàgina" : "",
		},
		...opcions?.pagines
			?.filter((i) => i.menu === 2)
			?.map((item) => {
				return item.slug && { title: item.titol, href: "/admin/pagina/" + item.slug, icon: CircleOutlined, pagines: true };
			}),
		{
			title: opcions?.pagines?.filter((i) => i.menu === 0).length ? "Altres" : "",
		},
		...opcions?.pagines
			?.filter((i) => i.menu === 0)
			?.map((item) => {
				return item.slug && { title: item.titol, href: "/admin/pagina/" + item.slug, icon: CircleOutlined, pagines: true };
			}),
	];

	return (
		<List>
			{items?.map((item, index) =>
				item.href ? (
					<NavBarItem href={item.href} key={index} title={item.title} pagines={item.pagines} icon={item.icon} onClose={onMobileClose} />
				) : (
					item.title && (
						<Divider
							key={index}
							sx={{
								marginBottom: 2,
								marginTop: 4,
							}}
							textAlign="left"
						>
							<Typography variant="caption" fontSize={13} textTransform={"uppercase"}>
								{item.title}
							</Typography>
						</Divider>
					)
				)
			)}
		</List>
	);
};

export default PaginesItems;
