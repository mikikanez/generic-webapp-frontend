import React, { useState } from "react";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginErrorResponse } from "@/core/errors/errors";
import CustomButton from "@/components/elements/CustomButton";
import { useAuth } from "@/core/hooks/useAuth";
import theme from "@/styles/theme";
import { useMediaQuery } from "@mui/material";

export default function LoginView() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	const matches = useMediaQuery("(min-width:960px)");

	const schema = Yup.object().shape({
		email: Yup.string().email("Ha de ser un email vàlid").max(255).required("L'email és obligatòri"),
		password: Yup.string().max(255).required("La contrasenya és obligatòria"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
		resolver: yupResolver(schema),
	});

	const logInEmail = async (values) => {
		setLoading(true);
		try {
			await login(values);
			setLoading(false);
		} catch (err) {
			if (err instanceof LoginErrorResponse) {
				console.log(err);
				setError("L'usuari o la contrasenya no són correctes");
				setLoading(false);
			}
		}
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			style={{
				height: "80vh",
				paddingBottom: theme.spacing(3),
				paddingTop: theme.spacing(3),
				backgroundColor: matches ? "transparent" : "white",
			}}
		>
			<Container maxWidth="sm">
				<Box
					style={{
						padding: 50,
						backgroundColor: "white",
						borderRadius: 20,
					}}
				>
					<form onSubmit={handleSubmit(logInEmail)}>
						<Box mb={3}>
							<Typography color="textPrimary" variant="h2">
								{"Entrar"}
							</Typography>
							<Typography variant="body1">{"Entra a la pàgina d'administració"}</Typography>
						</Box>
						<TextField
							error={Boolean(errors && errors.email)}
							fullWidth
							helperText={errors && errors?.email?.message}
							label="E-mail"
							margin="normal"
							type="email"
							variant="outlined"
							color="primary"
							{...register("email")}
						/>
						<TextField
							error={Boolean(errors && errors.password)}
							fullWidth
							helperText={errors && errors?.password?.message}
							label={"Contrasenya"}
							margin="normal"
							name="password"
							type="password"
							variant="outlined"
							{...register("password")}
						/>
						<Typography variant="body1" style={{ color: "red" }}>
							{error}
						</Typography>

						<Box my={2}>
							<CustomButton fullWidth type="submit" title="Entrar" loading={loading} />
						</Box>
					</form>
				</Box>
			</Container>
		</Box>
	);
}

// export const getServerSideProps = async (context) => {
// 	console.log(context);
// 	try {
// 		const session = await getServerSession(context.req, context.res, authOptions);
// 		console.log(session);
// 		if (session?.user) {
// 			return {
// 				redirect: {
// 					permanent: false,
// 					destination: "/",
// 				},
// 			};
// 		}
// 		return {
// 			props: {},
// 		};
// 	} catch (e) {
// 		console.log("ERROR");
// 		console.log(e.message);
// 		return e;
// 	}
// };
