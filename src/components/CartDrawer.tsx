import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-[#f2d4dc]">
          <h2 className="text-2xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Корзина
          </h2>
          <button onClick={onClose} className="text-[#8b5a6a] hover:text-[#2c1a1f]">
            <Icon name="X" size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-[#8b5a6a] text-sm">
            Корзина пуста
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#2c1a1f]">{item.name}</p>
                    <p className="text-sm text-[#8b5a6a]">{item.price} ₽</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-[#f8c8d4] text-[#2c1a1f] text-sm flex items-center justify-center hover:bg-[#f2a5b8]"
                      >
                        −
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-[#f8c8d4] text-[#2c1a1f] text-sm flex items-center justify-center hover:bg-[#f2a5b8]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#c97a90] hover:text-[#8b5a6a]"
                  >
                    <Icon name="Trash2" size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-[#f2d4dc]">
              <div className="flex justify-between mb-4">
                <span className="font-medium text-[#2c1a1f]">Итого:</span>
                <span className="font-semibold text-[#2c1a1f]">{totalPrice} ₽</span>
              </div>
              <button className="w-full bg-[#2c1a1f] text-white py-3 rounded-full text-sm tracking-wider hover:bg-[#8b5a6a] transition-colors">
                ОФОРМИТЬ ЗАКАЗ
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-2 text-[#c97a90] text-xs py-2 hover:text-[#8b5a6a]"
              >
                Очистить корзину
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
