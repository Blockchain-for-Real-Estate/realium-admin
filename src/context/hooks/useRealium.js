import axios from "axios";

const useRealium = async () => {
  const api = await axios.create({
    baseURL: process.env.NEXT_PUBLIC_REALIUM_API,
  });
  return api;
};

export default useRealium;
