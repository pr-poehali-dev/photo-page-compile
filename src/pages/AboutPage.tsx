const AboutPage = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left: big title */}
        <div className="md:w-64 flex-shrink-0">
          <h1
            className="text-6xl font-light text-[#1a0a0e] leading-tight tracking-widest uppercase"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            О<br />НАС
          </h1>
        </div>

        {/* Right: content */}
        <div className="flex-1">
          {/* Pink box with materials */}
          <div className="bg-[#fde8ed] rounded-2xl p-6 mb-8">
            <p className="text-sm font-semibold text-[#2c1a1f] mb-3">
              В работе мы используем:
            </p>
            <ul className="space-y-2">
              {[
                "высококачественную эпоксидную смолу;",
                "натуральные материалы (дерево, сухоцветы, камни);",
                "надёжную фурнитуру премиум-класса.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#2c1a1f]">
                  <span className="text-[#c97a90] mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Main text */}
          <div
            className="text-sm text-[#333] leading-7 space-y-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p>
              «ЭПОКСИ» — это авторский проект двух мастеров, Арины и Ксюши.
            </p>
            <p>
              Мы создаём современные изделия из эпоксидной смолы: украшения,
              аксессуары и декор для интерьера. Наша философия — сочетание
              минимализма, эстетики и безупречного качества исполнения.
            </p>
            <p>
              Каждое изделие проходит многоступенчатый контроль качества — от заливки
              до финальной полировки.
            </p>
            <p>
              Мы гордимся тем, что наши работы украшают дома и дополняют образы людей.
            </p>
            <p className="text-[#c97a90] font-medium">
              Добро пожаловать в мир изящных форм и прозрачных линий!
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mt-16">
        <h2
          className="text-3xl font-light text-center text-[#1a0a0e] tracking-widest uppercase mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Наша команда
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
          {[
            { name: "Арина", role: "Мастер и основатель", emoji: "🌸" },
            { name: "Ксюша", role: "Мастер и дизайнер", emoji: "✨" },
          ].map((person) => (
            <div
              key={person.name}
              className="bg-[#fde8ed] rounded-2xl p-6 text-center"
            >
              <div className="text-5xl mb-3">{person.emoji}</div>
              <h3
                className="text-xl font-light text-[#1a0a0e]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {person.name}
              </h3>
              <p className="text-xs text-[#8b5a6a] mt-1">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
