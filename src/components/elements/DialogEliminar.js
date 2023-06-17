import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

export function DialogEliminar({ element, onClick, setOpen, open }) {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			disableScrollLock
			maxWidth="md"
		>
			<DialogTitle>Eliminar {element}</DialogTitle>
			<DialogContent>
				<Typography>Segur que ho vols eliminar?</Typography>
			</DialogContent>
			<DialogActions>
				<CustomButton onClick={() => setOpen(false)} title="Tancar" fullWidth />
				<CustomButton onClick={onClick} title="Eliminar" danger fullWidth />
			</DialogActions>
		</Dialog>
	);
}
