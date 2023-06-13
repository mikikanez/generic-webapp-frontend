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
		...opcions?.pagines?.map((item) => {
			return { title: item.titol, to: "/" + item.slug };
		}),
	];

	return (
		<Toolbar
			style={{
				transition: "0.2s",
				borderBottom: "1px solid white",
				justifyContent: "center",
				backgroundColor: theme.palette.background.main,
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
						marginTop: scrollY > 200 ? -10 : 0,
					}}
					onClick={() => router.push("/")}
				>
					{opcions?.logo ? (
						<Box height={100} width={100}>
							<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} fill alt="G" style={{ objectFit: "contain" }} />
						</Box>
					) : (
						<Typography variant="h1" mb={2} color={isDark(opcions?.primary) ? "black" : "white"}>
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
