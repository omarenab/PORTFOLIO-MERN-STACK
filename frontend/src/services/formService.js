import apiClient from "./api/apiClient";

export const submitForm = async (form) => {
  try {
    const response = await apiClient.post(`/api/form/add`, form);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      (error.response
        ? "Unable to send your message."
        : "Network error. Please try again.");

    throw new Error(message, { cause: error });
  }
};
