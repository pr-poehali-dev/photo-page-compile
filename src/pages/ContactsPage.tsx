const ContactsPage = () => {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h1
        className="text-5xl font-light text-center text-[#1a0a0e] tracking-widest uppercase mb-3"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Контакты
      </h1>
      <p className="text-center text-sm text-[#8b5a6a] mb-12">
        Свяжитесь с нами любым удобным способом
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[
          {
            icon: "📱",
            label: "ВКонтакте",
            value: "vk.com/epoksi",
            link: "https://vk.com/epoksi",
          },
          {
            icon: "📸",
            label: "Instagram",
            value: "@epoksi_jewelry",
            link: "#",
          },
          {
            icon: "💬",
            label: "Telegram",
            value: "@epoksi_shop",
            link: "https://t.me/epoksi_shop",
          },
          {
            icon: "📧",
            label: "Email",
            value: "epoksi@mail.ru",
            link: "mailto:epoksi@mail.ru",
          },
        ].map((item) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#fde8ed] rounded-2xl p-6 hover:bg-[#f8c8d4] transition-colors group"
          >
            <span className="text-3xl">{item.icon}</span>
            <div>
              <p className="text-xs text-[#8b5a6a] uppercase tracking-widest mb-0.5">
                {item.label}
              </p>
              <p className="text-sm font-medium text-[#2c1a1f] group-hover:text-[#8b5a6a] transition-colors">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Hours & info */}
      <div className="bg-white border border-[#f2d4dc] rounded-3xl p-8 text-center">
        <h2
          className="text-2xl font-light text-[#1a0a0e] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Время работы
        </h2>
        <p className="text-sm text-[#555]">
          Пн–Пт: 10:00 – 20:00<br />
          Сб–Вс: 11:00 – 18:00
        </p>
        <div className="mt-6 pt-6 border-t border-[#f2d4dc]">
          <p className="text-sm text-[#8b5a6a]">
            Отвечаем на сообщения в течение нескольких часов.<br />
            Индивидуальные заказы — обсуждаем в личных сообщениях.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
