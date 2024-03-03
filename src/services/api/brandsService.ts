import axios from "axios";
import EnvManager from "@/config/envManager";
const options = {
  method: "GET",
  url: "https://json-store.p.rapidapi.com/65e38291f1128ebaafaadc1c",
  headers: {
    "X-RapidAPI-Key": "82434afdeamshe6251846e5fe6acp1f20a5jsncdcae8b2ee15",
    "X-RapidAPI-Host": "json-store.p.rapidapi.com",
  },
};
const fetchBrands = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {}
};

export default fetchBrands;
