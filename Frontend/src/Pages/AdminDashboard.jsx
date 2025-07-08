import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../Api/ProductApi';
import ProductForm from '../Components/ProductForm';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  const handleSave = async (product) => {
    if (product._id) {
      await updateProduct(product._id, product);
    } else {
      await createProduct(product);
    }
    setSelected(null);
    loadProducts();
  };

  const handleEdit = (product) => {
    setSelected(product);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // optional UX improvement
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          🛍️ Admin Product Dashboard
        </h1>

        <div className="mb-10">
          <ProductForm selected={selected} onSave={handleSave} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p._id} className="bg-white shadow-md rounded-xl p-5 border border-gray-200 flex flex-col justify-between">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {p.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {p.description}
                </p>
                <span className="inline-block text-green-600 font-medium">
                  ₹{p.price}
                </span>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
