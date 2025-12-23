import { Menu, ShoppingCart, X } from "lucide-react";

import React from "react";

interface NavbarProps {
  cartCount: number;
  toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Sublimundo" className="h-12 w-12 rounded-xl object-cover" />
            <h1 className="text-2xl font-black gradient-text">Sublimundo Textil</h1>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10 font-semibold text-gray-700">
            <a href="#nosotros" className="hover:text-violet-600 transition-colors">
              Nosotros
            </a>
            <a href="#productos" className="hover:text-violet-600 transition-colors">
              Productos
            </a>
            <a href="#contacto" className="hover:text-violet-600 transition-colors">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-violet-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-5">
            <div className="flex flex-col gap-3 font-semibold text-gray-700">
              <a onClick={() => setIsMenuOpen(false)} href="#nosotros" className="py-2 hover:text-violet-600">
                Nosotros
              </a>
              <a onClick={() => setIsMenuOpen(false)} href="#productos" className="py-2 hover:text-violet-600">
                Productos
              </a>
              <a onClick={() => setIsMenuOpen(false)} href="#contacto" className="py-2 hover:text-violet-600">
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
