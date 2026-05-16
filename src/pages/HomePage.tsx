import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

// Inline SVG branch for the full-screen home layout
const HomeBranch = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 520 620"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Main trunk */}
    <path
      d="M60 620 Q100 540 150 480 Q200 420 230 360 Q260 300 280 240 Q300 180 310 120 Q320 70 340 30"
      stroke="#1a0a0e" strokeWidth="9" strokeLinecap="round" fill="none"
    />
    {/* Left branch (отзывы) */}
    <path
      d="M150 480 Q110 450 80 420 Q50 390 20 370"
      stroke="#1a0a0e" strokeWidth="6" strokeLinecap="round" fill="none"
    />
    {/* Right branch top (корзина/контакты) */}
    <path
      d="M280 240 Q320 220 360 200 Q400 180 430 155"
      stroke="#1a0a0e" strokeWidth="5" strokeLinecap="round" fill="none"
    />
    {/* Small branch mid (каталог) */}
    <path
      d="M230 360 Q270 345 300 330 Q330 315 355 300"
      stroke="#1a0a0e" strokeWidth="4.5" strokeLinecap="round" fill="none"
    />
    {/* Tiny tip branch */}
    <path
      d="M310 120 Q290 90 280 60"
      stroke="#1a0a0e" strokeWidth="4" strokeLinecap="round" fill="none"
    />

    {/* Flowers */}
    {/* Top tip */}
    <g transform="translate(340,26)">
      <circle cx="0" cy="-14" r="11" fill="#f8c8d4" opacity="0.92"/>
      <circle cx="13" cy="-4" r="11" fill="#f8c8d4" opacity="0.92"/>
      <circle cx="8" cy="11" r="11" fill="#f8c8d4" opacity="0.92"/>
      <circle cx="-8" cy="11" r="11" fill="#f8c8d4" opacity="0.92"/>
      <circle cx="-13" cy="-4" r="11" fill="#f8c8d4" opacity="0.92"/>
      <circle cx="0" cy="0" r="6" fill="#fde8ed"/>
      <circle cx="0" cy="0" r="2.5" fill="#c97a90"/>
    </g>
    {/* Right branch end (корзина/контакты area) */}
    <g transform="translate(432,150)">
      <circle cx="0" cy="-12" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="11" cy="-4" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="7" cy="10" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="-7" cy="10" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="-11" cy="-4" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="0" cy="0" r="6" fill="#fde8ed"/>
      <circle cx="0" cy="0" r="2" fill="#c97a90"/>
    </g>
    {/* Mid right branch */}
    <g transform="translate(356,298)">
      <circle cx="0" cy="-10" r="8.5" fill="#f8c8d4" opacity="0.88"/>
      <circle cx="10" cy="-3" r="8.5" fill="#f8c8d4" opacity="0.88"/>
      <circle cx="6" cy="8" r="8.5" fill="#f8c8d4" opacity="0.88"/>
      <circle cx="-6" cy="8" r="8.5" fill="#f8c8d4" opacity="0.88"/>
      <circle cx="-10" cy="-3" r="8.5" fill="#f8c8d4" opacity="0.88"/>
      <circle cx="0" cy="0" r="5" fill="#fde8ed"/>
      <circle cx="0" cy="0" r="2" fill="#c97a90"/>
    </g>
    {/* Left branch end (отзывы area) */}
    <g transform="translate(18,368)">
      <circle cx="0" cy="-12" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="11" cy="-4" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="7" cy="10" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="-7" cy="10" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="-11" cy="-4" r="10" fill="#f8c8d4" opacity="0.9"/>
      <circle cx="0" cy="0" r="6" fill="#fde8ed"/>
      <circle cx="0" cy="0" r="2" fill="#c97a90"/>
    </g>
    {/* Bottom trunk (о нас area) */}
    <g transform="translate(88,560)">
      <circle cx="0" cy="-14" r="12" fill="#f8c8d4" opacity="0.85"/>
      <circle cx="13" cy="-5" r="12" fill="#f8c8d4" opacity="0.85"/>
      <circle cx="8" cy="11" r="12" fill="#f8c8d4" opacity="0.85"/>
      <circle cx="-8" cy="11" r="12" fill="#f8c8d4" opacity="0.85"/>
      <circle cx="-13" cy="-5" r="12" fill="#f8c8d4" opacity="0.85"/>
      <circle cx="0" cy="0" r="7" fill="#fde8ed"/>
      <circle cx="0" cy="0" r="2.8" fill="#c97a90"/>
    </g>
  </svg>
);

