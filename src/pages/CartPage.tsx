import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const CartPage = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="px-6 py-20 max-w-3xl mx-auto text-center">
        <div className="text-6xl mb-6">🛍️</div>
        <h1
          className="text-4xl font-light text-[#1a0a0e] tracking-widest uppercase mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Корзина пуста
        </h1>
        <p className="text-sm text-[#8b5a6a] mb-8">
          Посмотрите наш каталог — там точно что-то понравится
        </p>
        <button
          onClick={() => navigate("/catalog")}
          className="bg-[#2c1a1f] text-white px-8 py-3 rounded-full text-xs tracking-widest uppercase hover:bg-[#8b5a6a] transition-colors"
        >
          Перейти в каталог
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1
        className="text-5xl font-light text-center text-[#1a0a0e] tracking-widest uppercase mb-10"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Корзина
      </h1>

      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 items-center bg-[#fde8ed] rounded-2xl p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#2c1a1f] truncate">{item.name}</p>
              <p className="text-sm text-[#c97a90] font-semibold mt-1">{item.price} ₽</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-7 h-7 rounded-full bg-white text-[#2c1a1f] text-sm flex items-center justify-center hover:bg-[#f2a5b8] transition-colors"
                >
                  −
                </button>
                <span className="text-sm w-6 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-7 h-7 rounded-full bg-white text-[#2c1a1f] text-sm flex items-center justify-center hover:bg-[#f2a5b8] transition-colors"
                >
                  +
                </button>
                <span className="ml-2 text-sm text-[#8b5a6a]">
                  = {item.price * item.quantity} ₽
                </span>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-[#c97a90] hover:text-[#8b5a6a] flex-shrink-0"
            >
              <Icon name="Trash2" size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white border border-[#f2d4dc] rounded-3xl p-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#555]">Товаров:</span>
          <span className="text-[#2c1a1f]">{items.reduce((s, i) => s + i.quantity, 0)} шт.</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t border-[#f2d4dc] pt-4 mt-4">
          <span className="text-[#2c1a1f]">Итого:</span>
          <span className="text-[#c97a90]">{totalPrice} ₽</span>
        </div>

        {/* CTA: Связаться */}
        <button
          onClick={() => navigate("/contacts")}
          className="w-full mt-6 bg-[#c97a90] text-white py-3.5 rounded-full text-sm tracking-widest uppercase hover:bg-[#8b5a6a] transition-colors flex items-center justify-center gap-2"
        >
          <Icon name="MessageCircle" size={16} />
          Связаться
        </button>

        <p className="text-center text-xs text-[#aaa] mt-3">
          Напишите нам — поможем оформить заказ
        </p>

        <button
          onClick={clearCart}
          className="w-full mt-4 text-xs text-[#bbb] hover:text-[#c97a90] transition-colors"
        >
          Очистить корзину
        </button>
      </div>
    </div>
  );
};

export default CartPage;
