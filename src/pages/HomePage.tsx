import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { totalCount } = useCart();

  const serif = { fontFamily: "'Cormorant Garamond', serif" };
  const sans  = { fontFamily: "'Montserrat', sans-serif" };

  const navItems = [
    { label: "каталог",  path: "/catalog"  },
    { label: "о нас",    path: "/about"    },
    { label: "отзывы",   path: "/reviews"  },
    { label: "контакты", path: "/contacts" },
  ];

  return (
    <div className="w-screen h-screen overflow-hidden bg-white flex" style={sans}>

      {/* ── ЛЕВАЯ КОЛОНКА: вертикальная навигация ── */}
      <aside className="flex flex-col justify-between items-center py-10 px-5 border-r border-[#f0d8e0]" style={{ width: 72 }}>
        {/* Логотип-иконка */}
        <button onClick={() => navigate("/")} className="text-[#c97a90] hover:opacity-70 transition-opacity">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="#c97a90" strokeWidth="1.5"/>
            <path d="M14 6 Q16 10 14 14 Q12 18 14 22" stroke="#c97a90" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M6 14 Q10 12 14 14 Q18 16 22 14" stroke="#c97a90" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </button>

        {/* Вертикальные ссылки */}
        <nav className="flex flex-col items-center gap-8">
          {navItems.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="text-[#1a0a0e] hover:text-[#c97a90] transition-colors tracking-[0.15em] text-[10px] uppercase"
              style={{ ...sans, writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Корзина */}
        <button
          onClick={() => navigate("/cart")}
          className="relative flex flex-col items-center gap-1 text-[#1a0a0e] hover:text-[#c97a90] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {totalCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#c97a90] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </button>
      </aside>

      {/* ── ПРАВАЯ ЧАСТЬ ── */}
      <div className="flex-1 flex flex-col">

        {/* ВЕРХ: герой */}
        <div className="relative flex-1 min-h-0 overflow-hidden flex items-center">

          {/* Акварельные круги — фон */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute rounded-full" style={{
              width: 480, height: 480, top: -120, right: -80,
              background: "radial-gradient(circle, #fce8ef 0%, #f8d0de 40%, transparent 70%)",
              opacity: 0.55
            }}/>
            <div className="absolute rounded-full" style={{
              width: 260, height: 260, bottom: -60, left: 80,
              background: "radial-gradient(circle, #fce8ef 0%, transparent 70%)",
              opacity: 0.7
            }}/>
          </div>

          {/* Большой год — декор */}
          <span className="absolute right-12 bottom-4 text-[140px] font-light text-[#f0d0da] select-none leading-none pointer-events-none"
            style={serif}>
            2026
          </span>

          {/* Главный контент */}
          <div className="relative z-10 pl-14 pr-10 pt-10">
            <p className="text-[10px] tracking-[0.4em] text-[#c97a90] uppercase mb-4" style={sans}>
              Ручная работа · Эпоксидная смола
            </p>
            <h1 className="leading-none text-[#1a0a0e]" style={{ ...serif, fontSize: "clamp(52px, 7vw, 88px)", fontWeight: 300, letterSpacing: "0.08em" }}>
              ЭП<span className="text-[#c97a90]">✳</span>КСИ
            </h1>
            <p className="mt-3 text-[11px] tracking-[0.25em] text-[#8b5a6a] uppercase leading-relaxed" style={sans}>
              Магазин оригинальных украшений<br />из эпоксидной смолы
            </p>

            <div className="mt-10 flex items-center gap-6">
              <button
                onClick={() => navigate("/catalog")}
                className="bg-[#1a0a0e] text-white text-[10px] tracking-[0.3em] uppercase px-8 py-3.5 hover:bg-[#c97a90] transition-colors"
                style={sans}
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-[10px] tracking-[0.3em] uppercase text-[#8b5a6a] hover:text-[#c97a90] transition-colors border-b border-[#c97a90] pb-0.5"
                style={sans}
              >
                О нас
              </button>
            </div>
          </div>

          {/* Маленькие сакуры-декор */}
          <div className="absolute top-8 right-48 text-3xl select-none pointer-events-none opacity-60">🌸</div>
          <div className="absolute top-24 right-28 text-xl select-none pointer-events-none opacity-40">🌸</div>
          <div className="absolute bottom-16 right-64 text-2xl select-none pointer-events-none opacity-50">🌸</div>
        </div>

        {/* РАЗДЕЛИТЕЛЬ */}
        <div className="border-t border-[#f0d8e0] mx-14" />

        {/* НИЗ: акции */}
        <div className="px-14 py-7 flex items-start gap-16">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-[#c97a90] uppercase mb-3" style={sans}>
              Акции
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-[#1a0a0e] mt-1.5 flex-shrink-0"/>
                <p className="text-[11px] tracking-[0.15em] text-[#1a0a0e] uppercase leading-relaxed" style={sans}>
                  03.05 — 20.05 · скидка <span className="text-[#c97a90] font-semibold">20%</span> на все брелки
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-[#1a0a0e] mt-1.5 flex-shrink-0"/>
                <p className="text-[11px] tracking-[0.15em] text-[#1a0a0e] uppercase leading-relaxed" style={sans}>
                  Купи 2 брелка — <span className="text-[#c97a90] font-semibold">кулон в подарок</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="border-l border-[#f0d8e0] pl-16">
            <p className="text-[9px] tracking-[0.35em] text-[#c97a90] uppercase mb-3" style={sans}>
              Новинки
            </p>
            <div className="flex gap-4">
              {[
                { img: "https://cdn.poehali.dev/files/c55b53db-64ed-47d6-b384-8a477779d0a1.png", name: "Брелок «Котики»" },
                { img: "https://cdn.poehali.dev/projects/d51bf64d-d409-4c75-9269-47c4fb806467/files/47fbb3d6-0b88-4f0c-80b7-d82694201c3b.jpg", name: "Серьги «Сакура»" },
              ].map((p) => (
                <button key={p.name} onClick={() => navigate("/catalog")}
                  className="group flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#f8c8d4] bg-[#fde8ed]">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
                  </div>
                  <span className="text-[9px] tracking-wider text-[#8b5a6a] text-center leading-tight" style={sans}>
                    {p.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
