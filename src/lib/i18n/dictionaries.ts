import type { Locale } from "@/lib/i18n/config";

const ru = {
  meta: {
    title: "Nitroreel - видеокреативы и трейлеры для мобильных игр",
    description:
      "UA-креативы, трейлеры и cinematic-ролики для мобильных игр. Визуал собираем через AI - дешевле и быстрее классического продакшна, поэтому тестируем 20+ хуков в батче.",
    ogAlt: "Nitroreel - студия видеокреативов для мобильных игр",
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
    faq: "Вопросы",
    contact: "Обсудить проект",
  },
  hero: {
    eyebrow: "Видеокреативы для мобильных игр",
    titleLead: "В разы больше",
    titleAccent: "хуков",
    titleTail: "за тот же бюджет",
    subtitle:
      "UA-креативы, трейлеры и cinematic-ролики для мобильных игр. Визуал собираем через AI-продакшн - это дешевле и быстрее классической съёмки, а хуков можно тестировать в разы больше на тот же бюджет.",
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
    title: "Три направления, одна команда",
    subtitle:
      "Не передаём проект между подрядчиками: сценарий, продакшн, графика и адаптации под сети живут внутри одной студии.",
    priceItems: [
      { label: "Батч из 10 UA-креативов (15–30 сек + хук-нарезки 6–9 сек)", price: "от 180 000 ₽" },
      { label: "Store-трейлер до 30 сек", price: "от 250 000 ₽" },
      { label: "Cinematic-трейлер 45–60 сек", price: "от 400 000 ₽" },
      { label: "Анимация и CGI (2D/3D, 15–20 сек) - 1 ролик", price: "от 27 000 ₽" },
      { label: "Анимация и CGI - пакет из 3 роликов", price: "от 65 000 ₽" },
    ],
    priceNote: "Точная смета - после брифа.",
    batchDetails: {
      title: "Что входит в батч за 180 000 ₽",
      items: [
        "10 полноценных роликов - 15–30 сек, вертикаль 9:16, каждый под свою гипотезу хука",
        "10 хук-нарезок - короткие версии 6–9 сек тех же роликов, для отдельного теста",
        "10 ресайзов в квадрат 1:1 - под ленту Meta",
        "Итого 30 готовых файлов, с двумя кругами правок на сценарии и монтаже",
      ],
      note: "Отдельно рассматриваем альтернативные хуки - разные первые секунды поверх одного тела ролика.",
    },
    moreLabel: "Подробнее по задачам",
    items: [
      {
        title: "UA и перформанс-креативы",
        text: "Хуки, гипотезы и адаптации под Meta Ads, TikTok, Google Ads UA и Unity Ads. Визуал собираем через AI - дешевле классической съёмки, поэтому тестируем не 8–10, а 20+ хуков за тот же бюджет.",
        points: ["Хуки и гипотезы", "AI-продакшн визуала", "Burst-тест 20+ хуков"],
      },
      {
        title: "Трейлеры и cinematic-ролики",
        text: "Лаунч-трейлеры для App Store и Google Play, тизеры к обновлениям и ивентам. Собираем через AI-генерацию и рендеры - быстрее классического CGI-конвейера, без потери в качестве картинки.",
        points: ["Store-трейлеры", "Тизеры к ивентам", "AI-cinematic"],
      },
      {
        title: "Анимация и CGI",
        text: "Катсцены, рендеры персонажей и окружений, экшн-сцены для трейлеров, UI-моушн, анимация иконок, онбординг-анимация. 2D или 3D - с AI разницы в сложности почти нет, поэтому не продаём это как разные услуги: формат подбираем под задачу.",
        points: ["AI-катсцены и рендеры", "UI-моушн и иконки", "2D и 3D в одном пайплайне"],
      },
    ],
  },
  work: {
    eyebrow: "Работы",
    title: "Креативы, которые снизили CPI",
    subtitle: "Выберите проект - видео откроется в плеере со звуком.",
    filterAll: "Все",
    filters: {
      ua: "UA и перформанс",
      trailer: "Трейлеры и cinematic",
    },
    result: "Результат",
  },
  quality: {
    eyebrow: "Качество картинки",
    title: "Без «мыла» и артефактов",
    subtitle:
      "У многих AI-студий результат легко узнать - смазанные детали, шум, пикселизация, будто видео пересжали десять раз. Мы прогоняем каждую генерацию через несколько итераций, пока не получим чистую картинку в Full HD, и только потом показываем клиенту.",
    typicalLabel: "Типичная AI-генерация",
    oursLabel: "Nitroreel - Full HD, без артефактов",
    pairs: [
      { typical: "/media/quality-typical-01.jpg", clean: "/media/work-02.jpg" },
      { typical: "/media/quality-typical-02.jpg", clean: "/media/hero-loop.jpg" },
    ],
  },
  fullService: {
    eyebrow: "Под ключ",
    title: "Не только визуал - весь проект целиком",
    subtitle:
      "Не нужно собирать команду по кускам и сводить чужие материалы самому - сценарий, визуал, звук и монтаж живут внутри одной студии.",
    optionalLabel: "Опционально",
    items: [
      {
        title: "Сценарий",
        text: "Опционально - пишем сами под гипотезу хука или дорабатываем присланный вами.",
        optional: true,
      },
      {
        title: "Визуал",
        text: "AI-генерация кадра: катсцены, геймплей, персонажи, окружения - под задачу.",
      },
      {
        title: "Звук и музыка",
        text: "Саунд-дизайн, музыка, сведение - ролик не отдаём немым.",
      },
      {
        title: "Видеомонтаж",
        text: "Сборка, ритм, цветокоррекция и финальная версия под конкретную площадку.",
      },
    ],
  },
  reels: {
    eyebrow: "Вертикальные форматы",
    title: "Под TikTok, Reels и Shorts",
    subtitle:
      "Каждый ролик собираем через AI-продакшн в 9:16 с новым хуком под TikTok, Reels и Shorts - тестируем в разы больше связок за тот же бюджет.",
  },
  process: {
    eyebrow: "Процесс",
    title: "Прозрачно на каждом шаге",
    steps: [
      {
        title: "Бриф и гипотезы",
        text: "Разбираем игру, аудиторию и метрику - CPI, CTR, ROAS или store-конверсию - и забираем ваши исходники: геймплейные записи, арт, UI, брендгайд. За 40 минут собираем пул гипотез для хуков на основе реального материала, а не общих референсов.",
      },
      {
        title: "Сценарий и раскадровка",
        text: "Показываем структуру хуков и референсы до старта продакшна. Правки здесь стоят дёшево.",
      },
      {
        title: "Продакшн",
        text: "Собираем визуал через AI-инструменты, монтируем и сводим звук. Батч креативов готов быстрее классической съёмки - промежуточные версии в общем таймлайне с таймкод-комментариями.",
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
  comparison: {
    eyebrow: "AI против классики",
    title: "Почему AI дешевле и быстрее",
    subtitle: "Тот же бюджет и то же время - но батч в разы больше, а тест быстрее.",
    classicLabel: "Классический продакшн",
    aiLabel: "AI-продакшн",
    items: [
      {
        metric: "Стоимость батча (10 хуков)",
        classicValue: "от 400 000 ₽",
        classicWidth: 100,
        aiValue: "от 180 000 ₽",
        aiWidth: 45,
      },
      {
        metric: "Срок",
        classicValue: "2–3 недели",
        classicWidth: 100,
        aiValue: "3–5 дней",
        aiWidth: 20,
      },
      {
        metric: "Хуков в батче",
        classicValue: "8–10",
        classicWidth: 40,
        aiValue: "20+",
        aiWidth: 100,
      },
    ],
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Частые вопросы",
    items: [
      {
        q: "Сколько стоит проект?",
        a: "Батч из 10 UA-креативов (15–30 сек, плюс хук-нарезки 6–9 сек для сплит-теста) - от 180 000 ₽. Store-трейлер до 30 секунд - от 250 000 ₽, cinematic-трейлер 45–60 секунд - от 400 000 ₽. Анимация и CGI (2D или 3D, 15–20 сек) - от 27 000 ₽ за ролик, пакет из 3 - от 65 000 ₽. AI-продакшн визуала дешевле классической съёмки - это и держит цену ниже рынка. Точную смету присылаем в течение суток после брифа.",
      },
      {
        q: "Какие сроки?",
        a: "Батч UA-креативов - 3–5 рабочих дней, успевает в тот же спринт burst-теста. Трейлер с 3D-рендерами - от 1 до 3 недель в зависимости от объёма сцен, AI-продакшн заметно быстрее классического конвейера.",
      },
      {
        q: "С какими жанрами работаете?",
        a: "С гиперкэжуал, казуальными, мидкор и gacha-проектами. Формат хуков и темп монтажа разный - под ваш жанр адаптируем сценарий, а не берём шаблон.",
      },
      {
        q: "Это AI-генерация - не будет выглядеть дёшево?",
        a: "Визуал собираем через современные AI-инструменты, но каждый кадр проходит ручную доработку, цветокор и монтаж - по качеству картинки не уступает классической съёмке или рендеру, а по цене и скорости выигрывает.",
      },
      {
        q: "Это правда наша игра, а не что-то придуманное AI?",
        a: "Да. В основе - ваши реальные ассеты: геймплейные записи, арт, UI, брендгайд. AI используем для монтажа, анимации и генерации хуков поверх этого материала, а не для придумывания игры с нуля - стиль, персонажи и интерфейс в ролике остаются вашими.",
      },
      {
        q: "Сколько правок входит в стоимость?",
        a: "Два круга правок на этапе сценария и два на этапе монтажа. Дальше - по часовой ставке, но до этого доходит редко.",
      },
      {
        q: "Кому принадлежат исходники?",
        a: "Вам. После оплаты передаём проектные файлы, исходники и лицензии на использованные ассеты - включая права на размещение в рекламных сетях.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Расскажите об игре",
    subtitle:
      "Ответим в течение рабочего дня, приложим релевантные кейсы и предварительную смету.",
    person: {
      name: "Peter Pavlov",
      role: "Основатель Nitroreel",
      photoAlt: "Peter Pavlov, основатель Nitroreel",
    },
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
        "До 100 000 ₽",
        "100 000 – 500 000 ₽",
        "500 000 – 1 000 000 ₽",
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
        name: "Введите имя - минимум 2 символа",
        email: "Проверьте адрес почты",
        message: "Опишите задачу - минимум 10 символов",
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
    madeWith: "Заглушки видео - CC-BY материалы Blender Foundation.",
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
      "Не получилось получить ответ. Напишите нам на почту или в Telegram - ответим лично.",
    rateLimitFallback:
      "Слишком много вопросов подряд. Попробуйте через минуту или напишите в Telegram.",
  },
};

type Dictionary = typeof ru;

const en: Dictionary = {
  meta: {
    title: "Nitroreel - video creatives and trailers for mobile games",
    description:
      "UA creatives, trailers and cinematic videos for mobile games. We build the visuals with AI - cheaper and faster than classic production, so we test 20+ hooks per batch.",
    ogAlt: "Nitroreel - video creative studio for mobile games",
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
    faq: "FAQ",
    contact: "Start a project",
  },
  hero: {
    eyebrow: "Video creatives for mobile games",
    titleLead: "Far more",
    titleAccent: "hooks",
    titleTail: "on the same budget",
    subtitle:
      "UA creatives, trailers and cinematic videos for mobile games. We build the visuals with AI production - cheaper and faster than a classic shoot, so we can test far more hooks on the same budget.",
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
    title: "Three disciplines, one team",
    subtitle:
      "Nothing gets handed between vendors: script, production, graphics and network adaptations all live inside one studio.",
    priceItems: [
      { label: "A batch of 10 UA creatives (15–30 sec + 6–9 sec hook cutdowns)", price: "from €1,800" },
      { label: "Store trailer up to 30 sec", price: "from €2,500" },
      { label: "Cinematic trailer, 45–60 sec", price: "from €4,000" },
      { label: "Animation & CGI (2D/3D, 15–20 sec) - 1 video", price: "from €270" },
      { label: "Animation & CGI - pack of 3 videos", price: "from €650" },
    ],
    priceNote: "Exact quote after the brief.",
    batchDetails: {
      title: "What's included in a €1,800 batch",
      items: [
        "10 full creatives - 15–30 sec, vertical 9:16, each testing its own hook hypothesis",
        "10 hook cutdowns - short 6–9 sec versions of the same videos, for separate testing",
        "10 square resizes (1:1) - for the Meta feed",
        "30 finished files in total, with two rounds of revisions at script and edit stage",
      ],
      note: "We also look at alternative hooks separately - different opening seconds on the same video body.",
    },
    moreLabel: "More by use case",
    items: [
      {
        title: "UA & performance creatives",
        text: "Hooks, hypotheses and adaptations for Meta Ads, TikTok, Google Ads UA and Unity Ads. We build the visuals with AI - cheaper than a classic shoot, so we test 20+ hooks instead of 8–10 on the same budget.",
        points: ["Hooks & hypotheses", "AI visual production", "20+ hook burst test"],
      },
      {
        title: "Trailers & cinematic videos",
        text: "Launch trailers for the App Store and Google Play, teasers for updates and events. Built with AI generation and renders - faster than a classic CGI pipeline, without losing image quality.",
        points: ["Store trailers", "Event teasers", "AI cinematic"],
      },
      {
        title: "Animation & CGI",
        text: "Cutscenes, character and environment renders, action sequences for trailers, UI motion, icon animation, onboarding animation. 2D or 3D - with AI there's barely a complexity gap, so we don't sell it as separate services: we pick the format for the task.",
        points: ["AI cutscenes & renders", "UI motion & icons", "2D and 3D in one pipeline"],
      },
    ],
  },
  work: {
    eyebrow: "Work",
    title: "Creatives that brought CPI down",
    subtitle: "Pick a project - the video opens in a player with sound.",
    filterAll: "All",
    filters: {
      ua: "UA & performance",
      trailer: "Trailers & cinematic",
    },
    result: "Result",
  },
  quality: {
    eyebrow: "Image quality",
    title: "No mush, no artifacts",
    subtitle:
      "You can usually spot AI-studio output at a glance - smeared detail, noise, pixelation, like the video got recompressed ten times. We run every generation through several iterations until the image is clean in Full HD, and only then show it to the client.",
    typicalLabel: "Typical AI generation",
    oursLabel: "Nitroreel - Full HD, no artifacts",
    pairs: [
      { typical: "/media/quality-typical-01.jpg", clean: "/media/work-02.jpg" },
      { typical: "/media/quality-typical-02.jpg", clean: "/media/hero-loop.jpg" },
    ],
  },
  fullService: {
    eyebrow: "Turnkey",
    title: "Not just visuals - the whole project",
    subtitle:
      "No need to assemble a team piece by piece or stitch other people's work together yourself - script, visuals, sound and edit all live inside one studio.",
    optionalLabel: "Optional",
    items: [
      {
        title: "Script",
        text: "Optional - we write it around the hook hypothesis or refine what you send us.",
        optional: true,
      },
      {
        title: "Visuals",
        text: "AI-generated footage: cutscenes, gameplay, characters, environments - built for the task.",
      },
      {
        title: "Sound & music",
        text: "Sound design, music, mixing - we never hand over a silent video.",
      },
      {
        title: "Video editing",
        text: "Assembly, pacing, colour grading and a final cut built for the specific platform.",
      },
    ],
  },
  reels: {
    eyebrow: "Vertical formats",
    title: "Built for TikTok, Reels & Shorts",
    subtitle:
      "Every video is built with AI production in 9:16 with a new hook for TikTok, Reels and Shorts - we test far more combinations on the same budget.",
  },
  process: {
    eyebrow: "Process",
    title: "Transparent at every step",
    steps: [
      {
        title: "Brief & hypotheses",
        text: "We map the game, the audience and the metric - CPI, CTR, ROAS or store conversion - and collect your source material: gameplay capture, art, UI, brand guide. Forty minutes is enough for a pool of hook hypotheses built on your real assets, not generic references.",
      },
      {
        title: "Script & storyboard",
        text: "You see the hook structure and references before production starts. Changes are cheap at this stage.",
      },
      {
        title: "Production",
        text: "We build the visuals with AI tools, edit and mix sound. A batch of creatives is ready faster than a classic shoot - work-in-progress cuts land in a shared timeline with timecoded comments.",
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
  comparison: {
    eyebrow: "AI vs classic",
    title: "Why AI is cheaper and faster",
    subtitle: "Same budget, same time - but the batch is far bigger and the test is faster.",
    classicLabel: "Classic production",
    aiLabel: "AI production",
    items: [
      {
        metric: "Batch cost (10 hooks)",
        classicValue: "from €4,000",
        classicWidth: 100,
        aiValue: "from €1,800",
        aiWidth: 45,
      },
      {
        metric: "Timeline",
        classicValue: "2–3 weeks",
        classicWidth: 100,
        aiValue: "3–5 days",
        aiWidth: 20,
      },
      {
        metric: "Hooks per batch",
        classicValue: "8–10",
        classicWidth: 40,
        aiValue: "20+",
        aiWidth: 100,
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked",
    items: [
      {
        q: "How much does a project cost?",
        a: "A batch of ten UA creatives (15–30 sec, plus 6–9 sec hook cutdowns for split testing) starts at €1,800. A store trailer up to 30 seconds starts at €2,500, a 45–60 second cinematic trailer starts at €4,000. Animation & CGI (2D or 3D, 15–20 sec) starts at €270 per video, a pack of 3 starts at €650. AI visual production is cheaper than a classic shoot - that's what keeps the price below the market rate. You get an exact quote within a day of the brief.",
      },
      {
        q: "What are the timelines?",
        a: "A batch of UA creatives takes three to five working days - fits into the same burst-test sprint. A trailer with 3D renders takes one to three weeks depending on scene count - AI production is noticeably faster than a classic pipeline.",
      },
      {
        q: "What genres do you work with?",
        a: "Hyper-casual, casual, midcore and gacha titles. Hook format and cutting pace differ by genre - we adapt the script to yours, not the other way around.",
      },
      {
        q: "Is this AI-generated - won't it look cheap?",
        a: "We build the visuals with modern AI tools, but every frame gets manual polish, colour grading and editing - the image quality matches a classic shoot or render, while the price and speed win.",
      },
      {
        q: "Is this really our game, or does the AI make things up?",
        a: "Yes, it's your game. We start from your real assets - gameplay capture, art, UI, brand guide. AI is used for editing, animation and hook generation on top of that material, not to invent a game from scratch - the style, characters and interface in the video stay yours.",
      },
      {
        q: "How many revisions are included?",
        a: "Two rounds at script stage and two at edit stage. Anything beyond that is hourly, but it rarely comes to that.",
      },
      {
        q: "Who owns the source files?",
        a: "You do. After payment we hand over project files, sources and licences for every asset used - including rights to run them on ad networks.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us about the game",
    subtitle: "We reply within one working day with relevant cases and a ballpark quote.",
    person: {
      name: "Peter Pavlov",
      role: "Founder, Nitroreel",
      photoAlt: "Peter Pavlov, founder of Nitroreel",
    },
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
        "Under €1,000",
        "€1,000 – €5,000",
        "€5,000 – €10,000",
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
        name: "Enter your name - at least 2 characters",
        email: "Check the email address",
        message: "Describe the project - at least 10 characters",
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
    errorFallback: "Couldn't get a reply. Please email us or reach out on Telegram - we'll answer personally.",
    rateLimitFallback: "Too many questions in a row. Try again in a minute or message us on Telegram.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ru, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
