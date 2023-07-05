import { Close } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function CartItem({ item, removeItem }) {
	return (
		<ListItem
			alignItems="flex-start"
			style={{ minWidth: 300 }}
			secondaryAction={
				<IconButton edge="end" aria-label="comments" onClick={() => removeItem(item?.index, item)}>
					<Close />
				</IconButton>
			}
		>
			<ListItemAvatar>
				<Avatar variant="square" src={process.env.NEXT_PUBLIC_STORAGE + item?.producte.imatge} />
			</ListItemAvatar>
			<ListItemText
				primary={
					<Typography>
						{item?.producte.titol} <small style={{ color: "grey" }}>x{item.quantitat}</small>
					</Typography>
				}
				secondary={
					<>
						<Typography>{(Math.round(item?.producte.preu * 100) / 100) * item.quantitat} €</Typography>
					</>
				}
			/>
		</ListItem>
	);
}
