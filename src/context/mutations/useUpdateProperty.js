import useRealium from "context/hooks/useRealium";
import useUI from "context/hooks/useUI";
import { useMutation, useQueryClient } from "react-query";
import { KEY as PROPERTIES_QUERY } from "context/queries/useProperties";

const UpdateProperty = async ({ propertyId, data }) => {
  const REALIUM = await useRealium();
  const response = await REALIUM.put(`/api/properties/${propertyId}`, data);
  return response.data;
};

const useUpdateProperty = (propertyId) => {
  const { toast } = useUI();
  const queryClient = useQueryClient();

  return useMutation((data) => UpdateProperty({ propertyId, data }), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(PROPERTIES_QUERY);
      toast("Property Updated");
    },
    onError: (error) => {
      toast("Could not update", error.message, "error");
    },
  });
};

export default useUpdateProperty;
