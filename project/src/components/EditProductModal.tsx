import { motion } from 'framer-motion';
import { X, Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { updateProduct, getCategories, API_URL } from '../lib/api';
import { useEffect, useState } from 'react';

interface EditProductModalProps {
  onClose: () => void;
  onSuccess: () => void;
  product: any;
}

interface ProductFormData {
  title: string;
  description: string;
  category: number;
  model: string;
  technical_specs: string;
  image: FileList;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function EditProductModal({ onClose, onSuccess, product }: EditProductModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Log initial product data
    console.log('Initial product data:', {
      id: product.id,
      title: product.title,
      category: product.category,
      category_id: product.category_id,
      description: product.description,
      model: product.model,
      technical_specs: product.technical_specs
    });

    fetchCategories();
  }, [product]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    defaultValues: {
      title: product.title,
      description: product.description,
      category: product.category,
      model: product.model,
      technical_specs: (() => {
        try {
          let specs;
          if (typeof product.technical_specs === 'string') {
            // Handle escaped JSON string
            const unescaped = product.technical_specs
              .replace(/\\n/g, '\n')
              .replace(/\\"/g, '"')
              .replace(/\\\\/g, '\\');
            specs = JSON.parse(unescaped);
          } else {
            specs = product.technical_specs;
          }
          return JSON.stringify(specs, null, 2);
        } catch (e) {
          console.error('Error formatting technical specs:', e);
          console.log('Original specs:', product.technical_specs);
          return product.technical_specs || '[]';
        }
      })(),
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    try {
      // Get product ID and ensure it's a number
      const productId = parseInt(String(product.id), 10);
      if (isNaN(productId)) {
        throw new Error('Invalid product ID');
      }

      console.log('Product ID type:', typeof productId, 'Value:', productId);
      console.log('Original product:', product);
      console.log('Form data:', data);

      const formData = new FormData();
      
      // Required fields
      formData.append('title', data.title.trim());
      formData.append('category_id', String(data.category));
      
      // Optional fields - Always send these fields even if empty
      formData.append('description', data.description?.trim() || '');
      formData.append('model', data.model?.trim() || '');

      // Handle technical specs
      try {
        let specs;
        const trimmedSpecs = data.technical_specs?.trim();
        
        if (!trimmedSpecs) {
          specs = [];
        } else {
          // First try to parse as-is
          try {
            specs = JSON.parse(trimmedSpecs);
          } catch {
            // If that fails, try handling escaped characters
            const unescaped = trimmedSpecs
              .replace(/\\n/g, '\n')
              .replace(/\\"/g, '"')
              .replace(/\\\\/g, '\\');
            specs = JSON.parse(unescaped);
          }
        }
        
        // Log for debugging
        console.log('Original specs:', data.technical_specs);
        console.log('Parsed specs:', specs);
        
        formData.append('technical_specs', JSON.stringify(specs));
      } catch (e) {
        console.error('Error parsing technical specs:', e);
        alert('Please ensure the technical specifications are in valid JSON format. The data should be a valid JSON array or object.');
        return;
      }

      // Handle image upload
      if (data.image?.[0]) {
        const imageFile = data.image[0];
        console.log('Image file selected:', {
          name: imageFile.name,
          type: imageFile.type,
          size: imageFile.size,
          lastModified: new Date(imageFile.lastModified).toISOString()
        });
        formData.append('image', imageFile);
      } else {
        console.log('No new image file selected');
      }

      // Log complete form data for debugging
      console.log('Form data to be submitted:', {
        productId: product.id,
        formData: Object.fromEntries(formData.entries()),
        hasImage: formData.has('image'),
        imageDetails: data.image?.[0] ? {
          name: data.image[0].name,
          type: data.image[0].type,
          size: data.image[0].size,
          lastModified: new Date(data.image[0].lastModified).toISOString()
        } : 'No new image'
      });

      const response = await updateProduct(productId, formData);
      console.log('Update response:', response.data);
      
      onSuccess();
      onClose();
    } catch (error: any) {
      console.error('Error updating product:', error);
      if (error.response?.data) {
        console.error('Error response:', error.response.data);
      }
      console.error('Product ID:', product.id);
      
      let errorMessage = 'Failed to update product. ';
      if (error.response?.status === 404) {
        errorMessage += 'Product not found. Please refresh the page and try again.';
      } else if (error.response?.data?.detail) {
        errorMessage += error.response.data.detail;
      } else {
        errorMessage += 'Please try again later.';
      }
      
      alert(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-semibold text-navy-900">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="title"
              {...register('title', { required: 'Product name is required' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              {...register('category', { required: 'Category is required' })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 ${
                errors.category ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              {...register('description')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <input
              type="text"
              id="model"
              {...register('model')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            {errors.model && (
              <p className="mt-1 text-sm text-red-600">{errors.model.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="technical_specs" className="block text-sm font-medium text-gray-700 mb-1">
              Technical Specifications
            </label>
            <textarea
              id="technical_specs"
              rows={15}
              {...register('technical_specs')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent font-mono text-sm whitespace-pre"
              placeholder='Enter technical specifications in JSON format'
              spellCheck="false"
              wrap="off"
            />
            <p className="mt-1 text-sm text-gray-500">
              Enter valid JSON data (array or object). Line breaks and formatting will be preserved.
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Tip: Use proper JSON formatting with quotes and commas. Example: [{'"key": "value"'}]
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image (Optional)
            </label>
            {product.image && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Current image:</p>
                <img
                  src={`${API_URL}${product.image}`}
                  alt={product.title}
                  className="h-32 w-32 object-cover rounded-lg"
                  onError={(e) => {
                    console.error('Error loading image:', e);
                    e.currentTarget.src = 'https://via.placeholder.com/150';
                  }}
                />
              </div>
            )}
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload new image</span>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      {...register('image')}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          console.log('Selected image:', {
                            name: file.name,
                            type: file.type,
                            size: file.size,
                            lastModified: new Date(file.lastModified).toISOString()
                          });
                        }
                      }}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
