import { useMutation, useQuery } from "@tanstack/react-query";
import { getDeclarationPerson, getDeclarations, postDeclarations } from "./declaration";

export const useDeclarationPerson = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["Declaration-Person"],
    queryFn: () => getDeclarationPerson(),
    onSuccess,
    onError,
  });
};


export const useDeclarations = (onSuccess, onError) => {
    return useQuery({
      queryKey: ["Declaration"],
      queryFn: () => getDeclarations(),
      onSuccess,
      onError,
    });
  };
  
  export const usePostDeclarations = (onSuccess, onError) => {
    return useMutation({
      mutationKey: ["PostDeclaration"],
      mutationFn: () => postDeclarations,
      onSuccess,
      onError,
    });
  };


  