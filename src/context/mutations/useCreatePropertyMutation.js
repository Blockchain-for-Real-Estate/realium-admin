import useRealium from "context/hooks/useRealium";
import useUI from "context/hooks/useUI";
import { useMutation } from "react-query";

const CreateProperty = async (data) => {
  const REALIUM = await useRealium();
  const response = await REALIUM.post("/api/properties", data);
  return response.data;
};

const useCreatePropertyMutation = () => {
  const { toast } = useUI();

  return useMutation(CreateProperty, {
    onSuccess: async () => {
      toast("Created");
    },
    onError: (error) => {
      toast("Could not create", error.message, "error");
    },
  });
};

export default useCreatePropertyMutation;
