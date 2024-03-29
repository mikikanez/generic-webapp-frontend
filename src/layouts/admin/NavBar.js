import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useOpcions } from "@/context/OpcionsContext";
import { Typography } from "@mui/material";
import PaginesItems from "./PaginesItems";
import CustomButton from "@/components/elements/CustomButton";
import { DialogAddPagina } from "@/views/pagines/DialogAddPagina";

const BoxMenu = styled(Box)(({ theme }) => ({
	backgroundColor: "#f5f5f5",

	textAlign: "center",
	height: "100%",
	display: "flex",
	flexDirection: "column",
}));

const DrawerCustom = styled(Drawer)(({ theme }) => ({
	"& .MuiPaper-root": {
		backgroundColor: "#f5f5f5",
		width: 256,
		height: "calc(100%)",
		border: 0 + " !important",
	},
}));

const NavBar = ({ onMobileClose, openMobile }) => {
	const [open, setOpen] = useState();
	const opcions = useOpcions();

	const content = (
		<BoxMenu>
			<Box pt={2}>
				<Link href="/">
					{/* {opcions?.logo ? (
						<Image src={process.env.NEXT_PUBLIC_STORAGE + opcions?.logo} height={50} width={240} alt="Logo" style={{ objectFit: "contain" }} />
					) : ( */}
					<Typography variant="h4">
						{opcions?.titol} <br /> <small>ADMIN</small>
					</Typography>
					{/* )} */}
				</Link>
				<Box mt={2} />

				<PaginesItems onMobileClose={onMobileClose} />
			</Box>
			<Box flexGrow={1} />
			<Box p={2}>
				<CustomButton title={"Nova pàgina"} fullWidth onClick={() => setOpen(true)} />
			</Box>
			<DialogAddPagina open={open} setOpen={setOpen} />
		</BoxMenu>
	);

	return (
		<div>
			<Hidden lgUp>
				<DrawerCustom anchor="left" onClose={onMobileClose} open={openMobile} variant="temporary">
					{content}
				</DrawerCustom>
			</Hidden>
			<Hidden lgDown>
				<DrawerCustom anchor="left" open variant="persistent">
					{content}
				</DrawerCustom>
			</Hidden>
		</div>
	);
};

export default NavBar;
