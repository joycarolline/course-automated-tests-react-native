import axios from "axios";

const backendEndpoint = axios.create({
  baseUrl: "http://localhost:3000",
});

export { backendEndpoint };
