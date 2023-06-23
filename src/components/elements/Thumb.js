import { Image as ImageIcon } from "@mui/icons-material/Image";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
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
		<Box borderRadius={2} p={1} display={"flex"} justifyContent={"center"} backgroundColor="#f0f0f0">
			<Image
				variant="rounded"
				src={thumb}
				alt={props?.file?.name}
				width={props.small ? 50 : 250}
				height={props.small ? 50 : 250}
				style={{ objectFit: "contain" }}
			/>
		</Box>
	);
};

export default Thumb;
