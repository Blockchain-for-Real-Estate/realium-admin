import { useQuery } from "react-query";
import useRealium from "context/hooks/useRealium";

export const GetProperties = async () => {
  const REALIUM = await useRealium();
  const { data } = await REALIUM.get("/api/properties");
  return data;
};

export const KEY = "PROPERTIES";
export default function useProperties() {
  return useQuery(KEY, GetProperties);
}
