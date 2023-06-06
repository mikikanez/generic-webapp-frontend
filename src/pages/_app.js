import "@/styles/globals.css";
import "nprogress/nprogress.css";
import { SessionProvider } from "next-auth/react";
import { CircularProgress, CssBaseline, Grow, IconButton, Typography } from "@mui/material";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import NProgress from "nprogress";
import { SnackbarProvider } from "notistack";
import Close from "@mui/icons-material/Close";
// import theme from "@/styles/theme";
import AdminLayout from "@/layouts/admin";
import PublicLayout from "@/layouts/public";
import createEmotionCache from "@/core/createEmotionCache";
import Loader from "@/components/Loader";
import { AuthContextProvider } from "@/context/AuthContext";
import CrearTema from "@/core/createTheme";
import { Opcions } from "@/context/OpcionsContext";
import useGetOptions from "@/core/hooks/useOptions";

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps: { session, ...pageProps }, router, emotionCache = clientSideEmotionCache }) {
	const [isLoading, setIsLoading] = useState(false);
	const getLayout = router.pathname.includes("/admin") ? (page) => <AdminLayout>{page}</AdminLayout> : (page) => <PublicLayout>{page}</PublicLayout>;
	const notistackRef = React.createRef();
	const onClickDismiss = (key) => () => {
		notistackRef.current.closeSnackbar(key);
	};
	const { data, loading } = useGetOptions();
	const theme = CrearTema(data);

	useEffect(() => {
		Router.events.on("routeChangeStart", (url) => {
			NProgress.start();
			setIsLoading(true);
		});

		Router.events.on("routeChangeComplete", (url) => {
			setIsLoading(false);
			NProgress.done(false);
		});

		Router.events.on("routeChangeError", (url) => {
			setIsLoading(false);
		});
	}, []);

	return (
		<CacheProvider value={emotionCache}>
			{loading ? (
				<CircularProgress />
			) : (
				<Opcions.Provider value={data}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<SnackbarProvider
							maxSnack={3}
							anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
							TransitionComponent={Grow}
							style={{ zIndex: 14000 }}
							ref={notistackRef}
							action={(key) => (
								<IconButton onClick={onClickDismiss(key)}>
									<Close style={{ color: "white" }} />
								</IconButton>
							)}
						>
							<SessionProvider session={session}>
								<AuthContextProvider session={session}>
									{/* {isLoading && <Loader />} */}
									{getLayout(<Component {...pageProps} />)}
								</AuthContextProvider>
							</SessionProvider>
						</SnackbarProvider>
					</ThemeProvider>
				</Opcions.Provider>
			)}
		</CacheProvider>
	);
}
