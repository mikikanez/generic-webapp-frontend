import { ShoppingCart } from "@mui/icons-material";
import { Badge, Divider, IconButton, List, Popover, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useSnackbar } from "notistack";
import CartItem from "./CartItem";
import CustomButtonPublic from "@/components/elements/CustomButtonPublic";
import { useOpcions } from "@/context/OpcionsContext";
import { useRouter } from "next/router";

export default function CistellaMenu() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [preu, setPreu] = useState(0);
	const [cart, setCart] = useLocalStorage("cart", []);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const opcions = useOpcions();
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		let p = 0;
		cart?.map((item) => {
			p = item.producte.preu * item.quantitat + p;
		});
		setPreu(p);
	}, [cart]);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const handleClose = () => {
		setAnchorEl(null);
	};

	const removeItem = async (id, element) => {
		setLoading(true);
		const newCart = cart.filter((item) => item.index !== id);
		setCart(newCart);
		enqueueSnackbar("Producto eliminado del carro", {
			variant: "success",
		});
		setLoading(false);
	};

	return (
		opcions.botiga === "1" && (
			<Box pl={3}>
				<IconButton onClick={handleClick}>
					<Badge badgeContent={cart.length} color="secondary">
						<ShoppingCart color="info" />
					</Badge>
				</IconButton>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					style={{ zIndex: 10000 }}
				>
					<Typography pt={1} pb={1} pl={2}>
						Carrito
					</Typography>
					<Divider />
					{cart?.length === 0 ? (
						<Typography p={2}>No hay productos en el carrito</Typography>
					) : (
						<List>
							{cart?.map((item, index) => (
								<div key={index}>
									<CartItem item={item} removeItem={removeItem} />
									{index !== cart.length - 1 && <Divider variant="inset" component="li" />}
								</div>
							))}
						</List>
					)}
					<Divider />
					<Box display="flex" justifyContent={"space-between"}>
						<Typography pt={1} pb={1} pl={2}>
							Total:
						</Typography>
						<Box textAlign={"right"}>
							<Typography pt={1} pr={2} variant="h3">
								{Math.round(preu * 100) / 100} €
							</Typography>
						</Box>
					</Box>
					<Box p={2}>
						<CustomButtonPublic
							title="Pagar"
							fullWidth
							small
							onClick={() => {
								router.push("checkout");
								handleClose();
							}}
							disabled={cart?.length === 0}
							loading={loading}
						/>
					</Box>
				</Popover>
			</Box>
		)
	);
}
