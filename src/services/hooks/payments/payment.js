import axios from "axios";

export const postAddPayments = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/Payment/add`,
    data
  );
  return response.data;
};
