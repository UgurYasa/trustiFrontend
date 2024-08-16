import axios from "axios";

export const getDeclarationPerson = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/DeclarationPerson/getalldto`);
  return response.data.data;
};

export const getDeclarations = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Declaration/getall`);
    return response.data.data;
  };


  export const postDeclarations = async (data) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/Declaration/add`,
      data
    );
    return response.data;
  };