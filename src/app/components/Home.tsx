// app/page.tsx
'use client';

import React from 'react';
import { ChevronDown, Instagram, Facebook, Twitter, Mail, Phone, MapPin, GalleryHorizontalEnd, ShoppingCart } from 'lucide-react';
import { useCartStore } from './store/CartStore';
import { Cart } from './Cart';
import Image from 'next/image';

const products = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&q=80",
    name: "AURORA",
    description: "Espejo circular con iluminación LED integrada",
    price: 299.99
  },
  // ... other products
];

export default function Main() {
  const { toggleCart, addItem, items } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Cart */}
      <header className="fixed top-0 right-0 m-6 z-40">
        <button
          onClick={toggleCart}
          className="bg-black text-white p-3 rounded-full relative hover:bg-gray-800"
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </header>

            {/* Hero Section */}
            <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=1920")',
        }}
      >
        {/* Hero content - same as current implementation */}
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start">
            <h1 className="text-6xl font-light text-white mb-4">REFLEJO</h1>
            <p className="text-xl text-white mb-8 max-w-lg">Transformamos espacios con espejos de diseño exclusivo, donde cada reflejo cuenta una historia de elegancia y estilo.</p>
            <button className="bg-white text-black px-8 py-3 flex items-center gap-2 hover:bg-opacity-90 transition-all">
              Explorar Colección
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        {/* Products content - same as current implementation */}
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-16 text-center">COLECCIÓN COMPLETA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-transparent hover:bg-black/20 group-hover:bg-black/20 transition-all duration-300" />
              </div>
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-lg font-medium mt-2">${product.price}</p>
                  </div>
                  <button
                    onClick={() => addItem(product)}
                    className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About, Contact, and Footer sections - same as current implementation */}
      {/* ... */}

      {/* Shopping Cart */}
      <Cart />
    </div>
  );
}