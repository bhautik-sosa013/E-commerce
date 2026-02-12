import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: 0,
    status: "in-stock",
    models: "", // We will split this string into an array
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Clean up the data before sending to Firebase
      const productToSave = {
        ...formData,
        price: Number(formData.price), // Ensure it's a number
        models: formData.models.split(",").map((m) => m.trim()), // Convert "i15, i15 Pro" -> ["i15", "i15 Pro"]
      };

      await addDoc(collection(db, "products"), productToSave);
      alert("Product added successfully!");

      // Reset form
      setFormData({
        name: "",
        description: "",
        imageUrl: "",
        price: 0,
        status: "in-stock",
        models: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="max-w-2xl mx-auto border p-8 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Add New ZAYQ Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Midnight Matte Case"
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-1">
              Description
            </label>
            <textarea
              placeholder="Premium silk finish..."
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              value={formData.description}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase mb-1">
                Price (₹)
              </label>
              <input
                aria-label="000"
                type="number"
                className="w-full p-3 border rounded-lg"
                onChange={(e) =>
                  setFormData({ ...formData, price: Number(e.target.value) })
                }
                value={formData.price}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">
                Status
              </label>
              <select
                className="w-full p-3 border rounded-lg"
                aria-label="Stock"
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                value={formData.status}
              >
                <option value="in-stock">In Stock</option>
                <option value="coming-soon">Coming Soon</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-1">
              Image URL
            </label>
            <input
              type="text"
              placeholder="https://..."
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
              value={formData.imageUrl}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-1">
              Compatible Models (comma separated)
            </label>
            <input
              type="text"
              placeholder="iPhone 15, iPhone 15 Pro"
              className="w-full p-3 border rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, models: e.target.value })
              }
              value={formData.models}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors"
          >
            Upload to Shop
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
