import NavBarItem from "@/layouts/public/NavBarItem";
import { Close, Email, Instagram, Phone, Twitter } from "@mui/icons-material";
import { AppBar, Box, Container, Stack, Toolbar, Typography } from "@mui/material";
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
				justifyContent: "center",
				backgroundColor: theme.palette.primary.main,
				flexDirection: "column",
				padding: 0,
			}}
		>
			<Box bgcolor={theme.palette.secondary.main} width={"100%"} px={2}>
				<Container>
					<Box display={"flex"}>
						<Box>
							<Stack direction={"row"} spacing={2} justifyContent={"center"} mt={1}>
								{opcions?.telefon && (
									<a href={"tel:+34" + opcions?.telefon} target={"_blank"} rel="noreferrer">
										<Box display="flex" alignItems={"center"}>
											<Phone fontSize={"10px"} />
											<Typography ml={1} variant={isDark(opcions?.secondary) ? "info" : "primary"} fontSize={14}>
												{opcions?.telefon}
											</Typography>
										</Box>
									</a>
								)}
								{opcions?.email && (
									<a href={"mailto:" + opcions?.email} target={"_blank"} rel="noreferrer">
										<Box display="flex" alignItems={"center"}>
											<Email fontSize={"10px"} />
											<Typography ml={1} variant={isDark(opcions?.secondary) ? "info" : "primary"} fontSize={14}>
												{opcions?.email}
											</Typography>
										</Box>
									</a>
								)}
							</Stack>
						</Box>
						<Box
							style={{
								flex: 1,
								display: "flex",
								justifyContent: "flex-end",
								alignItems: "center",
							}}
						>
							<Stack direction={"row"} spacing={2} justifyContent={"center"} mt={1}>
								{opcions?.instagram && (
									<a href={opcions?.instagram} target={"_blank"} rel="noreferrer">
										<Instagram color={isDark(opcions?.secondary) ? "info" : "primary"} />
									</a>
								)}
								{opcions?.twitter && (
									<a href={opcions?.twitter} target={"_blank"} rel="noreferrer">
										<Twitter color={isDark(opcions?.secondary) ? "info" : "primary"} />
									</a>
								)}
							</Stack>
						</Box>
					</Box>
				</Container>
			</Box>
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
						<Box height={120} width={200}>
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
