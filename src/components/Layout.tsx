import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { totalCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-xs tracking-widest uppercase transition-colors whitespace-nowrap ${
      isActive(path)
        ? "text-[#c97a90] font-semibold"
        : "text-[#555] hover:text-[#c97a90]"
    }`;

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Slim top nav bar — no branch, no big header */}
      <header className="bg-white border-b border-[#f2d4dc] px-8 py-3 flex items-center justify-between flex-shrink-0">
        {/* Logo left */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <span
            className="text-2xl font-light tracking-[0.15em] text-[#1a0a0e]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ЭП<span className="text-[#c97a90]">✳</span>КСИ
          </span>
        </button>

        {/* Nav center */}
        <nav className="flex items-center gap-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <button onClick={() => navigate("/catalog")} className={linkClass("/catalog")}>
            Каталог
          </button>
          <button onClick={() => navigate("/about")} className={linkClass("/about")}>
            О нас
          </button>
          <button onClick={() => navigate("/reviews")} className={linkClass("/reviews")}>
            Отзывы
          </button>
          <button onClick={() => navigate("/contacts")} className={linkClass("/contacts")}>
            Контакты
          </button>
        </nav>

        {/* Cart right */}
        <button
          onClick={() => navigate("/cart")}
          className="relative flex items-center gap-2 text-xs tracking-widest uppercase text-[#555] hover:text-[#c97a90] transition-colors"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <Icon name="ShoppingBag" size={18} />
          <span className={isActive("/cart") ? "text-[#c97a90] font-semibold" : ""}>
            Корзина
          </span>
          {totalCount > 0 && (
            <span className="absolute -top-1 -right-3 bg-[#f8c8d4] text-[#2c1a1f] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </button>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
