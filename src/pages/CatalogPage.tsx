import { useState } from "react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selected, setSelected] = useState<number | null>(null);
  const { addItem } = useCart();

  const filtered =
    activeCategory === "Все"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const selectedProduct = selected !== null ? products.find((p) => p.id === selected) : null;

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h1
        className="text-5xl font-light text-center text-[#1a0a0e] tracking-widest uppercase mb-8"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Каталог
      </h1>

      {/* Category filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-colors ${
              activeCategory === cat
                ? "bg-[#2c1a1f] text-white"
                : "border border-[#c97a90] text-[#c97a90] hover:bg-[#fde8ed]"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
            onClick={() => setSelected(product.id)}
          >
            <div className="relative aspect-square bg-[#fde8ed]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {product.isSale && (
                  <span className="bg-[#c97a90] text-white text-[10px] px-2 py-0.5 rounded-full">
                    −20%
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-[#2c1a1f] text-white text-[10px] px-2 py-0.5 rounded-full">
                    Новинка
                  </span>
                )}
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-[#2c1a1f]">{product.name}</p>
              <p className="text-xs text-[#8b5a6a] mt-0.5">{product.category}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#c97a90] font-semibold">{product.price} ₽</span>
                  {product.oldPrice && (
                    <span className="text-[#aaa] text-xs line-through">{product.oldPrice} ₽</span>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    });
                  }}
                  className="w-8 h-8 rounded-full bg-[#f8c8d4] hover:bg-[#f2a5b8] flex items-center justify-center transition-colors"
                >
                  <Icon name="ShoppingBag" size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square bg-[#fde8ed]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="p-6">
              <h3
                className="text-2xl font-light text-[#1a0a0e]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {selectedProduct.name}
              </h3>
              <p className="text-xs text-[#8b5a6a] mt-1">{selectedProduct.category}</p>
              <p className="text-sm text-[#555] mt-3 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <span className="text-2xl font-semibold text-[#c97a90]">
                    {selectedProduct.price} ₽
                  </span>
                  {selectedProduct.oldPrice && (
                    <span className="ml-2 text-sm text-[#aaa] line-through">
                      {selectedProduct.oldPrice} ₽
                    </span>
                  )}
                </div>
                <button
                  onClick={() => {
                    addItem({
                      id: selectedProduct.id,
                      name: selectedProduct.name,
                      price: selectedProduct.price,
                      image: selectedProduct.image,
                    });
                    setSelected(null);
                  }}
                  className="bg-[#2c1a1f] text-white px-6 py-2.5 rounded-full text-xs tracking-widest uppercase hover:bg-[#8b5a6a] transition-colors"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
