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
      ru: "UA-видео для hypercasual игр - батч хуков за 10 дней | Nitroreel",
      en: "UA video for hyper-casual games - a batch of hooks in 10 days | Nitroreel",
    },
    metaDescription: {
      ru: "Продакшн UA-креативов для hypercasual: хуки, гипотезы, burst-тест в сетях. Батч из 10 роликов за 10 рабочих дней, экспресс за 5.",
      en: "UA creative production for hyper-casual: hooks, hypotheses, a burst test in ad networks. Ten videos in 10 working days, rush in 5.",
    },
    eyebrow: { ru: "UA-видео · Hypercasual", en: "UA video · Hyper-casual" },
    h1: { ru: "UA-видео для hypercasual игр", en: "UA video for hyper-casual games" },
    lead: {
      ru: "Hypercasual живёт на CPI и retention дня 1 - ролик должен зацепить за первую секунду и не соврать про геймплей.",
      en: "Hyper-casual lives and dies by CPI and day-1 retention - the video has to hook in the first second and not lie about the gameplay.",
    },
    intro: {
      ru: [
        "В hypercasual нет времени на разгон: если хук не сработал в первые 1,5 секунды, пользователь уже пролистал. Мы строим сценарий вокруг одного чёткого конфликта - не сюжета, а физического действия, которое считывается без звука.",
        "Тестируем не ролик целиком, а отдельные хуки: генерируем через AI 15–20+ вариаций первых секунд и запускаем burst-тест, чтобы найти связку с лучшим CTR/IPM до того, как тратить бюджет на полную адаптацию под все форматы.",
      ],
      en: [
        "There's no runway in hyper-casual: if the hook doesn't land in the first 1.5 seconds, the user has already scrolled past. We build the script around one clear conflict - not a story, a physical action that reads without sound.",
        "We don't test the whole video, we test hooks: generating 15–20+ variations of the opening with AI and running a burst test to find the combination with the best CTR/IPM before spending budget on full adaptations.",
      ],
    },
    bullets: {
      ru: [
        "Хуки без звука - считываются в mute-режиме ленты",
        "AI-генерация визуала - дешевле и быстрее классической съёмки",
        "Адаптация под Meta, TikTok, Google Ads UA, Unity Ads",
        "Burst-тест 15–20+ вариаций хука за один спринт",
      ],
      en: [
        "Sound-off hooks - read clearly in a muted feed",
        "AI-generated visuals - cheaper and faster than a classic shoot",
        "Adaptations for Meta, TikTok, Google Ads UA, Unity Ads",
        "Burst test of 15–20+ hook variations in a single sprint",
      ],
    },
    faq: [
      {
        q: { ru: "Нужен ли отснятый геймплей?", en: "Do you need existing gameplay footage?" },
        a: {
          ru: "Не обязательно - можем сгенерировать визуал через AI по референсам вашей игры (скриншоты, арт, билд) или записать реальный геймплей, если для конкретного хука важна именно он.",
          en: "Not necessarily - we can generate visuals with AI from your game's references (screenshots, art, build), or capture real gameplay when a specific hook calls for it.",
        },
      },
      {
        q: { ru: "Сколько хуков в одном батче?", en: "How many hooks are in one batch?" },
        a: {
          ru: "Обычно 15–20 хуков на 3–4 базовых сценария - AI-продакшн позволяет генерировать больше вариаций за тот же бюджет, что даёт статистически надёжный burst-тест.",
          en: "Usually 15–20 hooks across 3–4 base scripts - AI production lets us generate more variations on the same budget, giving a statistically solid burst test.",
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
      ru: "В midcore и RPG решает не хук ради хука, а обещание глубины - прогрессии, лута, механики - которое ролик должен показать за 15–20 секунд.",
      en: "In midcore and RPG it's not the hook for its own sake - it's the promise of depth: progression, loot, mechanics, shown in 15–20 seconds.",
    },
    intro: {
      ru: [
        "Аудитория midcore и RPG смотрит рекламу внимательнее, чем в hypercasual, и быстро считывает фальшь - постановочный геймплей или преувеличенная механика уводят в минус retention и review-score.",
        "Строим креатив через AI-генерацию визуала вокруг реальной механики: прокачка, редкий лут, PvP-момент - то, что игрок увидит в первые 10 минут после установки. Это снижает разрыв между обещанием в ролике и первой сессией, а значит держит D1 retention.",
      ],
      en: [
        "Midcore and RPG audiences watch ads more carefully than hyper-casual ones and spot fakes fast - staged gameplay or an exaggerated mechanic drags down retention and review scores.",
        "We build the creative with AI-generated visuals around a real mechanic - a level-up, a rare loot drop, a PvP moment - something the player will actually see in the first ten minutes after install. That closes the gap between the ad's promise and the first session, which is what keeps D1 retention up.",
      ],
    },
    bullets: {
      ru: [
        "Сценарий вокруг реальной механики, визуал - через AI",
        "Адаптации под Google Ads UA, Meta Ads, Unity Ads",
        "Форматы 15–30 секунд под разные плейсменты",
        "Синхронизация с ASO-роликом на сторе",
      ],
      en: [
        "Script built around a real mechanic, visuals built with AI",
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
          ru: "Да, это частая связка - переиспользуем AI-рендеры из трейлера в UA-нарезке, это быстрее и дешевле нового продакшна.",
          en: "Yes, it's a common combination - reusing AI renders from the trailer in a UA cutdown is faster and cheaper than a new production.",
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
      ru: "TikTok - это нативный формат, а не баннер с игрой: ролик, который выглядит как реклама, теряет CTR в первые же показы.",
      en: "TikTok is a native format, not a banner with a game bolted on - anything that looks like an ad loses CTR from the first impressions.",
    },
    intro: {
      ru: [
        "Собираем креативы под TikTok в логике самой площадки: вертикаль 9:16, монтаж под ритм ленты, хук в первые 1,5 секунды, часто - с UGC-имитацией или CGI-геймплеем, который не читается как классическая реклама.",
        "Генерируем через AI и тестируем 15–20 хуков за один спринт, по CTR/IPM burst-теста докручиваем связку - так экономим бюджет на масштабирование, вместо того чтобы гадать, какой формат зайдёт.",
      ],
      en: [
        "We build TikTok creatives in the platform's own logic: 9:16 vertical, editing paced to the feed, a hook in the first 1.5 seconds, often with UGC-style ads or CGI gameplay that doesn't read as a classic ad.",
        "We generate with AI and test 15–20 hooks in a single sprint, refining the combination by burst-test CTR/IPM - that saves scaling budget instead of guessing which format will land.",
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
          ru: "Да, ритм и длина хука разные - берём один сценарий и переупаковываем под площадку, а не заливаем одно видео везде.",
          en: "Yes, the pacing and hook length differ - we take one script and repack it per platform instead of uploading the same cut everywhere.",
        },
      },
      {
        q: {
          ru: "Делаете UGC-имитацию с реальными актёрами?",
          en: "Do you shoot UGC-style ads with real actors?",
        },
        a: {
          ru: "В основном генерируем через AI под ваш профиль аудитории - быстрее и дешевле съёмки с блогерами. Классическую съёмку с реальными UGC-креаторами тоже можем обсудить отдельно, если хуку нужно именно живое лицо.",
          en: "Mostly we generate them with AI, matched to your audience profile - faster and cheaper than shooting with creators. Real UGC creators or an in-house shoot are still on the table if a hook specifically needs a live face.",
        },
      },
    ],
  },
  {
    slug: "meta-ads-creative",
    metaTitle: { ru: "Креативы для Meta Ads - Facebook и Instagram | Nitroreel", en: "Creatives for Meta Ads - Facebook and Instagram | Nitroreel" },
    metaDescription: {
      ru: "Видеокреативы и адаптации под Meta Ads: лента, Stories, Reels, Advantage+. Burst-тест хуков перед полным батчем.",
      en: "Video creatives and adaptations for Meta Ads: feed, Stories, Reels, Advantage+. Hooks burst-tested before the full batch.",
    },
    eyebrow: { ru: "UA-видео · Meta Ads", en: "UA video · Meta Ads" },
    h1: { ru: "Креативы для Meta Ads (Facebook / Instagram)", en: "Creatives for Meta Ads (Facebook / Instagram)" },
    lead: {
      ru: "В Meta Ads решает не один ролик-победитель, а набор адаптаций под плейсменты - лента, Stories, Reels - с разной длиной и хуком.",
      en: "Meta Ads isn't won with one hero video - it's won with a set of placement adaptations for feed, Stories and Reels, each with its own length and hook.",
    },
    intro: {
      ru: [
        "Meta Ads размещает один креатив в десятке форматов одновременно, и то, что работает в ленте, часто проваливается в Stories из-за другого ритма просмотра. Мы сразу собираем через AI набор адаптаций, а не один ролик под всё.",
        "Тестируем гипотезы хуков через Advantage+ и ручные кампании, смотрим на CTR и IPM по каждому плейсменту отдельно и докручиваем то, что держит CPI, вместо того чтобы усреднять результат по всем форматам сразу.",
      ],
      en: [
        "Meta Ads runs one creative across a dozen formats at once, and what works in the feed often falls flat in Stories because the viewing rhythm is different. We build a set of AI-generated adaptations from the start, not one video for everything.",
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
          ru: "Да, из тех же сцен собираем статику - это не отдельный продакшн, а часть батча.",
          en: "Yes, we pull statics from the same scenes - it's not a separate production, just part of the batch.",
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
      ru: "Cinematic-трейлер продаёт не механику, а ощущение от мира игры - и должен работать даже для тех, кто ни разу не открывал приложение.",
      en: "A cinematic trailer isn't selling a mechanic - it's selling the feel of the game's world, and it has to work even for someone who's never opened the app.",
    },
    intro: {
      ru: [
        "Строим трейлер как маленькую историю: завязка, нарастание, кульминация - а не нарезку геймплея под музыку. Такой ролик работает и на сторе, и как якорный контент для анонса, ивента или обновления.",
        "Комбинируем реальный геймплей с AI-генерацией и 3D-рендерами там, где движок в реальном времени не даёт нужной картинки - например, для крупных планов персонажей или экшн-сцен, которые сложно поймать на записи. AI-продакшн быстрее и дешевле классического CGI-конвейера.",
      ],
      en: [
        "We build the trailer as a short story - setup, rise, payoff - not a gameplay cutdown set to music. That kind of video works both on the store and as anchor content for an announcement, event or update.",
        "We combine real gameplay with AI generation and 3D renders wherever a real-time engine can't deliver the shot - character close-ups, or action beats that are hard to capture on a recording. AI production is faster and cheaper than a classic CGI pipeline.",
      ],
    },
    bullets: {
      ru: [
        "Трёхактная структура, не нарезка под музыку",
        "AI-генерация и 3D-рендеры для крупных планов",
        "Синхронизация с датой анонса или обновления",
        "Адаптация под превью App Store / Google Play",
      ],
      en: [
        "Three-act structure, not a cutdown set to music",
        "AI generation and 3D renders for close-ups",
        "Synced with the announcement or update date",
        "Adapted for the App Store / Google Play preview",
      ],
    },
    faq: [
      {
        q: { ru: "Сколько длится трейлер?", en: "How long is a trailer?" },
        a: {
          ru: "Обычно 30–60 секунд для стора и 60–90 секунд для анонса на YouTube - длину подбираем под площадку.",
          en: "Usually 30–60 seconds for the store and 60–90 seconds for a YouTube announcement - length is matched to the platform.",
        },
      },
      {
        q: { ru: "Нужен готовый билд игры?", en: "Do you need a finished game build?" },
        a: {
          ru: "Желательно, но не обязательно - можем собрать сцены из отдельных ассетов и артов, если билд ещё не готов.",
          en: "Preferably, but not required - we can assemble scenes from individual assets and art if the build isn't ready yet.",
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
      ru: "Store-видео - единственный ролик, который видит пользователь уже на странице установки, и он должен закрыть решение за 15–30 секунд.",
      en: "The store video is the one thing a user sees right on the install page, and it has to close the decision in 15–30 seconds.",
    },
    intro: {
      ru: [
        "App Store и Google Play показывают превью-ролик до полного скачивания - это последняя точка перед установкой, где ещё можно поднять конверсию. Собираем визуал через AI и строим ролик под конкретные требования площадки: разрешение, длительность, автозапуск без звука.",
        "Начинаем с кадра, который цепляет в mute-режиме - большинство просматривает превью без звука, - и показываем ключевую механику в первые секунды, а не логотип студии или долгий брендинг.",
      ],
      en: [
        "The App Store and Google Play play a preview video before the full download - it's the last point where conversion can still move. We build the visuals with AI and cut the video to the platform's exact requirements: resolution, length, autoplay without sound.",
        "We open with a frame that lands muted - most people watch previews with sound off - and show the core mechanic in the first seconds instead of a studio logo or a long brand intro.",
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
          ru: "Частично - обычно store-версия длиннее и спокойнее, чем UA-хук, но кадры и рендеры переиспользуем.",
          en: "Partly - the store cut is usually longer and calmer than a UA hook, but we reuse the shots and renders.",
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
      ru: "UGC-формат работает потому, что не выглядит рекламой - но собрать убедительную имитацию сложнее, чем кажется.",
      en: "UGC works because it doesn't look like an ad - but a convincing imitation is harder to pull off than it looks.",
    },
    intro: {
      ru: [
        "Настоящий UGC долго и дорого собирать под каждую гипотезу, поэтому мы генерируем UGC-имитацию через AI: те же ракурсы, темп речи и монтаж, что в органическом контенте, но управляемо, быстро и без съёмочного дня - под конкретный хук и аудиторию.",
        "В основном работаем через AI-генерацию под профиль вашей аудитории - это дешевле и быстрее классической съёмки. Реальных UGC-креаторов или продакшн силами студии подключаем отдельно, если конкретному хуку нужно именно живое лицо.",
      ],
      en: [
        "Real UGC is slow and expensive to collect for every hypothesis, so we generate UGC-style ads with AI instead: the same camera angles, speech pace and editing as organic content, but controllable, fast, and without a shoot day - built for a specific hook and audience.",
        "Mostly we work through AI generation matched to your audience profile - cheaper and faster than a classic shoot. Real UGC creators or an in-house production are still on the table if a specific hook needs a live face.",
      ],
    },
    bullets: {
      ru: [
        "AI-генерация под профиль вашей аудитории",
        "Ракурсы и темп речи как в органическом контенте",
        "Под конкретную гипотезу хука, не общий бренд-ролик",
        "Быстрый цикл - от брифа до готового ролика за 1–2 дня",
      ],
      en: [
        "AI generation matched to your audience profile",
        "Camera angles and pacing matched to organic content",
        "Built for a specific hook hypothesis, not a generic brand video",
        "Fast turnaround - from brief to finished video in 1–2 days",
      ],
    },
    faq: [
      {
        q: {
          ru: "Чем UGC-имитация отличается от реального UGC?",
          en: "How is a UGC-style ad different from real UGC?",
        },
        a: {
          ru: "Управляемостью и скоростью: генерируем через AI, поэтому нет зависимости от графика блогеров и непредсказуемости съёмок, а стиль и доверие органического контента сохраняются.",
          en: "Control and speed: we generate it with AI, so there's no dependency on a creator's schedule or the unpredictability of a shoot, while the style and trust signals of organic content stay intact.",
        },
      },
      {
        q: {
          ru: "Подходит ли UGC для midcore/RPG или это только для казуалок?",
          en: "Does UGC work for midcore/RPG, or is it only for casual games?",
        },
        a: {
          ru: "Работает и там, если показывает реальную механику, а не абстрактный лайфстайл - иначе аудитория считывает фальшь быстрее, чем в hypercasual.",
          en: "It works there too, as long as it shows a real mechanic rather than abstract lifestyle content - otherwise this audience spots the fake even faster than a hyper-casual one would.",
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
      ru: "3D-рендер нужен там, где движок в реальном времени пока не даёт нужной картинки - крупный план персонажа, разрушение, кульминация трейлера.",
      en: "3D rendering earns its place wherever a real-time engine can't deliver the shot yet - a character close-up, destruction, a trailer's payoff moment.",
    },
    intro: {
      ru: [
        "Не заменяем AI-анимацией весь ролик - комбинируем с реальным геймплеем там, где рендер действительно решает задачу: катсцена, кульминационный экшн-момент, лут-момент крупным планом. Генерируем через AI вместо ручного 3D-конвейера - это на порядок дешевле и быстрее студийного рендера.",
        "Работаем с катсценами, рендерами персонажей и окружений, экшн-анимацией под трейлеры и обновления. Материалы из одной AI-генерации переиспользуем и в трейлере, и в нарезке UA-хуков, и в анонсах для соцсетей.",
      ],
      en: [
        "We don't replace the whole video with AI animation - we combine it with real gameplay wherever a render actually earns its place: a cutscene, an action payoff, a close-up loot moment. We generate it with AI instead of a manual 3D pipeline - an order of magnitude cheaper and faster than a studio render.",
        "We work with cutscenes, character and environment renders, and action animation for trailers and updates. Assets from one AI generation pass get reused in the trailer, in UA hook cutdowns, and in social announcements.",
      ],
    },
    bullets: {
      ru: [
        "AI-катсцены и рендеры персонажей",
        "Экшн-сцены для кульминации трейлера",
        "Совместимо с реальным геймплеем в одном монтаже",
        "Ассеты переиспользуются между трейлером, UA и соцсетями",
      ],
      en: [
        "AI cutscenes and character renders",
        "Action scenes for a trailer's payoff",
        "Cuts together with real gameplay in one edit",
        "Assets reused across trailer, UA and social",
      ],
    },
    faq: [
      {
        q: { ru: "Сколько занимает 3D-продакшн?", en: "How long does 3D production take?" },
        a: {
          ru: "От нескольких дней до двух недель в зависимости от количества сцен и сложности рендеров - AI-генерация заметно быстрее классического 3D-конвейера, точные сроки фиксируем после раскадровки.",
          en: "From a few days to two weeks depending on scene count and render complexity - AI generation is noticeably faster than a classic 3D pipeline; we lock the exact timeline after the storyboard.",
        },
      },
      {
        q: {
          ru: "Нужны ли нам свои 3D-модели персонажей?",
          en: "Do we need our own 3D character models?",
        },
        a: {
          ru: "Не обязательно - AI может сгенерировать по референсам, артам или скриншотам из игры. Свои модели или рендеры из движка ускоряют процесс, но не строго необходимы.",
          en: "Not necessarily - AI can generate from references, art or in-game screenshots. Your own models or engine renders speed things up, but aren't strictly required.",
        },
      },
    ],
  },
  {
    slug: "google-ads-creative",
    metaTitle: { ru: "Креативы для Google Ads UA | Nitroreel", en: "Creatives for Google Ads UA | Nitroreel" },
    metaDescription: {
      ru: "Видеокреативы для Google Ads UA: адаптация под AdMob, YouTube и Discovery, хук под автозапуск без звука, burst-тест перед масштабированием.",
      en: "Video creatives for Google Ads UA: adapted for AdMob, YouTube and Discovery, a sound-off autoplay hook, burst-tested before scaling.",
    },
    eyebrow: { ru: "UA-видео · Google Ads", en: "UA video · Google Ads" },
    h1: { ru: "Креативы для Google Ads UA", en: "Creatives for Google Ads UA" },
    lead: {
      ru: "Google Ads UA - это не один плейсмент, а сеть AdMob, YouTube и Discovery одновременно, и в каждом ролик работает по-своему.",
      en: "Google Ads UA isn't one placement - it's AdMob, YouTube and Discovery at once, and the same video performs differently in each.",
    },
    intro: {
      ru: [
        "Google UA-кампании автоматически подбирают, где показать креатив - от баннерной сетки AdMob до ленты YouTube, и алгоритм сам решает, что масштабировать. Мы собираем сразу несколько форматов и длин под один хук, чтобы у Google было из чего выбирать, а не один ролик на все плейсменты.",
        "Генерируем визуал через AI и тестируем гипотезы хуков перед полным батчем - burst-тест показывает, какая связка держит CTR и IPM в AdMob, прежде чем тратить бюджет на масштабирование в Performance Max.",
      ],
      en: [
        "Google UA campaigns pick the placement automatically - anywhere from the AdMob banner network to the YouTube feed - and the algorithm decides what to scale on its own. We build several formats and lengths around one hook so Google has something to choose from, instead of one video stretched across every placement.",
        "We generate the visuals with AI and test hook hypotheses before the full batch - a burst test shows which combination holds CTR and IPM in AdMob before we spend budget scaling it through Performance Max.",
      ],
    },
    bullets: {
      ru: [
        "Форматы под AdMob, YouTube, Discovery из одного хука",
        "AI-генерация визуала вместо классической съёмки",
        "Хук под автозапуск без звука",
        "Burst-тест перед Performance Max",
      ],
      en: [
        "Formats for AdMob, YouTube, Discovery from one hook",
        "AI-generated visuals instead of a classic shoot",
        "A hook built for muted autoplay",
        "Burst-tested before Performance Max",
      ],
    },
    faq: [
      {
        q: { ru: "Работаете с кампаниями Performance Max?", en: "Do you work with Performance Max campaigns?" },
        a: {
          ru: "Да, знаем, как формат ассетов влияет на то, что алгоритм Performance Max будет масштабировать, и собираем батч с расчётом на это.",
          en: "Yes - we know how the asset format affects what Performance Max ends up scaling, and we build the batch with that in mind.",
        },
      },
      {
        q: { ru: "Нужны отдельные ролики для AdMob и YouTube?", en: "Do AdMob and YouTube need separate videos?" },
        a: {
          ru: "Обычно да - в AdMob решает первая секунда без звука, в YouTube можно закладывать чуть более длинный разгон. Собираем оба из одного набора AI-генераций, а не с нуля.",
          en: "Usually yes - AdMob lives or dies by the first silent second, YouTube can afford a slightly longer build-up. We cut both from the same set of AI generations instead of starting over.",
        },
      },
    ],
  },
  {
    slug: "playable-ads",
    metaTitle: { ru: "Playable-реклама для мобильных игр | Nitroreel", en: "Playable ads for mobile games | Nitroreel" },
    metaDescription: {
      ru: "Продакшн playable-креативов: интерактивный прототип механики за 15–30 секунд, видео-обёртка как запасной хук, тест перед полным батчем.",
      en: "Playable ad production: a 15–30 second interactive prototype of the mechanic, a video end-card as a fallback hook, tested before the full batch.",
    },
    eyebrow: { ru: "UA-видео · Playable", en: "UA video · Playable" },
    h1: { ru: "Playable-реклама для мобильных игр", en: "Playable ads for mobile games" },
    lead: {
      ru: "Playable даёт попробовать механику до установки - но плохо собранный прототип портит впечатление хуже, чем обычное видео.",
      en: "A playable ad lets someone try the mechanic before they install - but a poorly built prototype does more damage than a plain video ever would.",
    },
    intro: {
      ru: [
        "Собираем интерактивный прототип вокруг одной механики - той, что реально держит retention в игре, а не самой эффектной с виду. Тапнуть, свайпнуть, собрать комбо: задача - дать почувствовать игру за 15–30 секунд, а не показать демо всех фич сразу.",
        "Визуал и анимацию для прототипа собираем через AI - это быстрее ручной сборки под HTML5/Unity плеер и дешевле, чем тестировать несколько вариантов вручную. К каждому playable добавляем видео-обёртку с тем же хуком - на случай площадок, где интерактив не поддерживается.",
      ],
      en: [
        "We build the interactive prototype around one mechanic - the one that actually drives retention in the game, not just the flashiest-looking one. Tap, swipe, chain a combo: the goal is to make someone feel the game in 15–30 seconds, not demo every feature at once.",
        "We build the prototype's visuals and animation with AI - faster than hand-building for an HTML5/Unity player, and cheaper than testing several versions by hand. Every playable ships with a video end-card built around the same hook, for placements that don't support interactive units.",
      ],
    },
    bullets: {
      ru: [
        "Прототип вокруг одной retention-механики",
        "AI-генерация визуала для HTML5/Unity плеера",
        "Видео-обёртка с тем же хуком как запасной вариант",
        "Тест конверсии в install перед масштабированием",
      ],
      en: [
        "A prototype built around one retention mechanic",
        "AI-generated visuals for the HTML5/Unity player",
        "A video end-card with the same hook as a fallback",
        "Install-conversion tested before scaling",
      ],
    },
    faq: [
      {
        q: { ru: "На каких сетях запускаются playable?", en: "Which networks support playable ads?" },
        a: {
          ru: "Meta, Google Ads UA, Unity Ads, Applovin, TikTok - собираем под технические требования конкретной сети, они отличаются по весу файла и SDK.",
          en: "Meta, Google Ads UA, Unity Ads, AppLovin, TikTok - we build to each network's specific technical limits, since file size and SDK requirements differ.",
        },
      },
      {
        q: { ru: "Сколько занимает продакшн playable?", en: "How long does a playable ad take to produce?" },
        a: {
          ru: "Обычно 5–7 дней на одну механику, включая интерактивный прототип и видео-обёртку - дольше, чем обычный UA-ролик, но тестируем меньше вариантов сразу.",
          en: "Usually 5–7 days per mechanic, including the interactive prototype and the video end-card - longer than a plain UA video, but we test fewer variants at once.",
        },
      },
    ],
  },
  {
    slug: "ua-video-casual",
    metaTitle: { ru: "UA-видео для casual игр | Nitroreel", en: "UA video for casual games | Nitroreel" },
    metaDescription: {
      ru: "Видеокреативы для casual-игр: спокойный темп, satisfaction-моменты вместо агрессивного хука, адаптации под Meta, Google Ads UA, TikTok.",
      en: "Video creatives for casual games: a calmer pace, satisfaction moments instead of an aggressive hook, adapted for Meta, Google Ads UA, TikTok.",
    },
    eyebrow: { ru: "UA-видео · Casual", en: "UA video · Casual" },
    h1: { ru: "UA-видео для casual игр", en: "UA video for casual games" },
    lead: {
      ru: "В casual решает не резкость хука, а ощущение удовольствия от процесса - агрессивный монтаж из hypercasual здесь работает хуже, а не лучше.",
      en: "Casual isn't won with a sharp hook - it's won by the pleasure of the process itself, and the aggressive editing that works in hyper-casual actually performs worse here.",
    },
    intro: {
      ru: [
        "Аудитория casual - это в основном не геймеры в узком смысле, а люди, которые ищут спокойное занятие на 5–10 минут. Ролик должен передать этот темп: satisfaction-момент - идеальный ряд, чистый сорт, красивое завершение уровня - а не набор резких склеек.",
        "Генерируем визуал через AI под конкретный satisfaction-момент вашей игры и тестируем несколько темпов монтажа - от спокойного до чуть более динамичного - burst-тестом, чтобы найти баланс между вовлечением и естественным ощущением от игры.",
      ],
      en: [
        "The casual audience isn't gamers in the narrow sense - mostly people looking for a calm five-to-ten-minute occupation. The video needs to carry that pace: a satisfaction moment - a perfect row, a clean sort, a tidy level clear - not a string of sharp cuts.",
        "We generate the visuals with AI around your game's specific satisfaction moment and burst-test a few editing paces - from calm to slightly more dynamic - to find the balance between engagement and how the game actually feels.",
      ],
    },
    bullets: {
      ru: [
        "Темп монтажа под satisfaction, не резкий хук",
        "AI-генерация под конкретный игровой момент",
        "Адаптации под Meta, Google Ads UA, TikTok",
        "Burst-тест темпа перед батчем",
      ],
      en: [
        "Editing paced for satisfaction, not a sharp hook",
        "AI generation built around a specific in-game moment",
        "Adaptations for Meta, Google Ads UA, TikTok",
        "Pacing burst-tested before the batch",
      ],
    },
    faq: [
      {
        q: {
          ru: "Чем это отличается от hypercasual-креатива?",
          en: "How is this different from a hyper-casual creative?",
        },
        a: {
          ru: "Темпом и посылом: hypercasual продаёт конфликт и реакцию за секунду, casual - процесс и результат. Один и тот же хук из hypercasual в casual обычно теряет CTR.",
          en: "Pace and message: hyper-casual sells a conflict and a snap reaction, casual sells the process and the payoff. A hyper-casual hook usually loses CTR when dropped into a casual campaign.",
        },
      },
      {
        q: {
          ru: "Нужен реальный геймплей или можно AI-имитацию?",
          en: "Do you need real gameplay, or can it be an AI approximation?",
        },
        a: {
          ru: "Работаем и так, и так - если механика простая, генерируем визуал через AI по референсам игры; для сложных уровней иногда быстрее записать реальный геймплей и доработать его.",
          en: "Both work - for a simple mechanic we generate the visuals with AI from the game's references; for more complex levels it's sometimes faster to capture real gameplay and refine it.",
        },
      },
    ],
  },
  {
    slug: "gacha-live-service-video",
    metaTitle: { ru: "Видео для gacha и live-service игр | Nitroreel", en: "Video for gacha and live-service games | Nitroreel" },
    metaDescription: {
      ru: "Ролики под баннеры персонажей, ивенты и сезонные апдейты gacha-игр - AI-рендеры вместо ручного CGI, синхронизация с датой релиза.",
      en: "Videos for character banners, events and seasonal updates in gacha games - AI renders instead of manual CGI, synced with the release date.",
    },
    eyebrow: { ru: "Трейлеры · Gacha / live-service", en: "Trailers · Gacha / live-service" },
    h1: { ru: "Видео для gacha и live-service игр", en: "Video for gacha and live-service games" },
    lead: {
      ru: "У gacha и live-service игр нет одного релиза - есть постоянный календарь баннеров, ивентов и сезонов, и под каждый нужен свой ролик в сжатые сроки.",
      en: "Gacha and live-service games don't have a single launch - they run on a constant calendar of banners, events and seasons, each needing its own video on a tight deadline.",
    },
    intro: {
      ru: [
        "Работаем по календарю обновлений: баннер нового персонажа, сезонный ивент, коллаборация - для каждого нужен ролик за несколько дней, а не недель, иначе он выходит после пика интереса аудитории.",
        "Собираем через AI-рендеры персонажей и катсцены - это быстрее ручного CGI-конвейера и позволяет держать регулярный ритм апдейтов без раздувания продакшн-бюджета на каждый баннер. Ассеты между роликами переиспользуем, если персонаж или локация уже встречались.",
      ],
      en: [
        "We work off the update calendar - a new character banner, a seasonal event, a collab - each needing a video in days, not weeks, or it ships after the audience's interest has already peaked.",
        "We build character renders and cutscenes with AI - faster than a manual CGI pipeline, which lets you keep a regular update rhythm without inflating the production budget for every single banner. Assets get reused across videos whenever a character or location has appeared before.",
      ],
    },
    bullets: {
      ru: [
        "AI-рендеры персонажей и катсцены вместо ручного CGI",
        "Продакшн под календарь баннеров и сезонов",
        "Синхронизация с датой релиза ивента",
        "Переиспользование ассетов между роликами",
      ],
      en: [
        "AI character renders and cutscenes instead of manual CGI",
        "Production built around the banner and season calendar",
        "Synced with the event's release date",
        "Assets reused across videos",
      ],
    },
    faq: [
      {
        q: {
          ru: "Успеваете под жёсткий календарь обновлений?",
          en: "Can you keep up with a tight update calendar?",
        },
        a: {
          ru: "Да, обычно 3–5 дней на баннер персонажа при готовом арт-референсе - AI-продакшн держит этот темп, ручной CGI-конвейер так не успевает.",
          en: "Yes - usually 3-5 days for a character banner once the art reference is ready. AI production keeps that pace; a manual CGI pipeline can't.",
        },
      },
      {
        q: { ru: "Работаете с уже существующим артом персонажей?", en: "Do you work from existing character art?" },
        a: {
          ru: "Да, это основной сценарий - генерируем рендер и анимацию по существующему арту и референсам, не придумывая персонажа заново.",
          en: "Yes, that's the usual case - we generate the render and animation from existing art and references, not invent the character from scratch.",
        },
      },
    ],
  },
  {
    slug: "ua-video-idle",
    metaTitle: { ru: "UA-видео для idle и incremental игр | Nitroreel", en: "UA video for idle and incremental games | Nitroreel" },
    metaDescription: {
      ru: "Креативы для idle-игр: визуализация роста и прогрессии, хук на цифрах и апгрейдах, адаптации под Meta, Google Ads UA, TikTok.",
      en: "Creatives for idle games: growth and progression made visible, a hook built on numbers and upgrades, adapted for Meta, Google Ads UA, TikTok.",
    },
    eyebrow: { ru: "UA-видео · Idle", en: "UA video · Idle" },
    h1: { ru: "UA-видео для idle и incremental игр", en: "UA video for idle and incremental games" },
    lead: {
      ru: "В idle-играх продаёт не экшн, а сама прогрессия - цифры, апгрейды, «ещё один уровень» - и хук должен визуализировать рост за секунды, которых в самой игре обычно уходят часы.",
      en: "Idle games don't sell action - they sell progression itself: numbers, upgrades, \"one more level\" - and the hook has to visualize growth in seconds that the game itself usually takes hours to deliver.",
    },
    intro: {
      ru: [
        "Строим хук вокруг ускоренной прогрессии: маленький бизнес/база/герой на глазах превращается в большой, апгрейд за апгрейдом, а цифры растут быстрее, чем в реальной игре. Это то, ради чего аудитория idle заходит - не сложность, а ощутимый рост.",
        "Генерируем визуал через AI, чтобы показать десятки стадий прогрессии без ручной отрисовки каждой - от старта до эндгейм-визуала за один ролик. Тестируем, на каком этапе прогрессии обрывать хук, чтобы держать CTR, не проваливая механику целиком.",
      ],
      en: [
        "We build the hook around accelerated progression: a small business/base/hero visibly grows into a big one, upgrade after upgrade, with the numbers climbing faster than the real game ever would. That's what the idle audience is there for - not difficulty, but visible growth.",
        "We generate the visuals with AI to show dozens of progression stages without hand-drawing each one - from the start to an endgame visual in a single video. We test where in the progression to cut the hook to hold CTR without giving away the whole mechanic.",
      ],
    },
    bullets: {
      ru: [
        "Хук на ускоренной прогрессии и цифрах",
        "AI-генерация десятков стадий роста без ручной отрисовки",
        "Адаптации под Meta, Google Ads UA, TikTok",
        "Тест точки обрыва хука по CTR",
      ],
      en: [
        "A hook built on accelerated progression and numbers",
        "AI-generated growth stages without hand-drawn art for each one",
        "Adaptations for Meta, Google Ads UA, TikTok",
        "Hook cutoff point tested by CTR",
      ],
    },
    faq: [
      {
        q: {
          ru: "Не создаёт ли это завышенных ожиданий от реальной скорости прогрессии?",
          en: "Doesn't this set unrealistic expectations for how fast the game actually progresses?",
        },
        a: {
          ru: "Ускоряем показ, а не саму механику - показываем реальные стадии игры, просто в разы быстрее по времени в ролике. Это ожидаемая конвенция жанра, а не обман.",
          en: "We speed up the presentation, not the mechanic itself - the stages shown are real, just compressed into the video's runtime. That's an expected genre convention, not a bait-and-switch.",
        },
      },
      {
        q: {
          ru: "Подходит ли этот подход и для tycoon/merge-игр?",
          en: "Does this approach work for tycoon/merge games too?",
        },
        a: {
          ru: "Да, механика идентична по логике хука - визуализация роста и апгрейдов, только конкретные сцены и стадии подбираем под вашу игру.",
          en: "Yes, the hook logic is identical - visualizing growth and upgrades - we just tailor the specific scenes and stages to your game.",
        },
      },
    ],
  },
  {
    slug: "creative-testing-burst-test",
    metaTitle: {
      ru: "Burst-тест и постоянное тестирование креативов | Nitroreel",
      en: "Burst testing and ongoing creative testing | Nitroreel",
    },
    metaDescription: {
      ru: "Регулярный burst-тест хуков для UA: батч новых вариаций каждую неделю или две, отчёт по CTR/IPM, докрутка того, что держит CPI.",
      en: "Regular hook burst-testing for UA: a fresh batch of variations every one or two weeks, a CTR/IPM report, doubling down on whatever holds CPI.",
    },
    eyebrow: { ru: "Услуга · Burst-тест", en: "Service · Burst testing" },
    h1: { ru: "Burst-тест и постоянное тестирование креативов", en: "Burst testing and ongoing creative testing" },
    lead: {
      ru: "Один удачный батч выгорает за несколько недель - постоянный поток новых хуков нужен не разово, а на регулярной основе, иначе CPI начинает ползти вверх.",
      en: "One good batch burns out in a few weeks - a steady stream of new hooks isn't a one-off, it's an ongoing need, or CPI starts creeping back up.",
    },
    intro: {
      ru: [
        "Вместо разового батча предлагаем регулярный цикл: каждую неделю или две - новый набор хуков по свежим гипотезам, burst-тест в сетях, отчёт по CTR/IPM/CPI и рекомендация, что докручивать, а что снимать с показов.",
        "AI-продакшн делает такой ритм посильным по бюджету - генерируем визуал быстрее классической съёмки, поэтому можем позволить себе тестировать больше гипотез чаще, а не экономить на количестве вариаций из-за долгого продакшна.",
      ],
      en: [
        "Instead of a one-off batch, we offer a regular cycle: every one or two weeks, a fresh set of hooks built on new hypotheses, burst-tested in the ad networks, with a CTR/IPM/CPI report and a recommendation on what to scale and what to pull.",
        "AI production makes that rhythm affordable - we generate the visuals faster than a classic shoot, so we can afford to test more hypotheses more often instead of cutting variation count because production takes too long.",
      ],
    },
    bullets: {
      ru: [
        "Новый батч хуков каждую 1-2 недели",
        "Отчёт по CTR/IPM/CPI после каждого burst-теста",
        "Рекомендации, что масштабировать, что снимать",
        "AI-продакшн держит темп без роста бюджета",
      ],
      en: [
        "A fresh hook batch every 1-2 weeks",
        "A CTR/IPM/CPI report after every burst test",
        "Recommendations on what to scale and what to pull",
        "AI production keeps the pace without inflating budget",
      ],
    },
    faq: [
      {
        q: {
          ru: "Это подписка или разовые батчи по запросу?",
          en: "Is this a subscription or one-off batches on request?",
        },
        a: {
          ru: "Можно и так, и так - фиксированный регулярный цикл под ваш темп кампаний, или отдельные батчи, когда чувствуете, что текущие хуки выгорают.",
          en: "Either works - a fixed regular cycle matched to your campaign pace, or standalone batches whenever you feel the current hooks are burning out.",
        },
      },
      {
        q: {
          ru: "Как понять, что хук выгорел и пора тестировать новые?",
          en: "How do you know a hook has burned out and it's time to test new ones?",
        },
        a: {
          ru: "Обычно это видно по росту CPI и падению CTR на тех же связках через 2-4 недели показов - если делитесь метриками, подскажем момент, когда пора обновлять батч.",
          en: "It usually shows up as rising CPI and falling CTR on the same combinations after 2-4 weeks of running - if you share your metrics, we can flag the moment it's time to refresh the batch.",
        },
      },
    ],
  },
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}
