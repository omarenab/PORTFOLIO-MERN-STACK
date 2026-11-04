import apiClient from "./api/apiClient";

export const getAbout = async () => {
  const response = await apiClient.get("/api/about");
  return response.data.about;
};

export const updateAbout = async () => {
  const response = await apiClient.put(`/api/about/update`);
  return response.data;
};