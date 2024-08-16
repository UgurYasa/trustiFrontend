import { useQuery } from "@tanstack/react-query";
import { getCities } from "./city";

export const useGetCities = (onSuccess, onError) => {
    return useQuery({
      queryKey: ["Locations"],
      queryFn: getCities,
      onSuccess,
      onError,
    });
  };