import { useState, useEffect } from "react";
import axios from "axios";

const useGet = (url, params = {}) => {
	const [data, setData] = useState(null);

	console.log(params);

	useEffect(async () => {
		await axios.get(url, {
			params
		})
			.then((response) => response.data)
			.then((result) => setData(result.data))
			.catch((e) => alert(e.message))
	}, [url]);

	return [data];
};

export default useGet;