import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "919856c00a1d49a5a9f85a6c3de3fad3"
    }
})