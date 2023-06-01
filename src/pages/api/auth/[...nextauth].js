import { SESSION_TTL_IN_SECONDS } from "@/core/constants";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const providers = [
	Credentials({
		id: "credentials",
		name: "Credentials",
		credentials: {
			email: { label: "E-mail", type: "text" },
			password: { label: "Password", type: "password" },
		},
		authorize: async (credentials) => {
			const loginResponse = await fetch(`${process.env.NEXT_PUBLIC}login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: credentials?.email ?? "",
					password: credentials?.password ?? "",
				}),
			});

			const response = await loginResponse.json();

			console.log(response);
			if (response.status === 200) {
				return {
					...response,
					user: response,
					token: response.token,
				};
			} else {
				console.log("Error");
				return null;
			}
		},
	}),
];

const callbacks = {
	async jwt({ token, user }) {
		if (user) {
			return {
				accessToken: user.accessToken,
				expires: user.token.token.expires_at,
				user: user,
			};
		}

		const currentTime = new Date().getTime() / 1000;
		if (currentTime < (token.exp ?? 0)) {
			return token;
		}

		return {};
	},
	async session({ session, token }) {
		if (token) {
			session.user = token.user;

			return session;
		}
		return {};
	},
};

export const authOptions = {
	providers,
	callbacks,
	pages: {
		signIn: "/login",
	},
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		maxAge: SESSION_TTL_IN_SECONDS, // 20seg
	},
};

export default NextAuth(authOptions);
