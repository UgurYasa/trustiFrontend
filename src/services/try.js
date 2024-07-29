import axios from "axios";

export const getToDos = async () => {
  console.log();
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos`);
  return response.data;
};

export const postPost = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/posts`,
    data
  );
  return response.data;
};
