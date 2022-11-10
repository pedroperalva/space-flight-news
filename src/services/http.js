import axios from "axios";

const http = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3",
});

export default http;
