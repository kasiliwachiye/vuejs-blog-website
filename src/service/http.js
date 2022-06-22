import axios from "axios";
import ws from "@/service/ws";
import { baseUrl } from "@/helpers/const.js";

// Default headers
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

const http = {
	get: (endpoint = null, data = null) => {
		return new Promise((resolve, reject) => {
			if (typeof endpoint === "string" && ws[endpoint]) {
				axios
					.get(`${baseUrl}/${ws[endpoint]}`, {
						params: data,
						headers,
					})
					.then(({ data }) => resolve(data))
					.catch((e) => reject(e?.response?.data?.errors[0]?.message));
			} else reject("Unable to do GET request on an unknown endpoint");
		});
	},
};

export default http;
