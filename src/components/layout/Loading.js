import { Box, CircularProgress, Fade } from "@mui/material";
import Image from "next/image";

export default function LoadingPublic({ loading, children }) {
	return (
		<Box>
			{!loading ? (
				<Fade in={!loading} timeout={{ enter: 600, exit: 450 }}>
					<div>{children}</div>
				</Fade>
			) : (
				<Box style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 0, height: "90vh", backgroundColor: "#5a5a5a" }}>
					<Fade in={loading}>
						<Box display="flex" flexDirection={"column"} justifyContent="center" alignItems={"center"}>
							<Image src={"/logo.svg"} width={290} height={80} alt="Portal Attack" />
							<Box my={2} />
							<CircularProgress color="secondary" />
						</Box>
					</Fade>
				</Box>
			)}
		</Box>
	);
}
