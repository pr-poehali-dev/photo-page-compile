import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import SakuraBranch from "@/components/SakuraBranch";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { totalCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (path: string) => location.pathname === path;

  const navItemClass = (path: string) =>
    `branch-nav-item whitespace-nowrap relative transition-colors ${
      isActive(path) ? "font-semibold text-[#8b5a6a]" : ""
    }`;

  if (isHome) {
    // Главная — полностью отдельный layout без шапки
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Compact header for inner pages */}
      <header className="relative overflow-hidden bg-white border-b border-[#f2d4dc]">
        <div className="flex items-stretch min-h-[160px]">
          {/* Branch + nav */}
          <div className="relative w-[320px] flex-shrink-0">
            <SakuraBranch className="absolute inset-0 w-full h-full" />
            <nav className="absolute inset-0">
              {/* Top row: корзина + контакты */}
              <div className="absolute top-[18px] left-[110px] flex gap-8">
                <button onClick={() => navigate("/cart")} className={navItemClass("/cart")}>
                  корзина
                  {totalCount > 0 && (
                    <span className="absolute -top-1 -right-3 bg-[#f8c8d4] text-[#2c1a1f] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {totalCount}
                    </span>
                  )}
                </button>
                <button onClick={() => navigate("/contacts")} className={navItemClass("/contacts")}>
                  контакты
                </button>
              </div>

              {/* Left: отзывы */}
              <div className="absolute top-[72px] left-[4px]">
                <button onClick={() => navigate("/reviews")} className={navItemClass("/reviews")}>
                  отзывы
                </button>
              </div>

              {/* Mid: каталог */}
              <div className="absolute top-[118px] left-[100px]">
                <button onClick={() => navigate("/catalog")} className={navItemClass("/catalog")}>
                  каталог
                </button>
              </div>

              {/* Bottom: о нас */}
              <div className="absolute bottom-[14px] left-[4px]">
                <button onClick={() => navigate("/about")} className={navItemClass("/about")}>
                  о нас
                </button>
              </div>
            </nav>
          </div>

          {/* Logo */}
          <div className="flex-1 flex flex-col items-end justify-start pt-6 pr-8">
            <button
              onClick={() => navigate("/")}
              className="text-right hover:opacity-80 transition-opacity"
            >
              <div
                className="text-5xl font-light tracking-[0.15em] text-[#1a0a0e]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ЭП<span className="text-[#c97a90]">✳</span>КСИ
              </div>
              <div
                className="text-[10px] tracking-[0.25em] text-[#8b5a6a] mt-1 text-right"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                МАГАЗИН ОРИГИНАЛЬНЫХ УКРАШЕНИЙ ИЗ<br />ЭПОКСИДНОЙ СМОЛЫ
              </div>
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
