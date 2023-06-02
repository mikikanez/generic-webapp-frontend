import { Image } from "@mui/icons-material";
import { Image as ImageIcon } from "@mui/icons-material/Image";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

const Thumb = (props) => {
	const [thumb, setThumb] = useState();

	useEffect(() => {
		if (props?.file?.[0]?.name) {
			let reader = new FileReader();

			reader.onloadend = () => {
				setThumb(reader.result);
			};
			reader?.readAsDataURL(props.file?.[0]);
		} else {
			if (props.file?.length === 0) {
				setThumb(<ImageIcon />);
			} else {
				setThumb(process.env.NEXT_PUBLIC_STORAGE + props.file);
			}
		}
	}, [props?.file]);

	return (
		<Avatar
			variant="rounded"
			src={thumb}
			alt={props?.file?.name}
			sx={{
				width: "100%",
				height: 300,
			}}
		>
			<Image style={{ fontSize: 150 }} />
		</Avatar>
	);
};

export default Thumb;
