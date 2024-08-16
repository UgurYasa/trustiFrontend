import axios from "axios";

export const getCustomers = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Customer/customers`);
  return response.data.data;
};

export const getCustomerByTCKNo=async (TCKNo)=>{
const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Customer/${TCKNo}`);
return response.data
}
export const getCustomerById=async (CustomerId)=>{
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/Customer/id/${CustomerId}`);
  return response.data
  }

export const postAddCustomer = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/Customer/add`,
    data
  );
  return response.data;
};

export const putUpdateCustomer = async (data) => {
  const response = await axios.put(
    `${import.meta.env.VITE_BASE_URL}/Customer/update`,
    data
  );
  return response.data;
};
