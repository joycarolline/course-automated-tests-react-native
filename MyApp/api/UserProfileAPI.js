import axios from "axios";
import { backendEndpoint } from "./Api.config";

const userEndpoint = "/api/users";

const getUserProfile = async (userId) => {
  try {
    const response = await backendEndpoint.get(`${userEndpoint}/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getUserProfile };
