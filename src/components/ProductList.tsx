import type { Category, Product } from "../types";

import { Plus } from "lucide-react";
import React from "react";
import { products } from "../data/products";

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = React.useState<Category>("Todos");
  const categories: Category[] = ["Todos", "Camisetas", "Tazas", "Gorras", "Accesorios"];

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black mb-4">
            Nuestro <span className="gradient-text">Catálogo</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige tu producto y agrégalo al carrito.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition ${
                activeCategory === c
                  ? "bg-violet-600 text-white shadow"
                  : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-black text-gray-800">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black gradient-text">${product.price}</span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold transition"
                  >
                    <Plus className="w-4 h-4" />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
