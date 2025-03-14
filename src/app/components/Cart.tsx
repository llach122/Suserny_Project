// app/components/Cart.tsx
'use client';

import React from 'react';
import { X, ShoppingCart, Mail, CreditCard } from 'lucide-react';
import { useCartStore, CartItem } from './store/CartStore';

export function Cart() {
  const { items, isCartOpen, toggleCart, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRequestQuote = () => {
    const itemsList = items
      .map((item) => `${item.name} (${item.quantity}) - $${item.price * item.quantity}`)
      .join('\n');
    const mailtoLink = `mailto:info@reflejo.com?subject=Solicitud de Cotización&body=Hola, me gustaría solicitar una cotización para los siguientes productos:%0D%0A%0D%0A${encodeURIComponent(
      itemsList
    )}%0D%0A%0D%0ATotal: $${total}`;
    window.location.href = mailtoLink;
  };

  // ... existing code ...
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm">
      {/* Cart content - same as current implementation */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">

        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-light flex items-center gap-2">
              <ShoppingCart size={24} />
              Carrito
            </h2>
            <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-auto">
            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-8">El carrito está vacío</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    onRemove={removeItem}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t pt-4 mt-4">
              <div className="flex text-black justify-between text-xl mb-6">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => alert('Procesando pago...')}
                  className="w-full bg-black text-white py-3 flex items-center justify-center gap-2 hover:bg-gray-800"
                >
                  <CreditCard size={20} />
                  Comprar Ahora
                </button>
                <button
                  onClick={handleRequestQuote}
                  className="w-full border border-black text-black py-3 flex items-center justify-center gap-2 hover:bg-gray-50"
                >
                  <Mail size={20} />
                  Solicitar Cotización
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CartItemComponent({
  item,
  onRemove,
  onUpdateQuantity,
}: {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}) {
  return (
    <div className="flex gap-4 border-b pb-4">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <select
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}