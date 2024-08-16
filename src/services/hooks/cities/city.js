import axios from "axios";

export const getCities = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/City/cities`);
  return response.data.data;
};