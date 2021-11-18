import { useQuery } from "react-query";
import useRealium from "context/hooks/useRealium";

export const GetProperties = async ({ propertyId }) => {
  const REALIUM = await useRealium();
  const { data } = await REALIUM.get(`/api/properties/${propertyId}`);
  return data;
};

export const KEY = "PROPERTY";
export default function useProperty(propertyId) {
  return useQuery([KEY, propertyId], () => GetProperties({ propertyId }), {
    enabled: !!propertyId,
  });
}
