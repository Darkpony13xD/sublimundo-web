import { MessageCircle, Minus, Plus, Trash2, X } from "lucide-react";

import type { CartItem } from "../types";
import React from "react";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-2xl font-black flex items-center gap-2">
            Tu Carrito <span className="text-gray-400 font-normal">({items.length})</span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-gray-600">Tu carrito está vacío 👀</p>
              <p className="text-gray-400 text-sm mt-2">Agrega algo del catálogo.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 border border-gray-100 rounded-2xl p-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="font-black">{item.name}</p>
                      <p className="text-gray-500 text-sm">${item.price}</p>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="p-2 hover:bg-gray-100 rounded-xl">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-black">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, +1)}
                        className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-black">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 font-semibold">Total</span>
            <span className="text-2xl font-black gradient-text">${total}</span>
          </div>

          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-black transition"
            rel="noreferrer"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir por WhatsApp
          </a>

          <p className="text-xs text-gray-400 mt-3">
            Cambia el número en el link de WhatsApp por el tuyo 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