const navLabelClass = (active = false) =>
  `text-[13px] font-medium tracking-wide text-[#1a0a0e] hover:text-[#8b5a6a] transition-colors cursor-pointer whitespace-nowrap ${
    active ? "text-[#8b5a6a] font-semibold" : ""
  }`;

const HomePage = () => {
  const navigate = useNavigate();
  const { totalCount } = useCart();

  return (
    <div className="w-screen h-screen overflow-hidden bg-white flex flex-col">
      {/* TOP HALF: branch + logo */}
      <div className="relative flex flex-1 min-h-0">
        {/* Left: branch with nav */}
        <div className="relative w-[45%] flex-shrink-0">
          <HomeBranch className="absolute inset-0 w-full h-full" />

          {/* Nav labels positioned over branch */}
          <nav className="absolute inset-0 pointer-events-none">
            {/* корзина + контакты — top right of branch */}
            <div className="absolute top-[13%] left-[50%] flex gap-6 pointer-events-auto">
              <button onClick={() => navigate("/cart")} className={`${navLabelClass()} relative`}>
                корзина
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-3 bg-[#f8c8d4] text-[#2c1a1f] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </button>
              <button onClick={() => navigate("/contacts")} className={navLabelClass()}>
                контакты
              </button>
            </div>

            {/* отзывы — left branch */}
            <div className="absolute top-[38%] left-[3%] pointer-events-auto">
              <button onClick={() => navigate("/reviews")} className={navLabelClass()}>
                отзывы
              </button>
            </div>

            {/* каталог — mid branch */}
            <div className="absolute top-[57%] left-[42%] pointer-events-auto">
              <button onClick={() => navigate("/catalog")} className={navLabelClass()}>
                каталог
              </button>
            </div>

            {/* о нас — bottom */}
            <div className="absolute bottom-[6%] left-[3%] pointer-events-auto">
              <button onClick={() => navigate("/about")} className={navLabelClass()}>
                о нас
              </button>
            </div>
          </nav>
        </div>

        {/* Right: logo */}
        <div className="flex-1 flex flex-col items-end justify-start pt-10 pr-12">
          <button onClick={() => navigate("/")} className="text-right">
            <div
              className="text-6xl font-light tracking-[0.18em] text-[#1a0a0e]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              ЭП<span className="text-[#c97a90]">✳</span>КСИ
            </div>
            <div
              className="text-[10px] tracking-[0.28em] text-[#8b5a6a] mt-2 text-right leading-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              МАГАЗИН ОРИГИНАЛЬНЫХ УКРАШЕНИЙ ИЗ<br />ЭПОКСИДНОЙ СМОЛЫ
            </div>
          </button>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#f2d4dc] mx-8" />

      {/* BOTTOM HALF: Акции */}
      <div className="flex items-center px-12 py-10 bg-white">
        <div className="flex-1">
          <div className="relative">
            {/* Watermark % */}
            <span
              className="absolute -left-6 -top-10 text-[200px] font-bold text-[#f8c8d4] opacity-30 select-none leading-none pointer-events-none"
              aria-hidden
            >
              %
            </span>
            <h1
              className="relative text-6xl font-light text-[#1a0a0e] tracking-widest uppercase z-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Скидки и акции
            </h1>
          </div>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#1a0a0e] text-base leading-none mt-1">•</span>
              <p
                className="text-sm tracking-widest text-[#1a0a0e] uppercase font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                С 03.05.26 по 20.05.26 скидка 20% на все брелки
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#1a0a0e] text-base leading-none mt-1">•</span>
              <p
                className="text-sm tracking-widest uppercase font-medium"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
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
