import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { totalCount } = useCart();

  const font = { fontFamily: "'Cormorant Garamond', serif" };
  const mono = { fontFamily: "'Montserrat', sans-serif" };

  return (
    <div className="w-screen h-screen overflow-hidden bg-white flex flex-col">

      {/* ── ВЕРХНЯЯ ЧАСТЬ: ветка + логотип ── */}
      <div className="relative flex-1 min-h-0">

        {/* SVG ветка */}
        <svg
          viewBox="0 0 480 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 h-full w-[44%]"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M25 420 Q60 360 110 305 Q155 255 185 205 Q210 162 230 118 Q248 80 268 45 Q280 22 295 5"
            stroke="#111" strokeWidth="10" strokeLinecap="round" fill="none"/>
          <path d="M110 305 Q78 282 50 262 Q25 245 2 238"
            stroke="#111" strokeWidth="6.5" strokeLinecap="round" fill="none"/>
          <path d="M185 205 Q218 195 248 185 Q275 176 298 168"
            stroke="#111" strokeWidth="6" strokeLinecap="round" fill="none"/>
          <path d="M240 105 Q272 90 305 76 Q333 64 360 52"
            stroke="#111" strokeWidth="5" strokeLinecap="round" fill="none"/>

          {/* Цветок верхушка */}
          <g transform="translate(295,3)">
            <circle cx="0" cy="-12" r="10" fill="#f8c8d4" opacity="0.9"/><circle cx="11" cy="-4" r="10" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="7" cy="9" r="10" fill="#f8c8d4" opacity="0.9"/><circle cx="-7" cy="9" r="10" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="-11" cy="-4" r="10" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="0" cy="0" r="5.5" fill="#fce8ef"/><circle cx="0" cy="0" r="2" fill="#d08090"/>
          </g>
          {/* Цветок корзина/контакты */}
          <g transform="translate(362,50)">
            <circle cx="0" cy="-10" r="9" fill="#f8c8d4" opacity="0.9"/><circle cx="10" cy="-3" r="9" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="6" cy="8" r="9" fill="#f8c8d4" opacity="0.9"/><circle cx="-6" cy="8" r="9" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="-10" cy="-3" r="9" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="0" cy="0" r="5" fill="#fce8ef"/><circle cx="0" cy="0" r="2" fill="#d08090"/>
          </g>
          {/* Цветок каталог */}
          <g transform="translate(298,165)">
            <circle cx="0" cy="-9" r="8.5" fill="#f8c8d4" opacity="0.9"/><circle cx="9" cy="-3" r="8.5" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="6" cy="8" r="8.5" fill="#f8c8d4" opacity="0.9"/><circle cx="-6" cy="8" r="8.5" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="-9" cy="-3" r="8.5" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="0" cy="0" r="4.5" fill="#fce8ef"/><circle cx="0" cy="0" r="2" fill="#d08090"/>
          </g>
          {/* Цветок отзывы */}
          <g transform="translate(1,236)">
            <circle cx="0" cy="-10" r="9.5" fill="#f8c8d4" opacity="0.9"/><circle cx="10" cy="-3" r="9.5" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="7" cy="9" r="9.5" fill="#f8c8d4" opacity="0.9"/><circle cx="-7" cy="9" r="9.5" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="-10" cy="-3" r="9.5" fill="#f8c8d4" opacity="0.9"/>
            <circle cx="0" cy="0" r="5" fill="#fce8ef"/><circle cx="0" cy="0" r="2" fill="#d08090"/>
          </g>
          {/* Цветок о нас */}
          <g transform="translate(48,390)">
            <circle cx="0" cy="-12" r="11" fill="#f8c8d4" opacity="0.85"/><circle cx="12" cy="-4" r="11" fill="#f8c8d4" opacity="0.85"/>
            <circle cx="7" cy="10" r="11" fill="#f8c8d4" opacity="0.85"/><circle cx="-7" cy="10" r="11" fill="#f8c8d4" opacity="0.85"/>
            <circle cx="-12" cy="-4" r="11" fill="#f8c8d4" opacity="0.85"/>
            <circle cx="0" cy="0" r="6" fill="#fce8ef"/><circle cx="0" cy="0" r="2.2" fill="#d08090"/>
          </g>
        </svg>

        {/* Навигация поверх ветки */}
        <nav className="absolute inset-0 pointer-events-none" style={mono}>
          {/* корзина + контакты */}
          <div className="absolute pointer-events-auto flex gap-7 items-center" style={{ top: "14%", left: "24%" }}>
            <button onClick={() => navigate("/cart")}
              className="relative text-[13px] font-medium text-[#1a0a0e] hover:text-[#c97a90] transition-colors">
              корзина
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-4 bg-[#f8c8d4] text-[#2c1a1f] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
            <button onClick={() => navigate("/contacts")}
              className="text-[13px] font-medium text-[#1a0a0e] hover:text-[#c97a90] transition-colors">
              контакты
            </button>
          </div>
          {/* отзывы */}
          <div className="absolute pointer-events-auto" style={{ top: "40%", left: "1.5%" }}>
            <button onClick={() => navigate("/reviews")}
              className="text-[13px] font-medium text-[#1a0a0e] hover:text-[#c97a90] transition-colors">
              отзывы
            </button>
          </div>
          {/* каталог */}
          <div className="absolute pointer-events-auto" style={{ top: "55%", left: "24%" }}>
            <button onClick={() => navigate("/catalog")}
              className="text-[13px] font-medium text-[#1a0a0e] hover:text-[#c97a90] transition-colors">
              каталог
            </button>
          </div>
          {/* о нас */}
          <div className="absolute pointer-events-auto" style={{ bottom: "5%", left: "2%" }}>
            <button onClick={() => navigate("/about")}
              className="text-[13px] font-medium text-[#1a0a0e] hover:text-[#c97a90] transition-colors">
              о нас
            </button>
          </div>
        </nav>

        {/* Логотип — правый верхний угол */}
        <div className="absolute top-0 right-0 pt-8 pr-10 text-right">
          <button onClick={() => navigate("/")} className="hover:opacity-80 transition-opacity">
            <div className="text-[52px] font-light tracking-[0.14em] text-[#1a0a0e] leading-none" style={font}>
              ЭП<span className="text-[#c97a90]">✳</span>КСИ
            </div>
            <div className="text-[9px] tracking-[0.28em] text-[#8b5a6a] mt-2 leading-[1.9]" style={mono}>
              МАГАЗИН ОРИГИНАЛЬНЫХ УКРАШЕНИЙ ИЗ<br />ЭПОКСИДНОЙ СМОЛЫ
            </div>
          </button>
        </div>
      </div>

      {/* Разделитель */}
      <div className="border-t border-[#e5c8d2]" />

      {/* ── НИЖНЯЯ ЧАСТЬ: Скидки и акции ── */}
      <div className="relative overflow-hidden px-14 flex items-center" style={{ height: "42vh" }}>
        {/* Водяной знак % */}
        <span className="absolute right-12 top-1/2 -translate-y-1/2 leading-none pointer-events-none select-none"
          style={{ fontSize: "200px", color: "#f8c8d4", opacity: 0.28, fontWeight: 700, ...font }}>
          %
        </span>

        <div className="relative z-10">
          <h1 className="text-[56px] font-light tracking-[0.1em] text-[#1a0a0e] uppercase leading-none" style={font}>
            Скидки и акции
          </h1>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-[#1a0a0e] text-lg">•</span>
              <p className="text-[11px] tracking-[0.18em] text-[#1a0a0e] uppercase" style={mono}>
                С 03.05.26 по 20.05.26 скидка 20% на все брелки
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#1a0a0e] text-lg">•</span>
              <p className="text-[11px] tracking-[0.18em] uppercase" style={mono}>
                <span className="text-[#1a0a0e]">Купишь два брелка — </span>
                <span className="text-[#c97a90]">получишь кулон в подарок</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
