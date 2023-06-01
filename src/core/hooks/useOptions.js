import { getOptions } from "@/lib/API";
import { useEffect, useState } from "react";

export default function useGetOptions(url) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log(loading);
	}, [loading]);

	useEffect(() => {
		(async function () {
			try {
				setLoading(true);
				const response = await getOptions();
				setData(response);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return { data, error, loading };
}
