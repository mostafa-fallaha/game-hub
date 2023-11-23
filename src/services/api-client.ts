import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "23a9f08a9f5a4f00a24a3330cfaffdd4",
  },
});
