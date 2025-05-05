import axios from 'axios';

const API_BASE_URL = "http://localhost:3001";

const apiRequest = async (endpoint, method = "GET", body = null) => {
  try {
    const response = await axios({
      url: `${API_BASE_URL}${endpoint}`,
      method,
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    throw new Error(`API request failed: ${error.response?.statusText || error.message}`);
  }
};

export const deleteEmployee = (id) => apiRequest(`/employees/${id}`, "DELETE");
export const getEmployees = () => apiRequest(`/employees`);
export const addEmployee = (employee) => apiRequest(`/employees`, "POST", employee);
export const updateEmployee = (id, employee) => apiRequest(`/employees/${id}`, "PUT", employee);