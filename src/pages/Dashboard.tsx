import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../lib/auth';
import { useState, useEffect } from 'react';
import { getUsers, getProducts, getCategories } from '../lib/api';
import AddUserModal from '../components/AddUserModal';
import EditCategoryModal from '../components/EditCategoryModal';
import DeleteCategoryModal from '../components/DeleteCategoryModal';
import AddProductModal from '../components/AddProductModal';
import EditProductModal from '../components/EditProductModal';
import AddCategoryModal from '../components/AddCategoryModal';
import { 
  Package, 
  FileText, 
  Users,
  UserPlus,
  User,
  LogOut,
  Key,
  Plus,
  Settings,
  Pencil,
  Trash2,
  FolderTree
} from 'lucide-react';

interface MenuItem {
  icon: any;
  label: string;
  onClick: () => void;
}

interface UserData {
  id: number;
  username: string;
  email: string;
  is_admin: boolean;
  created_at: string;
}

export default function Dashboard() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeModule, setActiveModule] = useState('dashboard');
  const [users, setUsers] = useState<UserData[]>([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [showEditCategory, setShowEditCategory] = useState(false);
  const [showDeleteCategory, setShowDeleteCategory] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (activeModule === 'users') {
      fetchUsers();
    } else if (activeModule === 'products') {
      fetchProducts();
    } else if (activeModule === 'categories') {
      fetchCategories();
    }
  }, [activeModule]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const isAdmin = user?.is_admin;

  const sidebarItems = [
    { icon: Package, label: 'Products', value: 'products' },
    { icon: FolderTree, label: 'Categories', value: 'categories' },
    { icon: FileText, label: 'Blog', value: 'blog' },
    { icon: Users, label: 'Users', value: 'users' }
  ];

  const profileMenuItems: MenuItem[] = [
    {
      icon: User,
      label: 'Edit Profile',
      onClick: () => console.log('Edit profile'),
    },
    {
      icon: Key,
      label: 'Change Password',
      onClick: () => console.log('Change password'),
    },
    {
      icon: LogOut,
      label: 'Sign Out',
      onClick: logout,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <img
            src="https://antonioparejo.com/img/pcd/Logo-PCD-Services-LLC-.jpg"
            alt="PCD Services LLC"
            className="h-8 mx-auto mb-6"
          />
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-navy-900">{user?.username}</p>
              <p className="text-sm text-gray-500">{isAdmin ? 'Administrator' : 'User'}</p>
            </div>
          </div>
        </div>
        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ x: 6 }}
              onClick={() => setActiveModule(item.value)}
              className={`w-full flex items-center px-6 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors ${
                activeModule === item.value ? 'text-blue-600 bg-blue-50' : ''
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-700">{user?.username}</span>
                  <Settings className="w-5 h-5 text-gray-400" />
                </motion.button>

                {/* Profile Menu */}
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10"
                  >
                    {profileMenuItems.map((item, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ x: 6 }}
                        onClick={item.onClick}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeModule === 'dashboard' && (
            <div className="grid md:grid-cols-2 gap-6">
            {/* Add Product Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Add New Product</h3>
              <p className="text-gray-600 mb-4">
                Create a new product listing with details, images, and specifications.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowAddProduct(true)}
                className="flex items-center text-blue-600 font-medium"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Product
              </motion.button>
            </motion.div>

            {/* Add Blog Post Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Blog Post</h3>
              <p className="text-gray-600 mb-4">
                Write and publish a new blog post to share news and updates.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center text-green-600 font-medium"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Post
              </motion.button>
            </motion.div>
          </div>
          )}

          {/* Users Module */}
          {activeModule === 'users' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-navy-900">Users Management</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAddUser(true)}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Add User</span>
                </motion.button>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Username
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created At
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="h-4 w-4 text-blue-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {user.username}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.is_admin
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.is_admin ? 'Admin' : 'User'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(user.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Pencil className="h-4 w-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Products Module */}
          {activeModule === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-navy-900">Products Management</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAddProduct(true)}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Product</span>
                </motion.button>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Model
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created At
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product: any) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              {product.image && (
                                <img
                                  className="h-10 w-10 rounded-lg object-cover"
                                  src={product.image}
                                  alt={product.title}
                                />
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {product.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{product.model}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 truncate max-w-xs">
                            {product.description}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(product.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => {
                                setSelectedProduct(product);
                                setShowEditProduct(true);
                              }}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Pencil className="h-4 w-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Categories Module */}
          {activeModule === 'categories' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-navy-900">Categories Management</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAddCategory(true)}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Category</span>
                </motion.button>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Slug
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Parent Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created At
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {categories.map((category: any) => (
                      <tr key={category.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {category.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">{category.slug}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">
                            {category.parent ? categories.find(c => c.id === category.parent)?.name : '-'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(category.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => {
                                setSelectedCategory(category);
                                setShowEditCategory(true);
                              }}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Pencil className="h-4 w-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => {
                                setSelectedCategory(category);
                                setShowDeleteCategory(true);
                              }}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <AnimatePresence>
            {showAddUser && (
              <AddUserModal
                onClose={() => setShowAddUser(false)}
                onSuccess={fetchUsers}
              />
            )}
            {showAddCategory && (
              <AddCategoryModal
                categories={categories}
                onClose={() => setShowAddCategory(false)}
                onSuccess={fetchCategories}
              />
            )}
            {showAddProduct && (
              <AddProductModal
                onClose={() => setShowAddProduct(false)}
                onSuccess={fetchProducts}
              />
            )}
            {showEditCategory && selectedCategory && (
              <EditCategoryModal
                category={selectedCategory}
                categories={categories}
                onClose={() => {
                  setShowEditCategory(false);
                  setSelectedCategory(null);
                }}
                onSuccess={fetchCategories}
              />
            )}
            {showDeleteCategory && selectedCategory && (
              <DeleteCategoryModal
                category={selectedCategory}
                onClose={() => {
                  setShowDeleteCategory(false);
                  setSelectedCategory(null);
                }}
                onSuccess={fetchCategories}
              />
            )}
            {showAddProduct && (
              <AddProductModal
                onClose={() => setShowAddProduct(false)}
                onSuccess={fetchProducts}
              />
            )}
            {showEditProduct && selectedProduct && (
              <EditProductModal
                product={selectedProduct}
                onClose={() => {
                  setShowEditProduct(false);
                  setSelectedProduct(null);
                }}
                onSuccess={fetchProducts}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}