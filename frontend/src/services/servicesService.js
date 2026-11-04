import apiClient from "./api/apiClient";

export const getServices = async () => {
  const response = await apiClient.get("/api/services");
  return response.data.services;
};
