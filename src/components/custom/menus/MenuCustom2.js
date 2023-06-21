import NavBarItem from "@/layouts/public/NavBarItem";
import { Close, Instagram, Twitter } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { isDark } from "@/core/createTheme";
import { useOpcions } from "@/context/OpcionsContext";

export default function MenuCustom2({ scrollY = 0 }) {
	const theme = useTheme();
	const router = useRouter();
	const opcions = useOpcions();

	const items = [
		...opcions?.pagines
			?.filter((i) => i.menu === 1)
			?.map((item) => {
				return { title: item.titol, to: "/" + item.slug };
			}),
	];

	return (
		<Toolbar
			style={{
				transition: "0.2s",
				borderBottom: "1px solid white",
				justifyContent: "center",
				backgroundColor: theme.palette.primary.main,
			}}
		>
			<Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
				<Box
					style={{
						display: "flex",
						justifyContent: "center",
						cursor: "pointer",
						transition: "0.2s",
						transform: scrollY > 200 ? "scale(0.6)" : "scale(1)",
						marginBottom: scrollY > 200 ? -20 : 0,
						marginTop: scrollY > 200 ? -10 : 10,
					}}
					onClick={() => router.push("/")}
				>
					{opcions?.logo ? (
						<Box height={120} width={150}>
							<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} fill alt="G" style={{ objectFit: "contain" }} />
						</Box>
					) : (
						<Typography variant="h3" color={isDark(opcions?.primary) ? "white" : "black"} my={3}>
							{opcions?.titol}
						</Typography>
					)}
				</Box>
				<Box
					style={{
						display: "flex",
						justifyContent: "center",
					}}
					mb={2}
				>
					{items?.map((item) => (
						<NavBarItem to={item.to} key={item.title} title={item.title} />
					))}
				</Box>
			</Box>
		</Toolbar>
	);
}
