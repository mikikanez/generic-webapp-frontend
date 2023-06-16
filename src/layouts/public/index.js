import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import TopBarPublic from "./TopBarPublic";
import Footer from "./Footer";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
	root: {
		overflow: "hidden",
		width: "100%",
	},
	wrapper: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
		height: "100%",
	},
	contentContainer: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
		height: "100%",
	},
	content: {
		flex: "1 1 auto",
		height: "100%",
		overflow: "auto",
	},
}));

const PublicLayout = ({ children }) => {
	const classes = useStyles();
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);
	const theme = useTheme();

	return (
		<div className={classes.root}>
			<TopBarPublic onMobileNavOpen={() => setMobileNavOpen(true)} />
			<div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<div className={classes.content} style={{ backgroundColor: theme.palette.background.main }}>
						{children}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default PublicLayout;
