import axios from "axios";
import getTokenHeader from "./getTokenHeader"


// Functions to make calls to api endpoint. Each function gets an auth token and attaches it to
// the request.
const apiRequest = {

	getEntries: async function (url) {

		const tokenHeader = await getTokenHeader();
		return await axios.get(url, tokenHeader);

	},

	getEntryById: async function (url) {

		const tokenHeader = await getTokenHeader();
		return await axios.get(url, tokenHeader);

	},

	createEntry: async function(url, data) {

		const tokenHeader = await getTokenHeader();
		return await axios.post(url, data, tokenHeader);

	},

	updateEntry: async function(url, data) {

		const tokenHeader = await getTokenHeader();
		return await axios.put(url, data, tokenHeader);

	},

	deleteEntry: async function (url) {

		const tokenHeader = await getTokenHeader();
		return await axios.delete(url, tokenHeader);

	},

};

export default apiRequest;
