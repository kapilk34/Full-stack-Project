import React, { useState, useEffect } from 'react';

const ProductForm = ({ selected, onSave }) => {
  const [form, setForm] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: '', price: '', description: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-60rm mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4 border"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        {selected ? 'Edit Product' : 'Add New Product'}
      </h2>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-600">
          Product Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter product name"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-600">
          Price (₹)
        </label>
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Enter price"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-600">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter product description"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          rows={3}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300"
        >
          {selected ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;

