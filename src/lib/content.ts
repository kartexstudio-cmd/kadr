import type { Locale } from "@/lib/i18n/config";
import type { VideoSource } from "@/lib/video";

type Localized = Record<Locale, string>;

export type WorkItem = {
  id: string;
  client: string;
  title: Localized;
  tag: Localized;
  metric: Localized;
  duration: string;
  video: VideoSource;
};

export type ReelItem = {
  id: string;
  title: Localized;
  platform: string;
  video: VideoSource;
};

const local = (name: string): VideoSource => ({
  provider: "file",
  src: `/media/${name}.mp4`,
  poster: `/media/${name}.jpg`,
});

export const works: WorkItem[] = [
  {
    id: "work-01",
    client: "Aureus",
    title: { ru: "Запуск флагманской коллекции", en: "Flagship collection launch" },
    tag: { ru: "3D / CGI", en: "3D / CGI" },
    metric: { ru: "CTR 4,1% в Meta Ads", en: "4.1% CTR on Meta Ads" },
    duration: "0:32",
    video: local("work-01"),
  },
  {
    id: "work-02",
    client: "Nordvest",
    title: { ru: "Объясняющий ролик для B2B-платформы", en: "Explainer for a B2B platform" },
    tag: { ru: "2D-анимация", en: "2D animation" },
    metric: { ru: "−28% к цене лида", en: "−28% cost per lead" },
    duration: "1:04",
    video: local("work-02"),
  },
  {
    id: "work-03",
    client: "Volta",
    title: { ru: "Продуктовый тизер для маркетплейса", en: "Product teaser for marketplace" },
    tag: { ru: "Монтаж / Colour", en: "Editing / Colour" },
    metric: { ru: "1,2 млн органических просмотров", en: "1.2M organic views" },
    duration: "0:21",
    video: local("work-03"),
  },
  {
    id: "work-04",
    client: "Lumen",
    title: { ru: "Серия перформанс-креативов", en: "Performance creative series" },
    tag: { ru: "Перформанс", en: "Performance" },
    metric: { ru: "ROAS 3,4 на холодном трафике", en: "3.4 ROAS on cold traffic" },
    duration: "0:18",
    video: local("work-04"),
  },
  {
    id: "work-05",
    client: "Kito",
    title: { ru: "UGC-кампания для приложения", en: "UGC campaign for a mobile app" },
    tag: { ru: "UGC / Монтаж", en: "UGC / Editing" },
    metric: { ru: "CPI ниже плана на 34%", en: "CPI 34% below target" },
    duration: "0:27",
    video: local("work-05"),
  },
  {
    id: "work-06",
    client: "Prima",
    title: { ru: "Имиджевый ролик для бренда", en: "Brand image film" },
    tag: { ru: "Продакшн / 3D", en: "Production / 3D" },
    metric: { ru: "Досматриваемость 71%", en: "71% completion rate" },
    duration: "0:45",
    video: local("work-06"),
  },
];

export const reels: ReelItem[] = [
  {
    id: "reel-01",
    title: { ru: "Хук за 1,5 секунды", en: "Hook in 1.5 seconds" },
    platform: "Reels",
    video: local("reel-01"),
  },
  {
    id: "reel-02",
    title: { ru: "CGI-демо продукта", en: "CGI product demo" },
    platform: "TikTok",
    video: local("reel-02"),
  },
  {
    id: "reel-03",
    title: { ru: "Нативный UGC-формат", en: "Native UGC format" },
    platform: "Shorts",
    video: local("reel-03"),
  },
  {
    id: "reel-04",
    title: { ru: "Динамичный монтаж-сборка", en: "Fast-cut montage" },
    platform: "Reels",
    video: local("reel-04"),
  },
];

export const heroVideo: VideoSource = local("hero-loop");

export const clients = ["Aureus", "Nordvest", "Volta", "Lumen", "Kito", "Prima", "Sable", "Orbita"];
