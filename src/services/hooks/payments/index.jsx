import { useMutation } from "@tanstack/react-query";
import {postAddPayments} from "./payment"

export const usePostAddPayment = (onSuccess, onError) => {
  return useMutation({
    mutationKey: ["PostPayment"],
    mutationFn: postAddPayments,
    onSuccess,
    onError,
  });
};
