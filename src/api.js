import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "a324eedc55e4cfe4f9a55ed7cc8caf27",
        language: "en-US"
    }
})

api.get("tv/popular");

export default api;