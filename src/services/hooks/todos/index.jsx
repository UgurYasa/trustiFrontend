import { useMutation, useQuery } from "@tanstack/react-query";
import { getToDos, postPost } from "../../try";

export const useGetTodos = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["TODOS"],
    queryFn: getToDos,
    onSuccess,
    onError,
  });
};

export const usePostPost = (onSuccess, onError) => {
  return useMutation({
    mutationKey: ["POST"],
    mutationFn: postPost,
    onSuccess,
    onError,
  });
};
