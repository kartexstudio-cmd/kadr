import type { Locale } from "@/lib/i18n/config";

const ru = {
  meta: {
    title: "Nitroreel — видеокреативы и трейлеры для мобильных игр",
    description:
      "UA-креативы, трейлеры и cinematic-ролики для мобильных игр. Визуал собираем через AI — дешевле и быстрее классического продакшна, поэтому тестируем 20+ хуков в батче.",
    ogAlt: "Nitroreel — студия видеокреативов для мобильных игр",
  },
  a11y: {
    skip: "Перейти к содержимому",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    play: "Смотреть видео",
    close: "Закрыть",
    sound: "Звук",
    langLabel: "Язык сайта",
    scrollHint: "Листайте вниз",
  },
  nav: {
    work: "Работы",
    services: "Услуги",
    process: "Процесс",
    reviews: "Отзывы",
    faq: "Вопросы",
    contact: "Обсудить проект",
  },
  hero: {
    eyebrow: "Видеокреативы для мобильных игр",
    titleLead: "Креативы, которые",
    titleAccent: "снижают",
    titleTail: "CPI",
    subtitle:
      "UA-креативы, трейлеры и cinematic-ролики для мобильных игр. Визуал собираем через AI-продакшн — это дешевле и быстрее классической съёмки, а хуков можно тестировать в разы больше на тот же бюджет.",
    primary: "Обсудить проект",
    secondary: "Смотреть шоурил",
    reelLabel: "Шоурил 2026",
    stats: [
      { value: "1000+", label: "креативов в год" },
      { value: "48 ч", label: "до первого теста хуков" },
      { value: "30+", label: "игровых тайтлов" },
    ],
  },
  genres: {
    label: "Форматы и жанры",
  },
  services: {
    eyebrow: "Услуги",
    title: "Четыре направления, одна команда",
    subtitle:
      "Не передаём проект между подрядчиками: сценарий, продакшн, графика и адаптации под сети живут внутри одной студии.",
    moreLabel: "Подробнее по задачам",
    items: [
      {
        title: "UA и перформанс-креативы",
        text: "Хуки, гипотезы и адаптации под Meta Ads, TikTok, Google Ads UA и Unity Ads. Визуал собираем через AI — дешевле классической съёмки, поэтому тестируем не 8–10, а 20+ хуков за тот же бюджет.",
        points: ["Хуки и гипотезы", "AI-продакшн визуала", "Burst-тест 20+ хуков"],
      },
      {
        title: "Трейлеры и cinematic-ролики",
        text: "Лаунч-трейлеры для App Store и Google Play, тизеры к обновлениям и ивентам. Собираем через AI-генерацию и рендеры — быстрее классического CGI-конвейера, без потери в качестве картинки.",
        points: ["Store-трейлеры", "Тизеры к ивентам", "AI-cinematic"],
      },
      {
        title: "3D-анимация и CGI",
        text: "Катсцены, рендеры персонажей и окружений, экшн-сцены для трейлеров. Генерируем через AI вместо ручного 3D-конвейера — быстрее и на порядок дешевле студийного рендера.",
        points: ["Катсцены", "AI-рендеры персонажей", "Экшн-анимация"],
      },
      {
        title: "2D-анимация и моушн",
        text: "UI-моушн, анимация иконок, ролики к обновлениям и ивентам, обучающая анимация для онбординга — тоже через AI-инструменты, это ускоряет цикл правок.",
        points: ["UI-моушн", "Анимация иконок", "Онбординг-анимация"],
      },
    ],
  },
  work: {
    eyebrow: "Работы",
    title: "Креативы, которые снизили CPI",
    subtitle: "Выберите проект — видео откроется в плеере со звуком.",
    filterAll: "Все",
    result: "Результат",
  },
  reels: {
    eyebrow: "Вертикальные форматы",
    title: "UA-креативы под ленту",
    subtitle:
      "Каждый ролик собираем через AI-продакшн в 9:16 с новым хуком под TikTok, Reels и Shorts — тестируем в разы больше связок за тот же бюджет.",
  },
  process: {
    eyebrow: "Процесс",
    title: "Прозрачно на каждом шаге",
    steps: [
      {
        title: "Бриф и гипотезы",
        text: "Разбираем игру, аудиторию и метрику — CPI, CTR, ROAS или store-конверсию. За 40 минут собираем пул гипотез для хуков.",
      },
      {
        title: "Сценарий и раскадровка",
        text: "Показываем структуру хуков и референсы до старта продакшна. Правки здесь стоят дёшево.",
      },
      {
        title: "Продакшн",
        text: "Собираем визуал через AI-инструменты, монтируем и сводим звук. Батч креативов готов быстрее классической съёмки — промежуточные версии в общем таймлайне с таймкод-комментариями.",
      },
      {
        title: "Тест и масштабирование",
        text: "Запускаем burst-тест в UA-сетях, смотрим на CTR и IPM и докручиваем то, что держит CPI.",
      },
    ],
  },
  stats: {
    title: "Цифры за 2025 год",
    items: [
      { value: "1000+", label: "выпущенных креативов" },
      { value: "38%", label: "среднее снижение CPI" },
      { value: "3,4×", label: "медианный ROAS" },
      { value: "94%", label: "клиентов возвращаются" },
    ],
  },
  testimonials: {
    eyebrow: "Отзывы",
    title: "Что говорят клиенты",
    items: [
      {
        quote:
          "Наконец подрядчик, который говорит языком UA, а не «красиво». Мы впервые протестировали 25 хуков в одном батче вместо привычных 8 — и всё равно вписались в старый бюджет.",
        name: "Мария Левченко",
        role: "UA Lead, Vortex Play",
      },
      {
        quote:
          "AI-рендеры невозможно отличить от геймплея, а сроки держат жёстко. Трейлер к обновлению попал в Featured в App Store в неделю релиза.",
        name: "Артём Гордеев",
        role: "Head of Publishing, NeonDash Games",
      },
      {
        quote:
          "Работаем третий год. Единственная студия, которая сама предлагает, какой хук докрутить, вместо ожидания брифа.",
        name: "Ирина Соколова",
        role: "Executive Producer, Meadowlark Games",
      },
    ],
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Частые вопросы",
    items: [
      {
        q: "Сколько стоит проект?",
        a: "Батч из 10 UA-креативов начинается от 120 000 ₽. Cinematic-трейлер для стора — от 300 000 ₽. AI-продакшн визуала дешевле классической съёмки — это и держит цену ниже рынка. Точную смету присылаем в течение суток после брифа.",
      },
      {
        q: "Какие сроки?",
        a: "Батч UA-креативов — 3–5 рабочих дней, успевает в тот же спринт burst-теста. Трейлер с 3D-рендерами — от 1 до 3 недель в зависимости от объёма сцен, AI-продакшн заметно быстрее классического конвейера.",
      },
      {
        q: "С какими жанрами работаете?",
        a: "С гиперкэжуал, казуальными, мидкор и gacha-проектами. Формат хуков и темп монтажа разный — под ваш жанр адаптируем сценарий, а не берём шаблон.",
      },
      {
        q: "Это AI-генерация — не будет выглядеть дёшево?",
        a: "Визуал собираем через современные AI-инструменты, но каждый кадр проходит ручную доработку, цветокор и монтаж — по качеству картинки не уступает классической съёмке или рендеру, а по цене и скорости выигрывает.",
      },
      {
        q: "Сколько правок входит в стоимость?",
        a: "Два круга правок на этапе сценария и два на этапе монтажа. Дальше — по часовой ставке, но до этого доходит редко.",
      },
      {
        q: "Кому принадлежат исходники?",
        a: "Вам. После оплаты передаём проектные файлы, исходники и лицензии на использованные ассеты — включая права на размещение в рекламных сетях.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Расскажите об игре",
    subtitle:
      "Ответим в течение рабочего дня, приложим релевантные кейсы и предварительную смету.",
    perks: [
      "Ответ в течение рабочего дня",
      "Смета и сроки до старта работ",
      "NDA подписываем по запросу",
    ],
    form: {
      name: "Как вас зовут",
      namePlaceholder: "Иван Петров",
      email: "Рабочая почта",
      emailPlaceholder: "you@company.com",
      company: "Компания",
      companyPlaceholder: "Необязательно",
      budget: "Бюджет",
      budgetOptions: [
        "До 150 000 ₽",
        "150 000 – 400 000 ₽",
        "400 000 – 1 000 000 ₽",
        "Больше 1 000 000 ₽",
        "Пока не знаю",
      ],
      message: "Задача",
      messagePlaceholder: "Что за игра, какая цель у ролика (UA / трейлер), есть ли дедлайн",
      consent: "Согласен на обработку персональных данных",
      submit: "Отправить заявку",
      submitting: "Отправляем…",
      successTitle: "Заявка отправлена",
      successText: "Спасибо! Свяжемся с вами в течение рабочего дня.",
      errors: {
        name: "Введите имя — минимум 2 символа",
        email: "Проверьте адрес почты",
        message: "Опишите задачу — минимум 10 символов",
        consent: "Без согласия мы не сможем связаться с вами",
        generic: "Не получилось отправить. Напишите нам на почту или в Telegram.",
        rateLimit: "Слишком много попыток. Попробуйте через минуту.",
      },
    },
  },
  footer: {
    tagline: "Видеокреативы и трейлеры для мобильных игр.",
    navTitle: "Разделы",
    contactTitle: "Связаться",
    socialTitle: "Соцсети",
    rights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
    madeWith: "Заглушки видео — CC-BY материалы Blender Foundation.",
  },
  chat: {
    bubbleLabel: "Спросить ассистента",
    title: "Ассистент Nitroreel",
    subtitle: "Отвечает по сайту: сроки, стоимость, жанры",
    placeholder: "Задайте вопрос…",
    send: "Отправить",
    close: "Закрыть чат",
    greeting:
      "Привет! Отвечу на вопросы про сроки, стоимость, жанры и процесс работы. Для расчёта по конкретному проекту лучше оставить заявку в форме ниже.",
    thinking: "Печатает…",
    errorFallback:
      "Не получилось получить ответ. Напишите нам на почту или в Telegram — ответим лично.",
    rateLimitFallback:
      "Слишком много вопросов подряд. Попробуйте через минуту или напишите в Telegram.",
  },
};

type Dictionary = typeof ru;

const en: Dictionary = {
  meta: {
    title: "Nitroreel — video creatives and trailers for mobile games",
    description:
      "UA creatives, trailers and cinematic videos for mobile games. We build the visuals with AI — cheaper and faster than classic production, so we test 20+ hooks per batch.",
    ogAlt: "Nitroreel — video creative studio for mobile games",
  },
  a11y: {
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    play: "Play video",
    close: "Close",
    sound: "Sound",
    langLabel: "Site language",
    scrollHint: "Scroll down",
  },
  nav: {
    work: "Work",
    services: "Services",
    process: "Process",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Start a project",
  },
  hero: {
    eyebrow: "Video creatives for mobile games",
    titleLead: "Creatives that",
    titleAccent: "lower",
    titleTail: "CPI",
    subtitle:
      "UA creatives, trailers and cinematic videos for mobile games. We build the visuals with AI production — cheaper and faster than a classic shoot, so we can test far more hooks on the same budget.",
    primary: "Start a project",
    secondary: "Watch showreel",
    reelLabel: "Showreel 2026",
    stats: [
      { value: "1000+", label: "creatives per year" },
      { value: "48 h", label: "to the first hook test" },
      { value: "30+", label: "game titles" },
    ],
  },
  genres: {
    label: "Formats & genres",
  },
  services: {
    eyebrow: "Services",
    title: "Four disciplines, one team",
    subtitle:
      "Nothing gets handed between vendors: script, production, graphics and network adaptations all live inside one studio.",
    moreLabel: "More by use case",
    items: [
      {
        title: "UA & performance creatives",
        text: "Hooks, hypotheses and adaptations for Meta Ads, TikTok, Google Ads UA and Unity Ads. We build the visuals with AI — cheaper than a classic shoot, so we test 20+ hooks instead of 8–10 on the same budget.",
        points: ["Hooks & hypotheses", "AI visual production", "20+ hook burst test"],
      },
      {
        title: "Trailers & cinematic videos",
        text: "Launch trailers for the App Store and Google Play, teasers for updates and events. Built with AI generation and renders — faster than a classic CGI pipeline, without losing image quality.",
        points: ["Store trailers", "Event teasers", "AI cinematic"],
      },
      {
        title: "3D animation & CGI",
        text: "Cutscenes, character and environment renders, action sequences for trailers. Generated with AI instead of a manual 3D pipeline — faster and an order of magnitude cheaper than a studio render.",
        points: ["Cutscenes", "AI character renders", "Action animation"],
      },
      {
        title: "2D animation & motion",
        text: "UI motion, icon animation, update and event videos, onboarding motion that explains the game — also built with AI tools, which speeds up the revision cycle.",
        points: ["UI motion", "Icon animation", "Onboarding motion"],
      },
    ],
  },
  work: {
    eyebrow: "Work",
    title: "Creatives that brought CPI down",
    subtitle: "Pick a project — the video opens in a player with sound.",
    filterAll: "All",
    result: "Result",
  },
  reels: {
    eyebrow: "Vertical formats",
    title: "UA creatives for the feed",
    subtitle:
      "Every video is built with AI production in 9:16 with a new hook for TikTok, Reels and Shorts — we test far more combinations on the same budget.",
  },
  process: {
    eyebrow: "Process",
    title: "Transparent at every step",
    steps: [
      {
        title: "Brief & hypotheses",
        text: "We map the game, the audience and the metric — CPI, CTR, ROAS or store conversion. Forty minutes is enough for a pool of hook hypotheses.",
      },
      {
        title: "Script & storyboard",
        text: "You see the hook structure and references before production starts. Changes are cheap at this stage.",
      },
      {
        title: "Production",
        text: "We build the visuals with AI tools, edit and mix sound. A batch of creatives is ready faster than a classic shoot — work-in-progress cuts land in a shared timeline with timecoded comments.",
      },
      {
        title: "Test & scale",
        text: "We launch a burst test in UA networks, watch CTR and IPM, and double down on whatever holds CPI.",
      },
    ],
  },
  stats: {
    title: "2025 in numbers",
    items: [
      { value: "1000+", label: "creatives delivered" },
      { value: "38%", label: "average CPI reduction" },
      { value: "3.4×", label: "median ROAS" },
      { value: "94%", label: "clients come back" },
    ],
  },
  testimonials: {
    eyebrow: "Reviews",
    title: "What clients say",
    items: [
      {
        quote:
          "Finally a vendor that speaks UA, not “looks nice”. We tested 25 hooks in one batch for the first time instead of the usual 8 — and still stayed within the old budget.",
        name: "Maria Levchenko",
        role: "UA Lead, Vortex Play",
      },
      {
        quote:
          "The AI renders are indistinguishable from gameplay, and they are ruthless about deadlines. The update trailer got Featured on the App Store the week it launched.",
        name: "Artem Gordeev",
        role: "Head of Publishing, NeonDash Games",
      },
      {
        quote:
          "Third year together. The only studio that proposes which hook to push next instead of waiting for a brief.",
        name: "Irina Sokolova",
        role: "Executive Producer, Meadowlark Games",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked",
    items: [
      {
        q: "How much does a project cost?",
        a: "A batch of ten UA creatives starts at €1,200. A cinematic store trailer starts at €3,000. AI visual production is cheaper than a classic shoot — that's what keeps the price below the market rate. You get an exact quote within a day of the brief.",
      },
      {
        q: "What are the timelines?",
        a: "A batch of UA creatives takes three to five working days — fits into the same burst-test sprint. A trailer with 3D renders takes one to three weeks depending on scene count — AI production is noticeably faster than a classic pipeline.",
      },
      {
        q: "What genres do you work with?",
        a: "Hyper-casual, casual, midcore and gacha titles. Hook format and cutting pace differ by genre — we adapt the script to yours, not the other way around.",
      },
      {
        q: "Is this AI-generated — won't it look cheap?",
        a: "We build the visuals with modern AI tools, but every frame gets manual polish, colour grading and editing — the image quality matches a classic shoot or render, while the price and speed win.",
      },
      {
        q: "How many revisions are included?",
        a: "Two rounds at script stage and two at edit stage. Anything beyond that is hourly, but it rarely comes to that.",
      },
      {
        q: "Who owns the source files?",
        a: "You do. After payment we hand over project files, sources and licences for every asset used — including rights to run them on ad networks.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us about the game",
    subtitle: "We reply within one working day with relevant cases and a ballpark quote.",
    perks: [
      "Reply within one working day",
      "Quote and timeline before work starts",
      "NDA signed on request",
    ],
    form: {
      name: "Your name",
      namePlaceholder: "Alex Carter",
      email: "Work email",
      emailPlaceholder: "you@company.com",
      company: "Company",
      companyPlaceholder: "Optional",
      budget: "Budget",
      budgetOptions: [
        "Under €1,500",
        "€1,500 – €4,000",
        "€4,000 – €10,000",
        "Over €10,000",
        "Not sure yet",
      ],
      message: "Project",
      messagePlaceholder: "What's the game, what should the video achieve (UA / trailer), any deadline",
      consent: "I agree to the processing of my personal data",
      submit: "Send request",
      submitting: "Sending…",
      successTitle: "Request sent",
      successText: "Thank you! We will get back to you within one working day.",
      errors: {
        name: "Enter your name — at least 2 characters",
        email: "Check the email address",
        message: "Describe the project — at least 10 characters",
        consent: "We cannot contact you without your consent",
        generic: "Sending failed. Please email us or reach out on Telegram.",
        rateLimit: "Too many attempts. Please try again in a minute.",
      },
    },
  },
  footer: {
    tagline: "Video creatives and trailers for mobile games.",
    navTitle: "Sections",
    contactTitle: "Contact",
    socialTitle: "Social",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    madeWith: "Placeholder footage is CC-BY material by Blender Foundation.",
  },
  chat: {
    bubbleLabel: "Ask the assistant",
    title: "Nitroreel assistant",
    subtitle: "Answers from the site: timelines, pricing, genres",
    placeholder: "Ask a question…",
    send: "Send",
    close: "Close chat",
    greeting:
      "Hi! I can answer questions about timelines, pricing, genres and how we work. For an exact quote on your project, it's best to use the form below.",
    thinking: "Typing…",
    errorFallback: "Couldn't get a reply. Please email us or reach out on Telegram — we'll answer personally.",
    rateLimitFallback: "Too many questions in a row. Try again in a minute or message us on Telegram.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ru, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
