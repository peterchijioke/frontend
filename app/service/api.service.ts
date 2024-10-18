import axiosInstance from "./Axios";

export const getApiService = async (url:string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data
  } catch (error) {
   throw error
  }
};