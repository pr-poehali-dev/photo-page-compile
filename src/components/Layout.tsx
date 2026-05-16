import { ReactNode, useState } from "react";
import { useCart } from "@/context/CartContext";
import SakuraBranch from "@/components/SakuraBranch";
import CartDrawer from "@/components/CartDrawer";
import Icon from "@/components/ui/icon";

type Page = "home" | "catalog" | "about" | "reviews" | "contacts" | "cart";

interface LayoutProps {
  children: ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Layout = ({ children, currentPage, onNavigate }: LayoutProps) => {
  const { totalCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: "корзина", page: "cart" },
    { label: "контакты", page: "contacts" },
    { label: "отзывы", page: "reviews" },
    { label: "каталог", page: "catalog" },
    { label: "о нас", page: "about" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative overflow-hidden bg-white border-b border-[#f2d4dc]">
        <div className="flex items-stretch min-h-[160px]">
          {/* Branch + nav */}
          <div className="relative w-[300px] flex-shrink-0">
            <SakuraBranch className="absolute inset-0 w-full h-full" />
            {/* Nav labels positioned over the branch */}
            <nav className="absolute inset-0 flex flex-col justify-between py-4 pl-6 pr-2">
              <div className="flex gap-6 pt-2 pl-16">
                <button
                  onClick={() => onNavigate("cart")}
                  className={`branch-nav-item relative ${currentPage === "cart" ? "font-semibold text-[#8b5a6a]" : ""}`}
                >
                  кор-<br />зина
                  {totalCount > 0 && (
                    <span className="absolute -top-1 -right-3 bg-[#f8c8d4] text-[#2c1a1f] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {totalCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => onNavigate("contacts")}
                  className={`branch-nav-item ${currentPage === "contacts" ? "font-semibold text-[#8b5a6a]" : ""}`}
                >
                  кон-<br />такты
                </button>
              </div>
              <div className="flex gap-6 pl-0 pb-2">
                <button
                  onClick={() => onNavigate("reviews")}
                  className={`branch-nav-item ${currentPage === "reviews" ? "font-semibold text-[#8b5a6a]" : ""}`}
                >
                  отзы-<br />вы
                </button>
              </div>
              <div className="flex gap-6 pl-14 pb-4">
                <button
                  onClick={() => onNavigate("catalog")}
                  className={`branch-nav-item ${currentPage === "catalog" ? "font-semibold text-[#8b5a6a]" : ""}`}
                >
                  ката-<br />лог
                </button>
              </div>
              <div className="flex gap-6 pl-2 pb-2">
                <button
                  onClick={() => onNavigate("about")}
                  className={`branch-nav-item ${currentPage === "about" ? "font-semibold text-[#8b5a6a]" : ""}`}
                >
                  о нас
                </button>
              </div>
            </nav>
          </div>

          {/* Logo area */}
          <div className="flex-1 flex flex-col items-end justify-start pt-6 pr-8">
            <button
              onClick={() => onNavigate("home")}
              className="text-right hover:opacity-80 transition-opacity"
            >
              <div
                className="text-5xl font-light tracking-[0.15em] text-[#1a0a0e]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ЭП<span className="text-[#c97a90]">✳</span>КСИ
              </div>
              <div
                className="text-[10px] tracking-[0.25em] text-[#8b5a6a] mt-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                МАГАЗИН ОРИГИНАЛЬНЫХ УКРАШЕНИЙ ИЗ<br />ЭПОКСИДНОЙ СМОЛЫ
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main>{children}</main>

      {/* Cart drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Layout;
