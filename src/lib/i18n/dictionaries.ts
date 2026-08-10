import type { Locale } from "@/lib/i18n/config";

const ru = {
  meta: {
    title: "Nitroreel — видеокреативы и трейлеры для мобильных игр",
    description:
      "UA-креативы, трейлеры и cinematic-ролики для мобильных игр. Батч из 10 креативов за 5 рабочих дней — от гипотезы до burst-теста в сетях.",
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
      "UA-креативы, трейлеры и cinematic-ролики для мобильных игр. Заводим гипотезы в продакшн и тестируем хуки быстрее, чем аудитория успевает проскроллить дальше.",
    primary: "Обсудить проект",
    secondary: "Смотреть шоурил",
    reelLabel: "Шоурил 2026",
    stats: [
      { value: "600+", label: "креативов в год" },
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
    items: [
      {
        title: "UA и перформанс-креативы",
        text: "Хуки, гипотезы и адаптации под Meta Ads, TikTok, Google Ads UA и Unity Ads. Тестируем связки быстро и докручиваем то, что держит CPI.",
        points: ["Хуки и гипотезы", "Burst-тестирование", "Адаптации под сети"],
      },
      {
        title: "Трейлеры и cinematic-ролики",
        text: "Лаунч-трейлеры для App Store и Google Play, тизеры к обновлениям и ивентам. Показываем игру так, чтобы в неё захотелось зайти.",
        points: ["Store-трейлеры", "Тизеры к ивентам", "Cinematic-сторителлинг"],
      },
      {
        title: "3D-анимация и CGI",
        text: "Катсцены, рендеры персонажей и окружений, экшн-сцены для трейлеров. Даём картинку, которую движок в реальном времени пока не выдаёт.",
        points: ["Катсцены", "Рендеры персонажей", "Экшн-анимация"],
      },
      {
        title: "2D-анимация и моушн",
        text: "UI-моушн, анимация иконок, ролики к обновлениям и ивентам, обучающая анимация для онбординга.",
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
      "Каждый ролик собираем в 9:16 с новым хуком под TikTok, Reels и Shorts — тестируем связки быстрее, чем аудитория успевает проскроллить.",
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
        text: "Монтаж, анимация и звук. Собираем батч креативов параллельно, промежуточные версии — в общем таймлайне с таймкод-комментариями.",
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
      { value: "600+", label: "выпущенных креативов" },
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
          "Наконец подрядчик, который говорит языком UA, а не «красиво». Первый батч хуков снизил CPI на четверть за первую неделю burst-теста.",
        name: "Мария Левченко",
        role: "UA Lead, Vortex Play",
      },
      {
        quote:
          "3D-рендеры невозможно отличить от геймплея, а сроки держат жёстко. Трейлер к обновлению попал в Featured в App Store в неделю релиза.",
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
        a: "Батч из 10 UA-креативов начинается от 150 000 ₽. Cinematic-трейлер для стора — от 400 000 ₽. Точную смету присылаем в течение суток после брифа.",
      },
      {
        q: "Какие сроки?",
        a: "Батч UA-креативов — 5 рабочих дней, успевает в тот же спринт burst-теста. Трейлер с 3D — от 2 до 4 недель в зависимости от объёма сцен.",
      },
      {
        q: "С какими жанрами работаете?",
        a: "С гиперкэжуал, казуальными, мидкор и gacha-проектами. Формат хуков и темп монтажа разный — под ваш жанр адаптируем сценарий, а не берём шаблон.",
      },
      {
        q: "Работаете, если у нас нет отснятого геймплея?",
        a: "Да. Можем записать геймплей сами по вашему билду, собрать сцену из движка и CGI или спродюсировать UGC-имитацию под вашу аудиторию.",
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
      "UA creatives, trailers and cinematic videos for mobile games. Ten creatives in five working days — from hypothesis to a burst test in ad networks.",
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
      "UA creatives, trailers and cinematic videos for mobile games. We turn hypotheses into production and test hooks faster than the audience can scroll past.",
    primary: "Start a project",
    secondary: "Watch showreel",
    reelLabel: "Showreel 2026",
    stats: [
      { value: "600+", label: "creatives per year" },
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
    items: [
      {
        title: "UA & performance creatives",
        text: "Hooks, hypotheses and adaptations for Meta Ads, TikTok, Google Ads UA and Unity Ads. We test combinations fast and double down on whatever holds CPI.",
        points: ["Hooks & hypotheses", "Burst testing", "Network adaptations"],
      },
      {
        title: "Trailers & cinematic videos",
        text: "Launch trailers for the App Store and Google Play, teasers for updates and events. We show the game in a way that makes people want to open it.",
        points: ["Store trailers", "Event teasers", "Cinematic storytelling"],
      },
      {
        title: "3D animation & CGI",
        text: "Cutscenes, character and environment renders, action sequences for trailers. We deliver the shot a real-time engine can't yet render.",
        points: ["Cutscenes", "Character renders", "Action animation"],
      },
      {
        title: "2D animation & motion",
        text: "UI motion, icon animation, update and event videos, onboarding motion that explains the game.",
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
      "Every video is built in 9:16 with a new hook for TikTok, Reels and Shorts — we test combinations faster than the audience can scroll past.",
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
        text: "Editing, animation and sound. We build a batch of creatives in parallel, work-in-progress cuts land in a shared timeline with timecoded comments.",
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
      { value: "600+", label: "creatives delivered" },
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
          "Finally a vendor that speaks UA, not “looks nice”. The first batch of hooks cut CPI by a quarter in the first week of the burst test.",
        name: "Maria Levchenko",
        role: "UA Lead, Vortex Play",
      },
      {
        quote:
          "The 3D renders are indistinguishable from gameplay, and they are ruthless about deadlines. The update trailer got Featured on the App Store the week it launched.",
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
        a: "A batch of ten UA creatives starts at €1,500. A cinematic store trailer starts at €4,000. You get an exact quote within a day of the brief.",
      },
      {
        q: "What are the timelines?",
        a: "A batch of UA creatives takes five working days — fits into the same burst-test sprint. A trailer with 3D takes two to four weeks depending on scene count.",
      },
      {
        q: "What genres do you work with?",
        a: "Hyper-casual, casual, midcore and gacha titles. Hook format and cutting pace differ by genre — we adapt the script to yours, not the other way around.",
      },
      {
        q: "Can you work without existing gameplay footage?",
        a: "Yes. We can capture gameplay ourselves from your build, assemble a scene from the engine and CGI, or produce a UGC-style ad for your audience.",
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
