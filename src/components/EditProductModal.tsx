import { motion } from 'framer-motion';
import { X, Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { updateProduct, getCategories } from '../lib/api';
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

    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    defaultValues: {
      title: product.title,
      description: product.description,
      category: product.category_id,
      model: product.model,
      technical_specs: JSON.stringify(product.technical_specs),
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    try {
      const formData = new FormData();
      // Required fields with validation
      formData.append('title', data.title.trim());
      formData.append('category_id', String(data.category));
      
      // Optional fields with validation
      if (data.description?.trim()) {
        formData.append('description', data.description.trim());
      }
      
      if (data.model?.trim()) {
        formData.append('model', data.model.trim());
      }

      // Handle technical specs with proper JSON validation
      if (data.technical_specs?.trim()) {
        try {
          const specs = JSON.parse(data.technical_specs.trim());
          if (typeof specs === 'object' && specs !== null) {
            formData.append('technical_specs', JSON.stringify(specs));
          } else {
            formData.append('technical_specs', '{}');
          }
        } catch (e) {
          console.error('Invalid technical specs JSON:', e);
          formData.append('technical_specs', '{}');
        }
      } else {
        formData.append('technical_specs', '{}');
      }

      // Handle image upload
      if (data.image && data.image.length > 0) {
        formData.append('image', data.image[0]);
      }

      await updateProduct(product.id, formData);
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Error updating product:', error.response?.data || error.message);
      // You could add error handling UI here
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
              rows={4}
              {...register('technical_specs', { 
                validate: value => {
                  if (!value || value.trim() === '') {
                    return true;
                  }
                  try {
                    const parsed = JSON.parse(value);
                    return typeof parsed === 'object' ? true : 'Must be a valid JSON object';
                  } catch {
                    return 'Invalid JSON format';
                  }
                }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder='Enter technical specifications in JSON format, e.g.: {"key": "value"}'
            />
            {errors.technical_specs && (
              <p className="mt-1 text-sm text-red-600">{errors.technical_specs.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image (Optional)
            </label>
            {product.image && (
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Current image:</p>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 w-32 object-cover rounded-lg"
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