import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
	user: undefined,
	token: undefined,
	clear: () => {},
	update: () => {},
});

export function AuthContextProvider({ children, session: sessionProps }) {
	const [session, setSession] = useState(sessionProps ?? undefined);
	useEffect(() => {
		if (sessionProps && "user" in sessionProps) {
			setSession(sessionProps);
		} else {
			clear();
		}
	}, [sessionProps]);

	async function update() {
		const session = await getSession();
		if (session && "user" in session) {
			console.log("UPDATE");
			console.log(session);
			setSession(session);
		} else {
			clear();
		}
	}

	function clear() {
		setSession(undefined);
	}

	return (
		<AuthContext.Provider
			value={{
				user: session?.user,
				token: session?.accessToken,
				clear,
				update,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
