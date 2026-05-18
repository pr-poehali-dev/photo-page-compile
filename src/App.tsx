import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CartProvider, useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";
import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import AboutPage from "@/pages/AboutPage";
import ContactsPage from "@/pages/ContactsPage";
import CartPage from "@/pages/CartPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Inner nav — only shown on non-home pages
const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalCount } = useCart();
  const isHome = location.pathname === "/";

  const linkClass = (path: string) =>
    `text-xs tracking-widest uppercase transition-colors whitespace-nowrap font-medium ${
      location.pathname === path
        ? "text-[#c97a90]"
        : "text-[#555] hover:text-[#c97a90]"
    }`;

  if (isHome) return <>{children}</>;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white border-b border-[#f2d4dc] px-8 py-3 flex items-center justify-between flex-shrink-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <button onClick={() => navigate("/")} className="hover:opacity-75 transition-opacity">
          <span className="text-2xl font-light tracking-[0.15em] text-[#1a0a0e]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            ЭП<span className="text-[#c97a90]">✳</span>КСИ
          </span>
        </button>

        <nav className="flex items-center gap-8">
          <button onClick={() => navigate("/catalog")} className={linkClass("/catalog")}>Каталог</button>
          <button onClick={() => navigate("/about")} className={linkClass("/about")}>О нас</button>
          <button onClick={() => navigate("/contacts")} className={linkClass("/contacts")}>Контакты</button>
        </nav>

        <button onClick={() => navigate("/cart")} className={`relative flex items-center gap-2 ${linkClass("/cart")}`}>
          <Icon name="ShoppingBag" size={16} />
          Корзина
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-[#f8c8d4] text-[#2c1a1f] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </button>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <InnerLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </InnerLayout>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;