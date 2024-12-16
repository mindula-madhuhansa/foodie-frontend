/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const API_BASE_URL = "http://localhost:8080/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// POST
export async function post(endpoint: string, data: any) {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    handleAxiosError(error);
  }
}

// GET
export async function get(endpoint: string) {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error: any) {
    handleAxiosError(error);
  }
}

// DELETE
export async function remove(endpoint: string) {
  try {
    await axiosInstance.delete(endpoint);
  } catch (error: any) {
    handleAxiosError(error);
  }
}

// Error handling function
function handleAxiosError(error: any) {
  if (error.response) {
    throw new Error(error.response.data.message || "An error occurred");
  } else if (error.request) {
    throw new Error("No response from the server");
  } else {
    throw new Error(error.message || "An unexpected error occurred");
  }
}
