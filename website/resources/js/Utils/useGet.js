import { useState } from "react";
import axios from "axios";

const useGet = (url, params = {}) => {
	const [data, setData] = useState([]);

	async () => {
		await axios.get(url, {
			params
		})
			.then((response) => response.data)
			.then((result) => setData(result.data))
			.catch((e) => alert(e.message))
	}

	return [data];
};

export default useGet;