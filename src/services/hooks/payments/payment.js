import axios from "axios";

export const postAddPayments = async (data) => {
    console.log("data", data);  
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/Payment/add`,
      data
    );
    console.log("response", response);
    return response.data;
  };
