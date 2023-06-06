import React, { useState } from "react";
import NavBar from "./NavBar";
import TopBarAdmin from "./TopBarAdmin";
import styles from "@/styles/layout.module.css";

const AdminLayout = ({ children }) => {
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<div
			style={{
				backgroundColor: "#f5f5f5",
			}}
			className={styles.root}
		>
			<TopBarAdmin onMobileNavOpen={() => setMobileNavOpen(true)} />
			<NavBar onMobileClose={() => setMobileNavOpen(false)} openMobile={isMobileNavOpen} />
			<div className={styles.wrapper}>
				<div className={styles.contentContainer}>
					<div className={styles.content}>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
