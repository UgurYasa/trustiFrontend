import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getCustomerById,
  getCustomerByTCKNo,
  getCustomers,
  postAddCustomer,
  putUpdateCustomer,
} from "./customer";
import { TCKValidation } from "../../../components/Forms/FirstForm/validations";

export const useGetCustomers = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["Customers"],
    queryFn: getCustomers,
    onSuccess,
    onError,
  });
};

export const useCustomerByTCKNo = (onSuccess, onError, TCKNo) => {
  return useQuery({
    queryKey: ["CustomerByTCKNo"],
    queryFn: () => getCustomerByTCKNo(TCKNo),
    onSuccess,
    onError,
    enabled: TCKNo.length === 11, // Sorguyu yalnızca TCKNo 11 haneli olduğunda çalıştır
  });
};

export const useCustomerById = (onSuccess, onError, CustomerId) => {
  return useQuery({
    queryKey: ["CustomerById"],
    queryFn: () => getCustomerById(CustomerId),
    onSuccess,
    onError,
    enabled: !!CustomerId,
  });
};

export const usePostAddCustomer = (onSuccess, onError) => {
  return useMutation({
    mutationKey: ["Add"],
    mutationFn: postAddCustomer,
    onSuccess,
    onError,
  });
};
export const usePutUpdateCustomer = (onSuccess, onError) => {
  return useMutation({
    mutationKey: ["Update"],
    mutationFn: putUpdateCustomer,
    onSuccess,
    onError,
  });
};
