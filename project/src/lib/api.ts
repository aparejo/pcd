import axios from 'axios';

export const API_URL = 'https://admin.pcdservicesusa.com';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL
});

// Add auth token interceptor
api.interceptors.request.use(
  (config) => {
    const authData = JSON.parse(localStorage.getItem('auth-storage') || '{}');
    const token = authData?.state?.token;
    
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    
    // Set Content-Type based on the request data
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
      // Remove any existing boundary in Content-Type
      if (config.headers['Content-Type'].includes('boundary')) {
        config.headers['Content-Type'] = 'multipart/form-data';
      }
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
    
    // Log request details
    console.log('Request config:', {
      url: config.url,
      method: config.method,
      headers: config.headers,
      data: config.data instanceof FormData 
        ? Object.fromEntries(config.data.entries())
        : config.data
    });
    
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
export const createProduct = (data: FormData) => {
  console.log('Creating product:', {
    formData: Object.fromEntries(data.entries())
  });

  const imageFile = data.get('image');
  if (imageFile instanceof File) {
    console.log('Image file details:', {
      name: imageFile.name,
      type: imageFile.type,
      size: imageFile.size,
      lastModified: new Date(imageFile.lastModified).toISOString()
    });
  } else {
    console.log('No image file present in FormData');
  }

  return api.post('/api/products/', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  }).then(response => {
    console.log('Create product success:', {
      status: response.status,
      data: response.data
    });
    return response;
  }).catch(error => {
    console.error('Create product error:', {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers
    });
    throw error;
  });
};
export const updateProduct = (id: number, data: FormData) => {
  // Ensure ID is a number and convert to string
  const productId = String(parseInt(String(id), 10));
  
  // Log request details before sending
  console.log('Updating product:', {
    id: productId,
    originalId: id,
    formData: Object.fromEntries(data.entries())
  });
  
  // Log the image file if present
  const imageFile = data.get('image');
  if (imageFile instanceof File) {
    console.log('Image file details:', {
      name: imageFile.name,
      type: imageFile.type,
      size: imageFile.size,
      lastModified: new Date(imageFile.lastModified).toISOString()
    });
  } else {
    console.log('No image file present in FormData');
  }
  
  // Make the request with explicit headers
  return api.patch(`/api/products/${productId}/`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  }).then(response => {
    console.log('Update product success:', {
      status: response.status,
      data: response.data
    });
    return response;
  }).catch(error => {
    console.error('Update product error:', {
      status: error.response?.status,
      data: error.response?.data,
      id: productId,
      headers: error.response?.headers
    });
    throw error;
  });
};
export const deleteProduct = (id: number) => api.delete(`/api/products/${id}/`);
export const getProductsByCategory = (categoryId: number) => api.get(`/api/products/?category=${categoryId}`);

// Product Images
export const getProductImages = (productId: number) => api.get(`/api/product-images/?product=${productId}`);

// Product Tables
export const getProductTables = (productId: number) => api.get(`/api/product-tables/?product=${productId}`);
