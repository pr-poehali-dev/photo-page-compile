export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
  isSale?: boolean;
  reviews?: Review[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Брелок «Три котика»",
    price: 650,
    oldPrice: 812,
    category: "Брелки",
    image: "https://cdn.poehali.dev/files/b0e3e7ee-4649-4329-9865-b49d7640a6cf.png",
    description: "Авторский брелок из эпоксидной смолы с тремя милыми котиками. Прочная фурнитура, яркие краски.",
    isSale: true,
    reviews: [
      { id: 1, name: "Анастасия", rating: 5, text: "Заказала брелок с котиками — просто восторг! Качество отличное, смола прозрачная, фурнитура крепкая. Уже делаю второй заказ 🐱", date: "12.05.2026" },
      { id: 2, name: "Катерина", rating: 4, text: "Очень красивый! Единственное — хотелось бы больше цветов. Но в целом очень довольна.", date: "25.04.2026" },
    ],
  },
  {
    id: 2,
    name: "Кулон с цветами",
    price: 890,
    category: "Кулоны",
    image: "https://cdn.poehali.dev/projects/d51bf64d-d409-4c75-9269-47c4fb806467/files/62e65c0f-af1c-4383-9617-d84c4742caf7.jpg",
    description: "Нежный кулон с засушенными цветами в прозрачной эпоксидной смоле.",
    isNew: true,
    reviews: [
      { id: 1, name: "Юля", rating: 5, text: "Подарила подруге на день рождения. Упаковка красивая, изделие идеальное!", date: "01.05.2026" },
    ],
  },
  {
    id: 3,
    name: "Серьги «Сакура»",
    price: 750,
    category: "Серьги",
    image: "https://cdn.poehali.dev/projects/d51bf64d-d409-4c75-9269-47c4fb806467/files/47fbb3d6-0b88-4f0c-80b7-d82694201c3b.jpg",
    description: "Изящные серьги с лепестками сакуры внутри прозрачной смолы.",
    isNew: true,
    reviews: [
      { id: 1, name: "Маша", rating: 5, text: "На солнце переливаются, все спрашивают где купила. Очень нежно и изящно.", date: "08.05.2026" },
    ],
  },
  {
    id: 4,
    name: "Брелок «Цветок»",
    price: 550,
    oldPrice: 687,
    category: "Брелки",
    image: "https://cdn.poehali.dev/projects/d51bf64d-d409-4c75-9269-47c4fb806467/files/7d08e0c4-86e0-49d1-aace-e6df859d9b74.jpg",
    description: "Милый брелок в форме цветка из розовой эпоксидной смолы с блёстками.",
    isSale: true,
    reviews: [],
  },
  {
    id: 5,
    name: "Брелок «Котик»",
    price: 620,
    oldPrice: 775,
    category: "Брелки",
    image: "https://cdn.poehali.dev/files/b0e3e7ee-4649-4329-9865-b49d7640a6cf.png",
    description: "Брелок с рисунком котика в прозрачной смоле, в форме цветка сакуры.",
    isSale: true,
    reviews: [],
  },
  {
    id: 6,
    name: "Кулон «Капля»",
    price: 780,
    category: "Кулоны",
    image: "https://cdn.poehali.dev/projects/d51bf64d-d409-4c75-9269-47c4fb806467/files/62e65c0f-af1c-4383-9617-d84c4742caf7.jpg",
    description: "Минималистичный кулон в форме капли с мелкими цветами и золотой фурнитурой.",
    reviews: [],
  },
];

export const categories = ["Все", "Брелки", "Кулоны", "Серьги"];