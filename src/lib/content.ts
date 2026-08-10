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
    client: "Vortex Play",
    title: { ru: "UA-кампания для гиперкэжуал-хита", en: "UA campaign for a hyper-casual hit" },
    tag: { ru: "UA / Перформанс", en: "UA / Performance" },
    metric: { ru: "CPI ниже плана на 34%", en: "CPI 34% below target" },
    duration: "0:32",
    video: local("work-01"),
  },
  {
    id: "work-02",
    client: "NeonDash Games",
    title: { ru: "Cinematic-трейлер к обновлению", en: "Cinematic trailer for a major update" },
    tag: { ru: "Трейлер / Cinematic", en: "Trailer / Cinematic" },
    metric: { ru: "+180% предзаказов после релиза трейлера", en: "+180% pre-registrations after launch" },
    duration: "1:04",
    video: local("work-02"),
  },
  {
    id: "work-03",
    client: "DriftLoop",
    title: { ru: "Хуки для сплит-теста в TikTok Ads", en: "Hooks for a TikTok Ads split test" },
    tag: { ru: "UA / Хуки", en: "UA / Hooks" },
    metric: { ru: "CTR 4,1% в TikTok Ads", en: "4.1% CTR on TikTok Ads" },
    duration: "0:21",
    video: local("work-03"),
  },
  {
    id: "work-04",
    client: "Meadowlark Games",
    title: { ru: "Серия перформанс-креативов для казуальной игры", en: "Performance creative series for a casual title" },
    tag: { ru: "Перформанс", en: "Performance" },
    metric: { ru: "ROAS 3,4 на холодном трафике", en: "3.4 ROAS on cold traffic" },
    duration: "0:18",
    video: local("work-04"),
  },
  {
    id: "work-05",
    client: "BlockRush",
    title: { ru: "UGC-имитация для paid-кампании", en: "UGC-style ads for a paid campaign" },
    tag: { ru: "UGC / Перформанс", en: "UGC / Performance" },
    metric: { ru: "−28% к цене инсталла", en: "−28% cost per install" },
    duration: "0:27",
    video: local("work-05"),
  },
  {
    id: "work-06",
    client: "Rocket Paw",
    title: { ru: "Store-трейлер к запуску в App Store", en: "Store trailer for an App Store launch" },
    tag: { ru: "Трейлер / 3D", en: "Trailer / 3D" },
    metric: { ru: "Featured в App Store в неделю запуска", en: "Featured on the App Store launch week" },
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
    title: { ru: "CGI-геймплей демо", en: "CGI gameplay demo" },
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
    title: { ru: "Сборка хуков под сплит-тест", en: "Hook cutdown for a split test" },
    platform: "Reels",
    video: local("reel-04"),
  },
];

export const heroVideo: VideoSource = local("hero-loop");

export const genres = [
  "Hyper-casual",
  "Casual",
  "Midcore",
  "Gacha",
  "UA Hooks",
  "Trailers",
  "Cinematic",
  "UGC",
];
