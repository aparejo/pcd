import { motion } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';
import { deleteCategory } from '../lib/api';

interface DeleteCategoryModalProps {
  onClose: () => void;
  onSuccess: () => void;
  category: {
    id: number;
    name: string;
  };
}

export default function DeleteCategoryModal({ onClose, onSuccess, category }: DeleteCategoryModalProps) {
  const handleDelete = async () => {
    try {
      await deleteCategory(category.id);
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-navy-900">Delete Category</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium text-gray-900">
              Delete "{category.name}"?
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to delete this category? This action cannot be undone.
              All products in this category will need to be reassigned.
            </p>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete Category
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}