import React, { useContext } from "react";
import clsx from "clsx";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Input from "@mui/icons-material/Input";
import Menu from "@mui/icons-material/Menu";
import { useSnackbar } from "notistack";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/core/hooks/useAuth";
import { styled } from "@mui/material/styles";
import { useOpcions } from "@/context/OpcionsContext";

const AppBarCustom = styled(AppBar)(({ theme }) => ({
	"& .MuiToolbar-root": {
		backgroundColor: "#f5f5f5",

		[theme.breakpoints.down("sm")]: {
			backgroundColor: "#f5f5f5",
		},
	},
}));

const TopBarAdmin = ({ className, onMobileNavOpen, ...rest }) => {
	const { enqueueSnackbar } = useSnackbar();
	const { user, logout } = useAuth();
	const opcions = useOpcions();

	const logOut = async () => {
		await logout();
		enqueueSnackbar("Sessió tancada", {
			variant: "success",
		});
	};

	return (
		<AppBarCustom elevation={0} {...rest}>
			<Toolbar>
				<Link href="/">
					{/* <Image src={"/logo.svg"} width={140} height={40} alt="Portal Attack" /> */}
					{opcions?.titol} - ADMIN
				</Link>
				<Box flexGrow={1} />
				<Box display="flex" alignItems={"center"} justifyContent="space-between">
					<Hidden mdDown>
						<Typography variant="body1" mr={2}>
							{user?.name}
						</Typography>
					</Hidden>
					<IconButton onClick={() => logOut()}>
						<Input color="secondary" />
					</IconButton>
				</Box>
				<Hidden mdUp>
					<IconButton color="inherit" onClick={() => onMobileNavOpen()}>
						<Menu />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBarCustom>
	);
};

export default TopBarAdmin;
