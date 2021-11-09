import { useQuery } from "react-query";
import useRealium from "context/hooks/useRealium";

export const GetModel = async ({ model }) => {
  const REALIUM = await useRealium();
  const { data } = await REALIUM.get("/api/models", {
    params: {
      model,
    },
  });
  return Object.entries(data || {});
};

export const QUERY_KEY = "MODEL";

export default function useModel(model) {
  return useQuery([QUERY_KEY, model], () => GetModel({ model }), {
    staleTime: 5 * 60 * 900,
    retry: false,
  });
}
