import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "bc8d480e5b48ea49a93d5428b3854fb3",
    language: "ja-JP"
  }
});

export default api;
