import apiClient from "./api/apiClient";

export const getSkills = async () => {
  const response = await apiClient.get("/api/skills");
  return response.data.data;
};
