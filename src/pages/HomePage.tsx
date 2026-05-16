import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const onNavigate = (page: string) => navigate(`/${page === "home" ? "" : page}`);
  return (
    <div>
      {/* Hero / Акции */}
      <section className="relative bg-white px-8 py-12 border-b border-[#f2d4dc]">
        <div className="max-w-5xl mx-auto flex items-center gap-12">
          {/* Big % watermark */}
          <div className="flex-1">
            <div className="relative">
              <span
                className="absolute -left-4 -top-8 text-[160px] font-bold text-[#f8c8d4] opacity-40 select-none leading-none"
                aria-hidden
              >
                %
              </span>
              <h1
                className="relative text-5xl md:text-6xl font-light text-[#1a0a0e] tracking-widest uppercase z-10"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Скидки<br />и акции
              </h1>
            </div>

            <ul className="mt-8 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#c97a90] text-lg leading-none mt-0.5">•</span>
                <p
                  className="text-sm tracking-widest text-[#1a0a0e] uppercase font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  С 03.05.26 по 20.05.26 скидка 20% на все брелки
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c97a90] text-lg leading-none mt-0.5">•</span>
                <p
                  className="text-sm tracking-widest uppercase font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span className="text-[#1a0a0e]">Купишь два брелка — </span>
                  <span className="text-[#c97a90]">получишь кулон в подарок</span>
                </p>
              </li>
            </ul>

            <button
              onClick={() => onNavigate("catalog")}
              className="mt-8 bg-[#2c1a1f] text-white px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-[#8b5a6a] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Смотреть каталог
            </button>
          </div>

          {/* Decorative flowers */}
          <div className="hidden md:flex flex-col gap-4 items-center opacity-80">
            <div className="w-24 h-24 rounded-full bg-[#fde8ed] flex items-center justify-center text-4xl">
              🌸
            </div>
            <div className="w-16 h-16 rounded-full bg-[#f8c8d4] flex items-center justify-center text-3xl">
              🌸
            </div>
            <div className="w-20 h-20 rounded-full bg-[#fde8ed] flex items-center justify-center text-4xl">
              🌸
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="px-8 py-12 bg-[#fdf5f7]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-light text-center text-[#1a0a0e] tracking-widest uppercase mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Популярное
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Брелок «Три котика»",
                price: 650,
                oldPrice: 812,
                img: "https://cdn.poehali.dev/files/c55b53db-64ed-47d6-b384-8a477779d0a1.png",
                badge: "−20%",
              },
              {
                name: "Кулон с цветами",
                price: 890,
                img: "https://cdn.poehali.dev/projects/d51bf64d-d409-4c75-9269-47c4fb806467/files/62e65c0f-af1c-4383-9617-d84c4742caf7.jpg",
                badge: "Новинка",
              },
              {
                name: "Серьги «Сакура»",
                price: 750,
                img: "https://cdn.poehali.dev/projects/d51bf64d-d409-4c75-9269-47c4fb806467/files/47fbb3d6-0b88-4f0c-80b7-d82694201c3b.jpg",
                badge: "Новинка",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => onNavigate("catalog")}
              >
                <div className="relative aspect-square bg-[#fde8ed]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-[#c97a90] text-white text-[10px] px-2 py-1 rounded-full tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#2c1a1f] font-medium">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#c97a90] font-semibold">{item.price} ₽</span>
                    {item.oldPrice && (
                      <span className="text-[#aaa] text-xs line-through">{item.oldPrice} ₽</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate("catalog")}
              className="border border-[#c97a90] text-[#c97a90] px-8 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-[#c97a90] hover:text-white transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Весь каталог
            </button>
          </div>
        </div>
      </section>

      {/* Quick about */}
      <section className="px-8 py-12 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-[#fde8ed] flex items-center justify-center text-5xl flex-shrink-0">
            🌸
          </div>
          <div>
            <h2
              className="text-2xl font-light text-[#1a0a0e] tracking-widest uppercase mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Об Эпокси
            </h2>
            <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              «ЭПОКСИ» — авторский проект двух мастеров, Арины и Ксюши.
              Мы создаём современные изделия из эпоксидной смолы: украшения, аксессуары и декор.
              Наша философия — сочетание минимализма, эстетики и безупречного качества.
            </p>
            <button
              onClick={() => onNavigate("about")}
              className="mt-4 text-[#c97a90] text-xs tracking-widest uppercase hover:text-[#8b5a6a] transition-colors underline underline-offset-4"
            >
              Узнать больше
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;