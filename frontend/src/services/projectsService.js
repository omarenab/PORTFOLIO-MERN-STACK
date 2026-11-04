import apiClient from "./api/apiClient";

export const getProjects = async () => {
  const response = await apiClient.get("/api/projects");
  return response.data.projects;
};

export const deleteProject = async (id) => {
  const response = await apiClient.delete(`/api/projects/remove/${id}`);
  return response.data;
};