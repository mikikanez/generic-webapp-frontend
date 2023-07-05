import CartItem from "@/components/custom/menus/CartItem";
import { Box, Divider, List, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useLocalStorage } from "usehooks-ts";

export default function LlistaCistella({ preu }) {
	const { enqueueSnackbar } = useSnackbar();
	const [cart, setCart] = useLocalStorage("cart", []);

	const removeItem = async (id, element) => {
		const newCart = cart.filter((item) => item.index !== id);
		setCart(newCart);
		enqueueSnackbar("Producto eliminado del carro", {
			variant: "success",
		});
	};

	return (
		<Box>
			<List>
				{cart?.map((item, index) => (
					<div key={index}>
						<CartItem item={item} removeItem={removeItem} />
						{index !== cart.length - 1 && <Divider variant="inset" component="li" />}
					</div>
				))}
			</List>
			<Divider />
			<Box display="flex" justifyContent={"space-between"}>
				<Typography pt={1} pb={1} pl={2} variant="h5">
					Total:
				</Typography>
				<Box textAlign={"right"}>
					<Typography pt={1} pr={2} variant="h3">
						{preu} €
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
