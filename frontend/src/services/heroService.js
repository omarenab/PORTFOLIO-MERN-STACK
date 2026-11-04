import apiClient from "./api/apiClient";

export const getHeroData = async () => {
  const response = await apiClient.get("/api/home");
  return response.data.data;
};
