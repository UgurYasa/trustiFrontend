import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCoverages, getCoveragesById,getCoveragesByCoverageId } from "./coverage";


export const useGetCoverages = (onSuccess, onError) => {
    return useQuery({
      queryKey: ["Coveragess"],
      queryFn:  getCoverages,
      onSuccess,
      onError,
    });
  };

  export const useGetCoverageById = (onSuccess, onError,id) => {
    return useQuery({
      queryKey: ["Coverage"],
      queryFn: ()=> getCoveragesById(id),
      onSuccess,
      onError,
    });
  };

  export const useGetCoverageByCoverageId = (onSuccess, onError,id) => {
    return useQuery({
      queryKey: ["CoverageId"],
      queryFn: ()=> getCoveragesByCoverageId(id),
      onSuccess,
      onError,
    });
  };