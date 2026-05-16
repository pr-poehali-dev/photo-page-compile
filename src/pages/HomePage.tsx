import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const SakuraFlower = ({ r = 10 }: { r?: number }) => (
  <>
    <circle cx="0" cy={-r * 1.2} r={r} fill="#f8c8d4" opacity="0.92" />
    <circle cx={r * 1.1} cy={-r * 0.4} r={r} fill="#f8c8d4" opacity="0.92" />
    <circle cx={r * 0.7} cy={r * 1.0} r={r} fill="#f8c8d4" opacity="0.92" />
    <circle cx={-r * 0.7} cy={r * 1.0} r={r} fill="#f8c8d4" opacity="0.92" />
    <circle cx={-r * 1.1} cy={-r * 0.4} r={r} fill="#f8c8d4" opacity="0.92" />
    <circle cx="0" cy="0" r={r * 0.55} fill="#fce8ef" />
    <circle cx="0" cy="0" r={r * 0.22} fill="#d4849a" />
  </>
);

const HomePage = () => {
  const navigate = useNavigate();
  const { totalCount } = useCart();

  const font = { fontFamily: "'Cormorant Garamond', serif" };
  const mono = { fontFamily: "'Montserrat', sans-serif" };

  const navBtn = (label: React.ReactNode, path: string, extra?: string) => (
    <button
      onClick={() => navigate(path)}
      className={`text-[13px] leading-tight text-[#1a0a0e] hover:text-[#c97a90] transition-colors font-medium tracking-wide ${extra ?? ""}`}
      style={mono}
    >
      {label}
    </button>
  );

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-white select-none"
      style={{ display: "grid", gridTemplateRows: "1fr auto" }}
    >
      {/* ── TOP ZONE: branch left + logo right ── */}
      <div className="relative overflow-hidden">

        {/* SVG branch — absolute, left side */}
        <svg
          viewBox="0 0 460 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 h-full"
          style={{ width: "42%" }}
          preserveAspectRatio="xMinYMin meet"
        >
          {/* trunk bottom-left → top-right */}
          <path d="M30 500 Q70 430 120 370 Q170 310 200 255 Q230 200 250 150 Q265 110 285 70 Q300 40 320 15"
            stroke="#1a0a0e" strokeWidth="11" strokeLinecap="round" fill="none" />
          {/* left branch → отзывы */}
          <path d="M120 370 Q85 345 55 320 Q30 300 5 290"
            stroke="#1a0a0e" strokeWidth="7" strokeLinecap="round" fill="none" />
          {/* right branch mid → каталог */}
          <path d="M200 255 Q235 245 265 235 Q295 225 320 215"
            stroke="#1a0a0e" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* right branch top → корзина/контакты */}
          <path d="M265 110 Q300 95 330 80 Q360 68 395 55"
            stroke="#1a0a0e" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* tiny tip */}
          <path d="M285 70 Q268 48 260 28"
            stroke="#1a0a0e" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Flower: top tip */}
          <g transform="translate(320,12)"><SakuraFlower r={12} /></g>
          {/* Flower: корзина/контакты branch end */}
          <g transform="translate(396,52)"><SakuraFlower r={10} /></g>
          {/* Flower: каталог branch end */}
          <g transform="translate(320,212)"><SakuraFlower r={10} /></g>
          {/* Flower: отзывы branch end */}
          <g transform="translate(4,288)"><SakuraFlower r={11} /></g>
          {/* Flower: о нас / bottom trunk */}
          <g transform="translate(62,458)"><SakuraFlower r={13} /></g>
        </svg>

        {/* ── NAV LABELS over branch ── */}
        {/* корзина + контакты — top, right side of upper branch */}
        <div className="absolute" style={{ top: "13%", left: "22%" }}>
          <div className="flex gap-8 items-start">
            {navBtn(<>кор-<br />зина</>, "/cart",
              totalCount > 0 ? "relative" : ""
            )}
            {totalCount > 0 && (
              <span
                className="absolute -top-1 left-8 bg-[#f8c8d4] text-[#2c1a1f] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                style={{ pointerEvents: "none" }}
              >
                {totalCount}
              </span>
            )}
            {navBtn(<>кон-<br />такты</>, "/contacts")}
          </div>
        </div>

        {/* отзывы — left branch */}
        <div className="absolute" style={{ top: "38%", left: "1%" }}>
          {navBtn(<>отзы-<br />вы</>, "/reviews")}
        </div>

        {/* каталог — mid branch */}
        <div className="absolute" style={{ top: "54%", left: "22%" }}>
          {navBtn(<>ката-<br />лог</>, "/catalog")}
        </div>

        {/* о нас — bottom left */}
        <div className="absolute" style={{ bottom: "4%", left: "2%" }}>
          {navBtn("о нас", "/about")}
        </div>

        {/* ── LOGO top right ── */}
        <div className="absolute top-0 right-0 pt-8 pr-10 text-right">
          <button onClick={() => navigate("/")} className="hover:opacity-80 transition-opacity">
            <div className="text-[52px] font-light tracking-[0.15em] text-[#1a0a0e] leading-none" style={font}>
              ЭП<span className="text-[#c97a90]">✳</span>КСИ
            </div>
            <div className="text-[9px] tracking-[0.28em] text-[#8b5a6a] mt-2 leading-[1.8]" style={mono}>
              МАГАЗИН ОРИГИНАЛЬНЫХ УКРАШЕНИЙ ИЗ<br />ЭПОКСИДНОЙ СМОЛЫ
            </div>
          </button>
        </div>
      </div>

      {/* ── BOTTOM ZONE: divider + акции ── */}
      <div className="border-t border-[#e8c8d4]" />
      <div className="relative px-12 py-8 overflow-hidden flex items-center" style={{ minHeight: "38vh" }}>

        {/* Big watermark % */}
        <span
          className="absolute right-16 top-1/2 -translate-y-1/2 text-[220px] font-bold leading-none text-[#f8c8d4] opacity-25 pointer-events-none"
          aria-hidden
          style={font}
        >
          %
        </span>

        <div className="relative z-10">
          <h1 className="text-[52px] font-light tracking-[0.12em] text-[#1a0a0e] uppercase leading-tight" style={font}>
            Скидки и акции
          </h1>

          <ul className="mt-5 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#1a0a0e] text-base mt-0.5 leading-none">•</span>
              <p className="text-[11px] tracking-[0.18em] text-[#1a0a0e] uppercase font-medium" style={mono}>
                С 03.05.26 по 20.05.26 скидка 20% на все брелки
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#1a0a0e] text-base mt-0.5 leading-none">•</span>
              <p className="text-[11px] tracking-[0.18em] uppercase font-medium" style={mono}>
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
