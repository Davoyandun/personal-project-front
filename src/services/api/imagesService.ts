import axios from "axios";
import EnvManager from "@/config/envManager";
const options = {
  method: "GET",
  url: "https://json-store.p.rapidapi.com/65e36f54f1128ebaaf97fc82",
  headers: {
    "X-RapidAPI-Key": "82434afdeamshe6251846e5fe6acp1f20a5jsncdcae8b2ee15",
    "X-RapidAPI-Host": "json-store.p.rapidapi.com",
  },
};
const fetchImages = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
  }
};

export default fetchImages;
