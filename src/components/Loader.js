import { Box, CircularProgress } from "@mui/material";
import styles from "@/styles/layout.module.css";

const Loader = () => {
	return (
		<div className={styles.wrapper_loader}>
			<Box display="flex" flexDirection={"column"} justifyContent="center" alignItems={"center"}>
				<Box my={2} />
				<CircularProgress color="secondary" />
			</Box>
		</div>
	);
};

export default Loader;
