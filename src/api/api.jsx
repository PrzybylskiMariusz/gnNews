import axios from "axios";

export const API_KEY = "96f7dcdb7efc419c9ed0568d6ea0abd2";

const COUNTRIES =
	"ae,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,fr,gb,gr,hk,hu,id,ie,il,in,it,jp,kr,lt,lv,ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za";

export const API_NEWS = axios.create({
	baseURL: `https://newsapi.org/v2/top-headlines?language=en&pageSize=40&apiKey=${API_KEY}`,
});

export const API_COUNTRY_NEWS = axios.create({
	baseURL: "https://newsapi.org/v2",
});

export const API_COUNTRIES = axios.create({
	baseURL: `https://restcountries.com/v2/alpha?codes=${COUNTRIES}&fields=name,flag,alpha2Code`,
});

export const API_CODES = axios.create({
	baseURL: "https://restcountries.com/v2/name/",
});
