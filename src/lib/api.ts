import axios from 'axios';

export const API_URL = 'https://admin.pcdservicesusa.com';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token interceptor
api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('auth-storage') || '{}')?.state?.token;
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth
export const login = (username: string, password: string) => 
  api.post('/api-token-auth/', { username, password });

// Users
export const getUsers = () => api.get('/api/users/');
export const createUser = (userData: any) => api.post('/api/users/', userData);
export const updateUser = (id: number, userData: any) => api.put(`/api/users/${id}/`, userData);
export const deleteUser = (id: number) => api.delete(`/api/users/${id}/`);
export const changePassword = (id: number, passwords: any) => 
  api.post(`/api/users/${id}/change-password/`, passwords);

// Categories
export const getCategories = () => api.get('/api/categories/');
export const getCategory = (id: number) => api.get(`/api/categories/${id}/`);
export const createCategory = (data: any) => api.post('/api/categories/', data);
export const updateCategory = (id: number, data: any) => api.put(`/api/categories/${id}/`, data);
export const deleteCategory = (id: number) => api.delete(`/api/categories/${id}/`);

// Products
export const getProducts = () => api.get('/api/products/');
export const getProduct = (id: number) => api.get(`/api/products/${id}/`);
export const createProduct = (data: FormData) => api.post('/api/products/', data, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const updateProduct = (id: number, data: FormData) => api.patch(`/api/products/${id}/`, data, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const deleteProduct = (id: number) => api.delete(`/api/products/${id}/`);
export const getProductsByCategory = (categoryId: number) => api.get(`/api/products/?category=${categoryId}`);

// Product Images
export const getProductImages = (productId: number) => api.get(`/api/product-images/?product=${productId}`);

// Product Tables
export const getProductTables = (productId: number) => api.get(`/api/product-tables/?product=${productId}`);
