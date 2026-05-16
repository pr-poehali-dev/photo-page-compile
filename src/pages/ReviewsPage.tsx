import { useState } from "react";

const initialReviews = [
  {
    id: 1,
    name: "Анастасия",
    rating: 5,
    text: "Заказала брелок с котиками — просто восторг! Качество отличное, смола прозрачная, фурнитура крепкая. Уже делаю второй заказ 🐱",
    date: "12.05.2026",
    product: "Брелок «Три котика»",
  },
  {
    id: 2,
    name: "Маша",
    rating: 5,
    text: "Серёжки «Сакура» — это что-то невероятное! На солнце переливаются, все спрашивают где купила. Очень нежно и изящно.",
    date: "08.05.2026",
    product: "Серьги «Сакура»",
  },
  {
    id: 3,
    name: "Юля",
    rating: 5,
    text: "Подарила подруге кулон на день рождения. Упаковка красивая, изделие идеальное. Мастера молодцы, всё с душой делают!",
    date: "01.05.2026",
    product: "Кулон с цветами",
  },
  {
    id: 4,
    name: "Катерина",
    rating: 4,
    text: "Брелок получила быстро. Очень красивый! Единственное — хотелось бы больше цветов. Но в целом очень довольна.",
    date: "25.04.2026",
    product: "Брелок «Цветок»",
  },
];

const StarRating = ({ value, onChange }: { value: number; onChange?: (v: number) => void }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          className={`text-2xl transition-colors ${
            star <= value ? "text-[#f8c8d4]" : "text-[#ddd]"
          } ${onChange ? "hover:text-[#f2a5b8] cursor-pointer" : "cursor-default"}`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: "", rating: 5, text: "", product: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    setReviews((prev) => [
      {
        id: Date.now(),
        name: form.name,
        rating: form.rating,
        text: form.text,
        date: new Date().toLocaleDateString("ru-RU"),
        product: form.product || "",
      },
      ...prev,
    ]);
    setForm({ name: "", rating: 5, text: "", product: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h1
        className="text-5xl font-light text-center text-[#1a0a0e] tracking-widest uppercase mb-3"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Отзывы
      </h1>
      <p className="text-center text-sm text-[#8b5a6a] mb-10">
        Что говорят наши покупательницы
      </p>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {reviews.map((review) => (
          <div key={review.id} className="bg-[#fde8ed] rounded-2xl p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-semibold text-[#2c1a1f] text-sm">{review.name}</p>
                {review.product && (
                  <p className="text-xs text-[#8b5a6a] mt-0.5">{review.product}</p>
                )}
              </div>
              <p className="text-xs text-[#aaa]">{review.date}</p>
            </div>
            <StarRating value={review.rating} />
            <p className="text-sm text-[#333] leading-relaxed mt-3">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Leave review form */}
      <div className="bg-white border border-[#f2d4dc] rounded-3xl p-8 max-w-lg mx-auto">
        <h2
          className="text-2xl font-light text-[#1a0a0e] mb-6 text-center"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Оставить отзыв
        </h2>

        {submitted && (
          <div className="bg-[#fde8ed] text-[#c97a90] text-sm text-center py-3 px-4 rounded-xl mb-4">
            Спасибо за ваш отзыв! 🌸
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-[#8b5a6a] uppercase tracking-widest block mb-1">
              Ваше имя *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-[#f2d4dc] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c97a90]"
              placeholder="Анастасия"
              required
            />
          </div>
          <div>
            <label className="text-xs text-[#8b5a6a] uppercase tracking-widest block mb-1">
              Товар
            </label>
            <input
              type="text"
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              className="w-full border border-[#f2d4dc] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c97a90]"
              placeholder="Брелок «Три котика»"
            />
          </div>
          <div>
            <label className="text-xs text-[#8b5a6a] uppercase tracking-widest block mb-2">
              Оценка
            </label>
            <StarRating value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
          </div>
          <div>
            <label className="text-xs text-[#8b5a6a] uppercase tracking-widest block mb-1">
              Отзыв *
            </label>
            <textarea
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              className="w-full border border-[#f2d4dc] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#c97a90] h-28 resize-none"
              placeholder="Поделитесь впечатлением..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2c1a1f] text-white py-3 rounded-full text-xs tracking-widest uppercase hover:bg-[#8b5a6a] transition-colors"
          >
            Отправить отзыв
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsPage;
