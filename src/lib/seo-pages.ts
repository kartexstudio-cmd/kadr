import type { Locale } from "@/lib/i18n/config";

type Localized = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type SeoFaqItem = {
  q: Localized;
  a: Localized;
};

export type SeoPage = {
  slug: string;
  metaTitle: Localized;
  metaDescription: Localized;
  eyebrow: Localized;
  h1: Localized;
  lead: Localized;
  intro: LocalizedList;
  bullets: LocalizedList;
  faq: SeoFaqItem[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "ua-video-hypercasual",
    metaTitle: {
      ru: "UA-видео для hypercasual игр — батч хуков за 5 дней | Nitroreel",
      en: "UA video for hyper-casual games — a batch of hooks in 5 days | Nitroreel",
    },
    metaDescription: {
      ru: "Продакшн UA-креативов для hypercasual: хуки, гипотезы, burst-тест в сетях. Батч из 10 роликов за 5 рабочих дней.",
      en: "UA creative production for hyper-casual: hooks, hypotheses, a burst test in ad networks. Ten videos in five working days.",
    },
    eyebrow: { ru: "UA-видео · Hypercasual", en: "UA video · Hyper-casual" },
    h1: { ru: "UA-видео для hypercasual игр", en: "UA video for hyper-casual games" },
    lead: {
      ru: "Hypercasual живёт на CPI и retention дня 1 — ролик должен зацепить за первую секунду и не соврать про геймплей.",
      en: "Hyper-casual lives and dies by CPI and day-1 retention — the video has to hook in the first second and not lie about the gameplay.",
    },
    intro: {
      ru: [
        "В hypercasual нет времени на разгон: если хук не сработал в первые 1,5 секунды, пользователь уже пролистал. Мы строим сценарий вокруг одного чёткого конфликта — не сюжета, а физического действия, которое считывается без звука.",
        "Тестируем не ролик целиком, а отдельные хуки: снимаем 5–8 вариаций первых секунд и запускаем burst-тест, чтобы найти связку с лучшим CTR/IPM до того, как тратить бюджет на полную адаптацию под все форматы.",
      ],
      en: [
        "There's no runway in hyper-casual: if the hook doesn't land in the first 1.5 seconds, the user has already scrolled past. We build the script around one clear conflict — not a story, a physical action that reads without sound.",
        "We don't test the whole video, we test hooks: shooting 5–8 variations of the opening and running a burst test to find the combination with the best CTR/IPM before spending budget on full adaptations.",
      ],
    },
    bullets: {
      ru: [
        "Хуки без звука — считываются в mute-режиме ленты",
        "Реальный геймплей, не постановка — иначе растёт uninstall",
        "Адаптация под Meta, TikTok, Google Ads UA, Unity Ads",
        "Burst-тест 5–8 вариаций хука за один спринт",
      ],
      en: [
        "Sound-off hooks — read clearly in a muted feed",
        "Real gameplay, not a staged mock-up — otherwise uninstalls climb",
        "Adaptations for Meta, TikTok, Google Ads UA, Unity Ads",
        "Burst test of 5–8 hook variations in a single sprint",
      ],
    },
    faq: [
      {
        q: { ru: "Нужен ли отснятый геймплей?", en: "Do you need existing gameplay footage?" },
        a: {
          ru: "Нет, можем записать сами по вашему билду — это не удорожает батч, если билд стабилен.",
          en: "No, we can capture it ourselves from your build — this doesn't add to the batch cost if the build is stable.",
        },
      },
      {
        q: { ru: "Сколько хуков в одном батче?", en: "How many hooks are in one batch?" },
        a: {
          ru: "Обычно 8–10 хуков на 3–4 базовых сценария — достаточно для статистически значимого burst-теста.",
          en: "Usually 8–10 hooks across 3–4 base scripts — enough for a statistically meaningful burst test.",
        },
      },
    ],
  },
  {
    slug: "ua-video-midcore-rpg",
    metaTitle: {
      ru: "UA-креативы для midcore и RPG игр | Nitroreel",
      en: "UA creatives for midcore and RPG games | Nitroreel",
    },
    metaDescription: {
      ru: "UA и перформанс-креативы для midcore и RPG: реальная механика вместо постановки, адаптации под Google Ads UA, Meta Ads, Unity Ads.",
      en: "UA and performance creatives for midcore and RPG titles: real mechanics instead of staging, adapted for Google Ads UA, Meta Ads, Unity Ads.",
    },
    eyebrow: { ru: "UA-видео · Midcore / RPG", en: "UA video · Midcore / RPG" },
    h1: { ru: "UA и перформанс-креативы для midcore и RPG", en: "UA and performance creatives for midcore and RPG" },
    lead: {
      ru: "В midcore и RPG решает не хук ради хука, а обещание глубины — прогрессии, лута, механики — которое ролик должен показать за 15–20 секунд.",
      en: "In midcore and RPG it's not the hook for its own sake — it's the promise of depth: progression, loot, mechanics, shown in 15–20 seconds.",
    },
    intro: {
      ru: [
        "Аудитория midcore и RPG смотрит рекламу внимательнее, чем в hypercasual, и быстро считывает фальшь — постановочный геймплей или преувеличенная механика уводят в минус retention и review-score.",
        "Строим креатив вокруг реальной механики: прокачка, редкий лут, PvP-момент — то, что игрок увидит в первые 10 минут после установки. Это снижает разрыв между обещанием в ролике и первой сессией, а значит держит D1 retention.",
      ],
      en: [
        "Midcore and RPG audiences watch ads more carefully than hyper-casual ones and spot fakes fast — staged gameplay or an exaggerated mechanic drags down retention and review scores.",
        "We build the creative around a real mechanic — a level-up, a rare loot drop, a PvP moment — something the player will actually see in the first ten minutes after install. That closes the gap between the ad's promise and the first session, which is what keeps D1 retention up.",
      ],
    },
    bullets: {
      ru: [
        "Сценарий вокруг реальной механики, не постановка",
        "Адаптации под Google Ads UA, Meta Ads, Unity Ads",
        "Форматы 15–30 секунд под разные плейсменты",
        "Синхронизация с ASO-роликом на сторе",
      ],
      en: [
        "Script built around a real mechanic, not a staged scene",
        "Adaptations for Google Ads UA, Meta Ads, Unity Ads",
        "15–30 second formats for different placements",
        "Synced with the store's ASO video",
      ],
    },
    faq: [
      {
        q: { ru: "Работаете по NDA до релиза игры?", en: "Do you work under NDA before the game's release?" },
        a: {
          ru: "Да, подписываем NDA по запросу и можем работать с билдом под эмбарго до анонса.",
          en: "Yes, we sign an NDA on request and can work with a build under embargo before the announcement.",
        },
      },
      {
        q: {
          ru: "Берёте готовые CGI-сцены из трейлера для UA-креатива?",
          en: "Do you reuse CGI scenes from a trailer for UA creatives?",
        },
        a: {
          ru: "Да, это частая связка — переиспользуем рендеры из трейлера в UA-нарезке, это быстрее и дешевле нового продакшна.",
          en: "Yes, it's a common combination — reusing trailer renders in a UA cutdown is faster and cheaper than a new production.",
        },
      },
    ],
  },
  {
    slug: "tiktok-ads-creative",
    metaTitle: { ru: "Креативы для TikTok Ads | Nitroreel", en: "Creatives for TikTok Ads | Nitroreel" },
    metaDescription: {
      ru: "Видеокреативы под TikTok Ads: формат 9:16, UGC-имитация, CGI-геймплей, хук за 1,5 секунды. Burst-тест связок перед масштабированием.",
      en: "Video creatives for TikTok Ads: 9:16 format, UGC-style ads, CGI gameplay, a hook in 1.5 seconds. Burst-tested before scaling.",
    },
    eyebrow: { ru: "UA-видео · TikTok Ads", en: "UA video · TikTok Ads" },
    h1: { ru: "Креативы для TikTok Ads", en: "Creatives for TikTok Ads" },
    lead: {
      ru: "TikTok — это нативный формат, а не баннер с игрой: ролик, который выглядит как реклама, теряет CTR в первые же показы.",
      en: "TikTok is a native format, not a banner with a game bolted on — anything that looks like an ad loses CTR from the first impressions.",
    },
    intro: {
      ru: [
        "Собираем креативы под TikTok в логике самой площадки: вертикаль 9:16, монтаж под ритм ленты, хук в первые 1,5 секунды, часто — с UGC-имитацией или CGI-геймплеем, который не читается как классическая реклама.",
        "Тестируем 5–8 хуков за один спринт и по CTR/IPM burst-теста докручиваем связку — так экономим бюджет на масштабирование, вместо того чтобы гадать, какой формат зайдёт.",
      ],
      en: [
        "We build TikTok creatives in the platform's own logic: 9:16 vertical, editing paced to the feed, a hook in the first 1.5 seconds, often with UGC-style ads or CGI gameplay that doesn't read as a classic ad.",
        "We test 5–8 hooks in a single sprint and refine the combination by burst-test CTR/IPM — that saves scaling budget instead of guessing which format will land.",
      ],
    },
    bullets: {
      ru: [
        "Формат 9:16, монтаж под ритм ленты TikTok",
        "UGC-имитация и CGI-геймплей",
        "Хук за 1,5 секунды без опоры на звук",
        "Burst-тест связок перед масштабированием",
      ],
      en: [
        "9:16 format, editing paced to the TikTok feed",
        "UGC-style ads and CGI gameplay",
        "A hook in 1.5 seconds that doesn't rely on sound",
        "Burst-tested combinations before scaling",
      ],
    },
    faq: [
      {
        q: {
          ru: "Отличается ли монтаж для TikTok от Reels/Shorts?",
          en: "Is the edit different for TikTok versus Reels/Shorts?",
        },
        a: {
          ru: "Да, ритм и длина хука разные — берём один сценарий и переупаковываем под площадку, а не заливаем одно видео везде.",
          en: "Yes, the pacing and hook length differ — we take one script and repack it per platform instead of uploading the same cut everywhere.",
        },
      },
      {
        q: {
          ru: "Делаете UGC-имитацию с реальными актёрами?",
          en: "Do you shoot UGC-style ads with real actors?",
        },
        a: {
          ru: "Да, привлекаем UGC-креаторов под ваш профиль аудитории либо снимаем силами студии — зависит от бюджета и сроков.",
          en: "Yes, we bring in UGC creators matched to your audience profile, or shoot in-house — it depends on budget and timeline.",
        },
      },
    ],
  },
  {
    slug: "meta-ads-creative",
    metaTitle: { ru: "Креативы для Meta Ads — Facebook и Instagram | Nitroreel", en: "Creatives for Meta Ads — Facebook and Instagram | Nitroreel" },
    metaDescription: {
      ru: "Видеокреативы и адаптации под Meta Ads: лента, Stories, Reels, Advantage+. Burst-тест хуков перед полным батчем.",
      en: "Video creatives and adaptations for Meta Ads: feed, Stories, Reels, Advantage+. Hooks burst-tested before the full batch.",
    },
    eyebrow: { ru: "UA-видео · Meta Ads", en: "UA video · Meta Ads" },
    h1: { ru: "Креативы для Meta Ads (Facebook / Instagram)", en: "Creatives for Meta Ads (Facebook / Instagram)" },
    lead: {
      ru: "В Meta Ads решает не один ролик-победитель, а набор адаптаций под плейсменты — лента, Stories, Reels — с разной длиной и хуком.",
      en: "Meta Ads isn't won with one hero video — it's won with a set of placement adaptations for feed, Stories and Reels, each with its own length and hook.",
    },
    intro: {
      ru: [
        "Meta Ads размещает один креатив в десятке форматов одновременно, и то, что работает в ленте, часто проваливается в Stories из-за другого ритма просмотра. Мы сразу собираем набор адаптаций, а не один ролик под всё.",
        "Тестируем гипотезы хуков через Advantage+ и ручные кампании, смотрим на CTR и IPM по каждому плейсменту отдельно и докручиваем то, что держит CPI, вместо того чтобы усреднять результат по всем форматам сразу.",
      ],
      en: [
        "Meta Ads runs one creative across a dozen formats at once, and what works in the feed often falls flat in Stories because the viewing rhythm is different. We build a set of adaptations from the start, not one video for everything.",
        "We test hook hypotheses through Advantage+ and manual campaigns, watch CTR and IPM per placement separately, and double down on whatever holds CPI instead of averaging results across all formats.",
      ],
    },
    bullets: {
      ru: [
        "Адаптации под ленту, Stories, Reels отдельно",
        "Форматы под Advantage+ и ручные кампании",
        "Burst-тест хуков перед полным батчем",
        "Статика и видео из одного набора ассетов",
      ],
      en: [
        "Separate adaptations for feed, Stories, Reels",
        "Formats for both Advantage+ and manual campaigns",
        "Hooks burst-tested before the full batch",
        "Static and video pulled from the same asset set",
      ],
    },
    faq: [
      {
        q: { ru: "Делаете статичные баннеры вместе с видео?", en: "Do you produce static banners alongside video?" },
        a: {
          ru: "Да, из тех же сцен собираем статику — это не отдельный продакшн, а часть батча.",
          en: "Yes, we pull statics from the same scenes — it's not a separate production, just part of the batch.",
        },
      },
      {
        q: {
          ru: "Работаете с Advantage+ campaign budget?",
          en: "Do you work with Advantage+ campaign budget?",
        },
        a: {
          ru: "Да, знаем, как формат креатива влияет на то, что алгоритм будет масштабировать, и учитываем это в сценарии.",
          en: "Yes, we know how creative format affects what the algorithm ends up scaling, and we account for that in the script.",
        },
      },
    ],
  },
  {
    slug: "cinematic-trailer",
    metaTitle: { ru: "Cinematic-трейлер для мобильной игры | Nitroreel", en: "Cinematic trailer for a mobile game | Nitroreel" },
    metaDescription: {
      ru: "Продакшн cinematic-трейлеров для мобильных игр: сюжетная структура, CGI и 3D-рендеры, синхронизация с анонсом или обновлением.",
      en: "Cinematic trailer production for mobile games: story structure, CGI and 3D renders, synced with an announcement or update.",
    },
    eyebrow: { ru: "Трейлеры · Cinematic", en: "Trailers · Cinematic" },
    h1: { ru: "Cinematic-трейлер для мобильной игры", en: "Cinematic trailer for a mobile game" },
    lead: {
      ru: "Cinematic-трейлер продаёт не механику, а ощущение от мира игры — и должен работать даже для тех, кто ни разу не открывал приложение.",
      en: "A cinematic trailer isn't selling a mechanic — it's selling the feel of the game's world, and it has to work even for someone who's never opened the app.",
    },
    intro: {
      ru: [
        "Строим трейлер как маленькую историю: завязка, нарастание, кульминация — а не нарезку геймплея под музыку. Такой ролик работает и на сторе, и как якорный контент для анонса, ивента или обновления.",
        "Комбинируем реальный геймплей, CGI-вставки и 3D-рендеры там, где движок в реальном времени не даёт нужной картинки — например, для крупных планов персонажей или экшн-сцен, которые сложно поймать на записи.",
      ],
      en: [
        "We build the trailer as a short story — setup, rise, payoff — not a gameplay cutdown set to music. That kind of video works both on the store and as anchor content for an announcement, event or update.",
        "We combine real gameplay with CGI inserts and 3D renders wherever a real-time engine can't deliver the shot — character close-ups, or action beats that are hard to capture on a recording.",
      ],
    },
    bullets: {
      ru: [
        "Трёхактная структура, не нарезка под музыку",
        "CGI и 3D-рендеры для крупных планов",
        "Синхронизация с датой анонса или обновления",
        "Адаптация под превью App Store / Google Play",
      ],
      en: [
        "Three-act structure, not a cutdown set to music",
        "CGI and 3D renders for close-ups",
        "Synced with the announcement or update date",
        "Adapted for the App Store / Google Play preview",
      ],
    },
    faq: [
      {
        q: { ru: "Сколько длится трейлер?", en: "How long is a trailer?" },
        a: {
          ru: "Обычно 30–60 секунд для стора и 60–90 секунд для анонса на YouTube — длину подбираем под площадку.",
          en: "Usually 30–60 seconds for the store and 60–90 seconds for a YouTube announcement — length is matched to the platform.",
        },
      },
      {
        q: { ru: "Нужен готовый билд игры?", en: "Do you need a finished game build?" },
        a: {
          ru: "Желательно, но не обязательно — можем собрать сцены из отдельных ассетов и артов, если билд ещё не готов.",
          en: "Preferably, but not required — we can assemble scenes from individual assets and art if the build isn't ready yet.",
        },
      },
    ],
  },
  {
    slug: "app-store-trailer",
    metaTitle: { ru: "Трейлер для App Store и Google Play | Nitroreel", en: "Trailer for the App Store and Google Play | Nitroreel" },
    metaDescription: {
      ru: "Store-видео под требования App Store и Google Play: хук без звука, длительность 15–30 секунд, синхронизация со скриншотами и ASO.",
      en: "Store video built for App Store and Google Play requirements: a sound-off hook, 15–30 seconds, synced with screenshots and ASO.",
    },
    eyebrow: { ru: "Трейлеры · Store-видео", en: "Trailers · Store video" },
    h1: { ru: "Трейлер для App Store и Google Play", en: "Trailer for the App Store and Google Play" },
    lead: {
      ru: "Store-видео — единственный ролик, который видит пользователь уже на странице установки, и он должен закрыть решение за 15–30 секунд.",
      en: "The store video is the one thing a user sees right on the install page, and it has to close the decision in 15–30 seconds.",
    },
    intro: {
      ru: [
        "App Store и Google Play показывают превью-ролик до полного скачивания — это последняя точка перед установкой, где ещё можно поднять конверсию. Строим ролик под конкретные требования площадки: разрешение, длительность, автозапуск без звука.",
        "Начинаем с кадра, который цепляет в mute-режиме — большинство просматривает превью без звука, — и показываем ключевую механику в первые секунды, а не логотип студии или долгий брендинг.",
      ],
      en: [
        "The App Store and Google Play play a preview video before the full download — it's the last point where conversion can still move. We build the video around the platform's exact requirements: resolution, length, autoplay without sound.",
        "We open with a frame that lands muted — most people watch previews with sound off — and show the core mechanic in the first seconds instead of a studio logo or a long brand intro.",
      ],
    },
    bullets: {
      ru: [
        "Требования App Store и Google Play учтены с самого сценария",
        "Хук без звука для автозапуска в mute",
        "Длительность 15–30 секунд под лимиты сторов",
        "Синхронизация со скриншотами и ASO-текстом",
      ],
      en: [
        "App Store and Google Play requirements baked into the script",
        "A sound-off hook for muted autoplay",
        "15–30 seconds to fit store limits",
        "Synced with screenshots and ASO copy",
      ],
    },
    faq: [
      {
        q: {
          ru: "Учитываете гайдлайны Apple/Google при монтаже?",
          en: "Do you account for Apple/Google guidelines during editing?",
        },
        a: {
          ru: "Да, знаем ограничения по контенту, разрешению и длительности для обеих площадок и сдаём файл уже под их требования.",
          en: "Yes, we know the content, resolution and length limits for both platforms and deliver the file already matched to them.",
        },
      },
      {
        q: { ru: "Можно ли использовать этот же ролик для UA?", en: "Can the same video be used for UA?" },
        a: {
          ru: "Частично — обычно store-версия длиннее и спокойнее, чем UA-хук, но кадры и рендеры переиспользуем.",
          en: "Partly — the store cut is usually longer and calmer than a UA hook, but we reuse the shots and renders.",
        },
      },
    ],
  },
  {
    slug: "ugc-style-ads",
    metaTitle: { ru: "UGC-имитация для paid-креативов мобильных игр | Nitroreel", en: "UGC-style ads for mobile game paid creatives | Nitroreel" },
    metaDescription: {
      ru: "Продакшн UGC-имитации для UA-кампаний: реальные креаторы или актёры студии, ракурсы и темп как в органическом контенте.",
      en: "UGC-style ad production for UA campaigns: real creators or in-house actors, shot and pacing matched to organic content.",
    },
    eyebrow: { ru: "UA-видео · UGC", en: "UA video · UGC" },
    h1: { ru: "UGC-имитация для paid-креативов", en: "UGC-style ads for paid creatives" },
    lead: {
      ru: "UGC-формат работает потому, что не выглядит рекламой — но снять убедительную имитацию сложнее, чем кажется.",
      en: "UGC works because it doesn't look like an ad — but a convincing imitation is harder to shoot than it looks.",
    },
    intro: {
      ru: [
        "Настоящий UGC долго и дорого собирать под каждую гипотезу, поэтому чаще студии продюсируют UGC-имитацию: те же ракурсы, темп речи и монтаж, что в органическом контенте, но управляемо и быстро — под конкретный хук и аудиторию.",
        "Работаем двумя способами: привлекаем реальных UGC-креаторов под профиль вашей аудитории или снимаем силами студии с актёрами и постановкой под формат — выбор зависит от бюджета, сроков и того, насколько нишевая аудитория.",
      ],
      en: [
        "Real UGC is slow and expensive to collect for every hypothesis, so studios usually produce UGC-style ads instead: the same camera angles, speech pace and editing as organic content, but controllable and fast — built for a specific hook and audience.",
        "We work two ways: bringing in real UGC creators matched to your audience profile, or shooting in-house with actors and staging built for the format — the choice depends on budget, timeline and how niche the audience is.",
      ],
    },
    bullets: {
      ru: [
        "Реальные UGC-креаторы или продакшн силами студии",
        "Ракурсы и темп речи как в органическом контенте",
        "Под конкретную гипотезу хука, не общий бренд-ролик",
        "Быстрый цикл — от брифа до готового ролика за несколько дней",
      ],
      en: [
        "Real UGC creators or in-house production",
        "Camera angles and pacing matched to organic content",
        "Built for a specific hook hypothesis, not a generic brand video",
        "Fast turnaround — from brief to finished video in a few days",
      ],
    },
    faq: [
      {
        q: {
          ru: "Чем UGC-имитация отличается от реального UGC?",
          en: "How is a UGC-style ad different from real UGC?",
        },
        a: {
          ru: "Управляемостью и скоростью — тот же стиль и доверие, но без непредсказуемости съёмок с блогерами и с чётким дедлайном.",
          en: "Control and speed — the same style and trust signals, but without the unpredictability of shooting with creators and with a firm deadline.",
        },
      },
      {
        q: {
          ru: "Подходит ли UGC для midcore/RPG или это только для казуалок?",
          en: "Does UGC work for midcore/RPG, or is it only for casual games?",
        },
        a: {
          ru: "Работает и там, если показывает реальную механику, а не абстрактный лайфстайл — иначе аудитория считывает фальшь быстрее, чем в hypercasual.",
          en: "It works there too, as long as it shows a real mechanic rather than abstract lifestyle content — otherwise this audience spots the fake even faster than a hyper-casual one would.",
        },
      },
    ],
  },
  {
    slug: "3d-animation-mobile-game",
    metaTitle: { ru: "3D-анимация и CGI для игровых роликов | Nitroreel", en: "3D animation and CGI for game videos | Nitroreel" },
    metaDescription: {
      ru: "3D-рендеры, катсцены и экшн-анимация для трейлеров и UA-креативов мобильных игр. Ассеты переиспользуются между роликами.",
      en: "3D renders, cutscenes and action animation for mobile game trailers and UA creatives. Assets reused across every video.",
    },
    eyebrow: { ru: "3D-анимация · CGI", en: "3D animation · CGI" },
    h1: { ru: "3D-анимация и CGI для игровых роликов", en: "3D animation and CGI for game videos" },
    lead: {
      ru: "3D-рендер нужен там, где движок в реальном времени пока не даёт нужной картинки — крупный план персонажа, разрушение, кульминация трейлера.",
      en: "3D rendering earns its place wherever a real-time engine can't deliver the shot yet — a character close-up, destruction, a trailer's payoff moment.",
    },
    intro: {
      ru: [
        "Не заменяем 3D-анимацией весь ролик — комбинируем с реальным геймплеем там, где рендер действительно решает задачу: катсцена, кульминационный экшн-момент, лут-момент крупным планом. Это дешевле и честнее по срокам, чем рендерить весь ролик с нуля.",
        "Работаем с катсценами, рендерами персонажей и окружений, экшн-анимацией под трейлеры и обновления. Материалы из одного 3D-продакшна переиспользуем и в трейлере, и в нарезке UA-хуков, и в анонсах для соцсетей.",
      ],
      en: [
        "We don't replace the whole video with 3D — we combine it with real gameplay wherever a render actually earns its place: a cutscene, an action payoff, a close-up loot moment. That's cheaper and more honest on timeline than rendering the whole video from scratch.",
        "We work with cutscenes, character and environment renders, and action animation for trailers and updates. Assets from one 3D production get reused in the trailer, in UA hook cutdowns, and in social announcements.",
      ],
    },
    bullets: {
      ru: [
        "Катсцены и рендеры персонажей",
        "Экшн-сцены для кульминации трейлера",
        "Совместимо с реальным геймплеем в одном монтаже",
        "Ассеты переиспользуются между трейлером, UA и соцсетями",
      ],
      en: [
        "Cutscenes and character renders",
        "Action scenes for a trailer's payoff",
        "Cuts together with real gameplay in one edit",
        "Assets reused across trailer, UA and social",
      ],
    },
    faq: [
      {
        q: { ru: "Сколько занимает 3D-продакшн?", en: "How long does 3D production take?" },
        a: {
          ru: "От 2 до 4 недель в зависимости от количества сцен и сложности рендеров — сроки фиксируем после раскадровки.",
          en: "Two to four weeks depending on scene count and render complexity — we lock the timeline after the storyboard.",
        },
      },
      {
        q: {
          ru: "Нужны ли нам свои 3D-модели персонажей?",
          en: "Do we need our own 3D character models?",
        },
        a: {
          ru: "Желательно иметь исходные модели или референсы из движка — так рендер точнее совпадает с игрой. Если моделей нет, можем обсудить продакшн с нуля отдельно.",
          en: "It helps to have source models or engine references so the render matches the game closely. If there are none, we can scope building them from scratch separately.",
        },
      },
    ],
  },
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}
