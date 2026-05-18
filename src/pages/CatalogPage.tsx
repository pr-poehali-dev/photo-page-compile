import { useState } from "react";
import { products, categories, Review } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const StarRating = ({ value, onChange }: { value: number; onChange?: (v: number) => void }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => onChange?.(star)}
        className={`text-xl transition-colors leading-none ${
          star <= value ? "text-[#c97a90]" : "text-[#ddd]"
        } ${onChange ? "hover:text-[#f2a5b8] cursor-pointer" : "cursor-default"}`}
      >
        ★
      </button>
    ))}
  </div>
);

const avgRating = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  return Math.round(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length);
};

const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selected, setSelected] = useState<number | null>(null);
  const [tab, setTab] = useState<"desc" | "reviews">("desc");
  const [productReviews, setProductReviews] = useState<Record<number, Review[]>>(
    () => Object.fromEntries(products.map((p) => [p.id, p.reviews ?? []]))
  );
  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const [submitted, setSubmitted] = useState(false);
  const { addItem } = useCart();

  const filtered =
    activeCategory === "Все"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const selectedProduct = selected !== null ? products.find((p) => p.id === selected) : null;
  const reviews = selected !== null ? (productReviews[selected] ?? []) : [];
  const avg = avgRating(reviews);

  const openProduct = (id: number) => {
    setSelected(id);
    setTab("desc");
    setForm({ name: "", rating: 5, text: "" });
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text || selected === null) return;
    const newReview: Review = {
      id: Date.now(),
      name: form.name,
      rating: form.rating,
      text: form.text,
      date: new Date().toLocaleDateString("ru-RU"),
    };
    setProductReviews((prev) => ({
      ...prev,
      [selected]: [newReview, ...(prev[selected] ?? [])],
    }));
    setForm({ name: "", rating: 5, text: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
        {filtered.map((product) => {
          const r = productReviews[product.id] ?? [];
          const rating = avgRating(r);
          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
              onClick={() => openProduct(product.id)}
            >
              <div className="relative aspect-square bg-[#fde8ed]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isSale && (
                    <span className="bg-[#c97a90] text-white text-[10px] px-2 py-0.5 rounded-full">−20%</span>
                  )}
                  {product.isNew && (
                    <span className="bg-[#2c1a1f] text-white text-[10px] px-2 py-0.5 rounded-full">Новинка</span>
                  )}
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-[#2c1a1f]">{product.name}</p>
                <p className="text-xs text-[#8b5a6a] mt-0.5">{product.category}</p>
                {/* Рейтинг на карточке */}
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className={`text-sm leading-none ${s <= rating ? "text-[#c97a90]" : "text-[#ddd]"}`}>★</span>
                    ))}
                  </div>
                  <span className="text-[10px] text-[#aaa]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {r.length > 0 ? `${r.length} отз.` : "нет отзывов"}
                  </span>
                </div>
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
                      addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
                    }}
                    className="w-8 h-8 rounded-full bg-[#f8c8d4] hover:bg-[#f2a5b8] flex items-center justify-center transition-colors"
                  >
                    <Icon name="ShoppingBag" size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Product modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl flex flex-col"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Фото */}
            <div className="relative aspect-square bg-[#fde8ed] flex-shrink-0" style={{ maxHeight: 240 }}>
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

            {/* Заголовок + цена */}
            <div className="px-6 pt-5 pb-3 flex-shrink-0">
              <h3 className="text-2xl font-light text-[#1a0a0e]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {selectedProduct.name}
              </h3>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-1.5">
                  <StarRating value={avg} />
                  <span className="text-xs text-[#aaa]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {reviews.length > 0 ? `${reviews.length} отз.` : "нет отзывов"}
                  </span>
                </div>
                <div>
                  <span className="text-xl font-semibold text-[#c97a90]">{selectedProduct.price} ₽</span>
                  {selectedProduct.oldPrice && (
                    <span className="ml-2 text-sm text-[#aaa] line-through">{selectedProduct.oldPrice} ₽</span>
                  )}
                </div>
              </div>
            </div>

            {/* Вкладки */}
            <div className="flex border-b border-[#f2d4dc] flex-shrink-0 px-6">
              {(["desc", "reviews"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`pb-2 mr-6 text-xs tracking-widest uppercase transition-colors border-b-2 ${
                    tab === t
                      ? "border-[#c97a90] text-[#c97a90]"
                      : "border-transparent text-[#aaa] hover:text-[#8b5a6a]"
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t === "desc" ? "Описание" : `Отзывы (${reviews.length})`}
                </button>
              ))}
            </div>

            {/* Контент вкладки */}
            <div className="overflow-y-auto flex-1 px-6 py-4">
              {tab === "desc" && (
                <>
                  <p className="text-xs text-[#8b5a6a] mb-1">{selectedProduct.category}</p>
                  <p className="text-sm text-[#555] leading-relaxed">{selectedProduct.description}</p>
                  <button
                    onClick={() => {
                      addItem({ id: selectedProduct.id, name: selectedProduct.name, price: selectedProduct.price, image: selectedProduct.image });
                      setSelected(null);
                    }}
                    className="mt-6 w-full bg-[#2c1a1f] text-white py-3 rounded-full text-xs tracking-widest uppercase hover:bg-[#8b5a6a] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    В корзину
                  </button>
                </>
              )}

              {tab === "reviews" && (
                <div className="space-y-5">
                  {/* Список отзывов */}
                  {reviews.length === 0 && (
                    <p className="text-sm text-[#aaa] text-center py-4">Пока нет отзывов. Будьте первой!</p>
                  )}
                  {reviews.map((rv) => (
                    <div key={rv.id} className="bg-[#fde8ed] rounded-2xl p-4">
                      <div className="flex items-start justify-between mb-1.5">
                        <p className="text-sm font-semibold text-[#2c1a1f]">{rv.name}</p>
                        <p className="text-[10px] text-[#aaa]">{rv.date}</p>
                      </div>
                      <StarRating value={rv.rating} />
                      <p className="text-sm text-[#333] leading-relaxed mt-2">{rv.text}</p>
                    </div>
                  ))}

                  {/* Форма нового отзыва */}
                  <div className="border-t border-[#f2d4dc] pt-4 mt-4">
                    <p className="text-xs tracking-widest uppercase text-[#8b5a6a] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Оставить отзыв
                    </p>
                    {submitted && (
                      <div className="bg-[#fde8ed] text-[#c97a90] text-xs text-center py-2 rounded-xl mb-3">
                        Спасибо за ваш отзыв! 🌸
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-[#f2d4dc] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c97a90]"
                        placeholder="Ваше имя"
                        required
                      />
                      <div>
                        <p className="text-xs text-[#8b5a6a] mb-1">Оценка</p>
                        <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                      </div>
                      <textarea
                        value={form.text}
                        onChange={(e) => setForm({ ...form, text: e.target.value })}
                        className="w-full border border-[#f2d4dc] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c97a90] h-24 resize-none"
                        placeholder="Поделитесь впечатлением..."
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#2c1a1f] text-white py-2.5 rounded-full text-xs tracking-widest uppercase hover:bg-[#8b5a6a] transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Отправить
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
