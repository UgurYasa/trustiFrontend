import axios from "axios";

export const getCoverages = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Coverage/getall`);
  return response.data;
};

export const getCoveragesById = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Coverage/${id}`);
    return response.data.data;
  };

  export const getCoveragesByCoverageId = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Coverage/id/${id}`);
    return response.data.data;
  };