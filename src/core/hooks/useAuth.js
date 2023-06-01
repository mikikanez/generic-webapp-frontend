import { AuthContext } from "@/context/AuthContext";
import { signIn, SignInResponse, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LoginErrorResponse } from "../errors/errors";

export function useAuth() {
	// Client only
	const { user, token, update } = useContext(AuthContext);
	const router = useRouter();
	async function login(data) {
		try {
			const response = await signIn("credentials", {
				...data,
				redirect: false,
			});
			if (response.status === 200) {
				await update();
				if (router.query["callbackUrl"]) {
					router.push(router.query["callbackUrl"]);
				} else {
					router.push("/");
				}
			}
			if (response.error === "CredentialsSignin") {
				throw "CredentialsSignin";
			}
		} catch (error) {
			throw new LoginErrorResponse("credentials error", 401);
		}
	}

	async function logout() {
		await signOut({ redirect: false });
		router.push("/");
	}

	return {
		token: token,
		user,
		isLogged: user !== undefined,
		login,
		logout,
	};
}
