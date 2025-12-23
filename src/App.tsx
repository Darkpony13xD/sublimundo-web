import type { CartItem, Product } from "./types";
import React, { useCallback, useState } from "react";

import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} toggleCart={() => setIsCartOpen(true)} />

      {/* Para que el navbar fijo no tape el Hero */}
      <div id="inicio" className="pt-20">
        <Hero />
      </div>

      {/* Features (como el anterior) */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
            <div className="flex-1 space-y-4">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-black">Entrega Veloz</h3>
              <p className="text-gray-500">
                Tus pedidos listos en tiempo récord con la mejor logística de envío.
              </p>
            </div>

            <div className="flex-1 space-y-4">
              <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-black">Diseños Únicos</h3>
              <p className="text-gray-500">
                Personaliza a tu estilo: logos, personajes, frases y más.
              </p>
            </div>

            <div className="flex-1 space-y-4">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-2xl font-black">Calidad Premium</h3>
              <p className="text-gray-500">
                Materiales de grado A+ para durabilidad y color vibrante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ojo: tu Navbar apunta a #nosotros */}
      <div id="nosotros">
        <AboutUs />
      </div>

      {/* ProductList ya tiene id="productos" adentro */}
      <ProductList onAddToCart={addToCart} />

      {/* ✅ Contact antes del footer */}
      <Contact whatsappNumber="5215512345678" />

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />

      {/* WhatsApp flotante mobile (como el anterior) */}
      <a
        href="https://wa.me/5215512345678"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl animate-bounce hover:scale-110 transition-transform md:hidden"
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.8-1.588-5.833 0-6.479 5.289-11.748 11.785-11.748 3.159 0 6.117 1.234 8.344 3.463 2.227 2.229 3.451 5.192 3.451 8.35 0 6.479-5.289 11.748-11.785 11.748-1.955 0-3.89-.51-5.6-1.476l-6.294 1.649zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.886-9.885 0-2.639-1.03-5.122-2.904-6.997-1.875-1.875-4.362-2.906-7.003-2.906-5.448 0-9.886 4.434-9.886 9.885 0 2.225.651 3.891 1.746 5.634l-.999 3.648 3.913-1.021zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.668.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.668-1.611-.916-2.206-.242-.579-.487-.5-.668-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
