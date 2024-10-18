import axiosInstance from "./Axios";
import AxiosBase from "./AxiosBase";

export const getApiService = async (url:string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data
  } catch (error) {
   throw error
  }
};

export const postApiService = async (url:string,{arg}:{arg:any}) => {
  try {
    const response = await AxiosBase.post(url,{...arg});
    return response.data
  } catch (error) {
   throw error
  }
};