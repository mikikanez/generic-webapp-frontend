import axios from "axios";
import { signOut } from "next-auth/react";

// GENERIC

export async function getOptions() {
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	};

	const data = await axios.get(process.env.NEXT_PUBLIC + "opcions", config).then((response) => response.data.data);
	const result = data.reduce((o, s) => {
		o[s.nom] = s.valor;
		return o;
	}, {});
	return result;
}

export async function getList(element, token) {
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + token,
		},
	};

	try {
		const data = await axios.get(process.env.NEXT_PUBLIC + element, config).then((response) => response.data.data);
		return data;
	} catch (error) {
		await signOut({ redirect: true });
		router.push("/login");
	}
}

export async function getDataIds(element) {
	const data = await axios.get(process.env.NEXT_PUBLIC + element).then((response) => response.data.data);

	return data;
}

export async function getData(element, slug) {
	const data = await axios
		.get(process.env.NEXT_PUBLIC + element + "/" + slug)
		.then((response) => response.data.data)
		.catch((err) => console.log(err.response.data.message));
	return data;
}

export const updateElement = async (element, key, values, token) => {
	let message;
	let config = {
		headers: {
			"Content-Type": "multipart/form-data",
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + token,
		},
	};
	await axios
		.post(process.env.NEXT_PUBLIC + element + "/" + key, values, config)
		.then((response) => {
			console.log(response);
			if (response.status === 200) {
				message = response.data.message;
			}
			if (response.data.status === "failed" && response.data.success === undefined) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message };
};

export const addElement = async (element, values, token) => {
	let message;
	let config = {
		headers: {
			"Content-Type": "multipart/form-data",
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + token,
		},
	};
	try {
		await axios
			.post(process.env.NEXT_PUBLIC + element, values, config)
			.then((response) => {
				if (response.status === 200) {
					message = response.data.message;
				}
				if (response.data.status === "failed" && response.data.success === undefined) {
					message = response.data.message;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	} catch (error) {
		await signOut({ redirect: true });
		router.push("/login");
	}

	return { message };
};

export const deleteElement = async (element, key, token) => {
	let message;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + token,
		},
	};
	await axios
		.delete(process.env.NEXT_PUBLIC + element + "/" + key, config)
		.then((response) => {
			if (response.status === 200) {
				message = response.data.message;
			}
			if (response.data.status === "failed" && response.data.success === undefined) {
				message = response.data.message;
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return { message };
};
