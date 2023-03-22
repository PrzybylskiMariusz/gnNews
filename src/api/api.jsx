import axios from "axios";

export const API_KEY = "96f7dcdb7efc419c9ed0568d6ea0abd2";

export const API_NEWS = axios.create({
	baseURL: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
});
