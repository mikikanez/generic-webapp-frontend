import axios from "axios";
import { useRouter } from "next/router";

const url = "http://localhost:8000/api/";

// GENERIC

export async function getOptions() {
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	};

	const data = await axios.get(url + "opcions", config).then((response) => response.data.data);
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

	const data = await axios.get(url + element, config).then((response) => response.data.data);
	return data;
}

export async function getDataIds(element) {
	const data = await axios.get(url + element).then((response) => response.data.data);

	return data;
}

export async function getData(element, slug) {
	const data = await axios
		.get(url + element + "/" + slug)
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
		.post(url + element + "/" + key, values, config)
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
	await axios
		.post(url + element, values, config)
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

export const deleteElement = async (element, key, token) => {
	let message;
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: "Bearer " + token,
		},
	};
	await axios
		.delete(url + element + "/" + key, config)
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
