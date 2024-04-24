import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post("URL BACKEND", data);
    return response.data;
  } catch (error) {
    return error;
  }
};
