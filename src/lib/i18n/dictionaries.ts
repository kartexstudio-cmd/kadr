import type { Locale } from "@/lib/i18n/config";

const ru = {
  meta: {
    title: "KADR — креативная студия видеомонтажа, 3D и 2D-анимации",
    description:
      "Монтаж, 3D и 2D-анимация и перформанс-креативы для брендов. Пакет из 10 креативов за 5 рабочих дней — от сценария до адаптаций под площадки.",
    ogAlt: "KADR — креативная студия видео и анимации",
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
    eyebrow: "Креативная студия полного цикла",
    titleLead: "Видео, которое",
    titleAccent: "досматривают",
    titleTail: "до конца",
    subtitle:
      "Монтаж, 3D и 2D-анимация и перформанс-креативы для брендов и in-house маркетинга. Забираем сырые футажи и возвращаем готовый пакет под все площадки.",
    primary: "Обсудить проект",
    secondary: "Смотреть шоурил",
    reelLabel: "Шоурил 2026",
    stats: [
      { value: "480+", label: "креативов в год" },
      { value: "5 дней", label: "средний срок пакета" },
      { value: "12", label: "стран у клиентов" },
    ],
  },
  clients: {
    label: "С нами работают",
  },
  services: {
    eyebrow: "Услуги",
    title: "Четыре направления, одна команда",
    subtitle:
      "Не передаём проект между подрядчиками: сценарий, съёмка, графика и адаптации живут внутри одной студии.",
    items: [
      {
        title: "Видеомонтаж и пост-продакшн",
        text: "Сборка, ритм, цветокоррекция, звук и субтитры. Работаем с вашим материалом или снимаем сами.",
        points: ["Монтаж и ритм", "Colour grading", "Звук и субтитры"],
      },
      {
        title: "3D-анимация и CGI",
        text: "Фотореалистичные рендеры продукта, разлёты, симуляции. Показываем то, что невозможно снять.",
        points: ["Product CGI", "Симуляции", "Look development"],
      },
      {
        title: "2D-анимация и моушн",
        text: "Объясняющие ролики, инфографика, титры и брендовые системы движения под гайдлайн.",
        points: ["Explainer-ролики", "Инфографика", "Motion-гайдлайны"],
      },
      {
        title: "Перформанс-креативы",
        text: "Гипотезы, хуки, UGC и адаптации под Reels, TikTok, Shorts и in-app. Считаем метрики, а не лайки.",
        points: ["Хуки и гипотезы", "UGC-продакшн", "Адаптации под площадки"],
      },
    ],
  },
  work: {
    eyebrow: "Работы",
    title: "Кейсы, которые дали цифры",
    subtitle: "Выберите проект — видео откроется в плеере со звуком.",
    filterAll: "Все",
    result: "Результат",
  },
  reels: {
    eyebrow: "Вертикальные форматы",
    title: "Креативы под ленту",
    subtitle:
      "Каждый горизонтальный ролик пересобираем в 9:16 — с новым хуком, крупностями и субтитрами под площадку.",
  },
  process: {
    eyebrow: "Процесс",
    title: "Прозрачно на каждом шаге",
    steps: [
      {
        title: "Бриф и цели",
        text: "Разбираем продукт, аудиторию и метрику, за которую отвечает видео. 40 минут — и есть вводные.",
      },
      {
        title: "Сценарий и раскадровка",
        text: "Показываем структуру, хуки и референсы до старта продакшна. Правки здесь стоят дёшево.",
      },
      {
        title: "Продакшн",
        text: "Съёмка, графика, анимация и звук. Промежуточные версии — в общем таймлайне с таймкод-комментариями.",
      },
      {
        title: "Итерации и масштабирование",
        text: "Собираем адаптации под площадки, тестируем гипотезы и докручиваем то, что даёт результат.",
      },
    ],
  },
  stats: {
    title: "Цифры за 2025 год",
    items: [
      { value: "480+", label: "выпущенных креативов" },
      { value: "71%", label: "средняя досматриваемость" },
      { value: "3,4×", label: "медианный ROAS" },
      { value: "94%", label: "клиентов возвращаются" },
    ],
  },
  slots: {
    eyebrow: "Рулетка кейсов",
    title: "Дёрните рычаг — соберём три кейса",
    subtitle:
      "В каждом окне реальная работа из портфолио и цифра, которую она принесла клиенту. Нажмите на выпавший кадр, чтобы открыть видео целиком.",
    hint: "Дёрнуть",
    spin: "Крутить барабаны",
    idle: "Готов к запуску",
    spinning: "Барабаны крутятся",
    result: "Три кейса на табло",
    jackpot: "Джекпот — три одинаковых",
    empty: "Ждём запуска",
    spins: "Спинов",
  },
  testimonials: {
    eyebrow: "Отзывы",
    title: "Что говорят клиенты",
    items: [
      {
        quote:
          "Впервые подрядчик пришёл не с «красиво», а с гипотезами и метриками. Пакет креативов окупился на второй неделе теста.",
        name: "Мария Левченко",
        role: "Head of Growth, Lumen",
      },
      {
        quote:
          "3D-рендеры невозможно отличить от съёмки, а сроки они держат жёстко. Сняли с нас всю боль с адаптациями под площадки.",
        name: "Артём Гордеев",
        role: "Бренд-директор, Aureus",
      },
      {
        quote:
          "Работаем третий год. Единственная студия, которая сама предлагает, что докрутить, вместо ожидания ТЗ.",
        name: "Ирина Соколова",
        role: "CMO, Nordvest",
      },
    ],
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Частые вопросы",
    items: [
      {
        q: "Сколько стоит проект?",
        a: "Пакет из 10 перформанс-креативов начинается от 180 000 ₽. Имиджевый ролик с 3D — от 350 000 ₽. Точную смету присылаем в течение суток после брифа.",
      },
      {
        q: "Какие сроки?",
        a: "Пакет креативов — 5 рабочих дней. Ролик с 3D-графикой — от 2 до 4 недель в зависимости от объёма сцен.",
      },
      {
        q: "Работаете, если у нас нет отснятого материала?",
        a: "Да. Можем снять сами, собрать из стоков и CGI или спродюсировать UGC с блогерами под вашу задачу.",
      },
      {
        q: "Сколько правок входит в стоимость?",
        a: "Два круга правок на этапе сценария и два на этапе монтажа. Дальше — по часовой ставке, но до этого доходит редко.",
      },
      {
        q: "Кому принадлежат исходники?",
        a: "Вам. После оплаты передаём проектные файлы, исходники и лицензии на использованные ассеты.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Расскажите о задаче",
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
      messagePlaceholder: "Что за продукт, какая цель у видео, есть ли дедлайн",
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
    tagline: "Креативная студия видеомонтажа, 3D и 2D-анимации.",
    navTitle: "Разделы",
    contactTitle: "Связаться",
    socialTitle: "Соцсети",
    rights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
    madeWith: "Заглушки видео — CC-BY материалы Blender Foundation.",
  },
};

type Dictionary = typeof ru;

const en: Dictionary = {
  meta: {
    title: "KADR — creative studio for video editing, 3D and 2D animation",
    description:
      "Editing, 3D and 2D animation and performance creatives for brands. Ten creatives in five working days — from script to platform adaptations.",
    ogAlt: "KADR — creative video and animation studio",
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
    eyebrow: "Full-cycle creative studio",
    titleLead: "Video people",
    titleAccent: "actually",
    titleTail: "finish watching",
    subtitle:
      "Editing, 3D and 2D animation and performance creatives for brands and in-house marketing teams. Send raw footage — get a full package ready for every platform.",
    primary: "Start a project",
    secondary: "Watch showreel",
    reelLabel: "Showreel 2026",
    stats: [
      { value: "480+", label: "creatives per year" },
      { value: "5 days", label: "average package turnaround" },
      { value: "12", label: "countries served" },
    ],
  },
  clients: {
    label: "Trusted by",
  },
  services: {
    eyebrow: "Services",
    title: "Four disciplines, one team",
    subtitle:
      "Nothing gets handed between vendors: script, shoot, graphics and adaptations all live inside one studio.",
    items: [
      {
        title: "Editing & post-production",
        text: "Assembly, rhythm, colour grading, sound and subtitles. We work with your footage or shoot it ourselves.",
        points: ["Editing & pacing", "Colour grading", "Sound & subtitles"],
      },
      {
        title: "3D animation & CGI",
        text: "Photoreal product renders, exploded views, simulations. We show what a camera simply cannot.",
        points: ["Product CGI", "Simulations", "Look development"],
      },
      {
        title: "2D animation & motion",
        text: "Explainers, infographics, titles and brand motion systems built to your guidelines.",
        points: ["Explainer videos", "Infographics", "Motion guidelines"],
      },
      {
        title: "Performance creatives",
        text: "Hypotheses, hooks, UGC and cutdowns for Reels, TikTok, Shorts and in-app. We report metrics, not likes.",
        points: ["Hooks & hypotheses", "UGC production", "Platform adaptations"],
      },
    ],
  },
  work: {
    eyebrow: "Work",
    title: "Cases that moved numbers",
    subtitle: "Pick a project — the video opens in a player with sound.",
    filterAll: "All",
    result: "Result",
  },
  reels: {
    eyebrow: "Vertical formats",
    title: "Built for the feed",
    subtitle:
      "Every landscape edit gets rebuilt in 9:16 — new hook, tighter framing and platform-native subtitles.",
  },
  process: {
    eyebrow: "Process",
    title: "Transparent at every step",
    steps: [
      {
        title: "Brief & goals",
        text: "We map the product, the audience and the metric the video is accountable for. Forty minutes is enough.",
      },
      {
        title: "Script & storyboard",
        text: "You see structure, hooks and references before production starts. Changes are cheap at this stage.",
      },
      {
        title: "Production",
        text: "Shoot, graphics, animation and sound. Work-in-progress cuts land in a shared timeline with timecoded comments.",
      },
      {
        title: "Iterate & scale",
        text: "We build platform cutdowns, test hypotheses and double down on whatever performs.",
      },
    ],
  },
  stats: {
    title: "2025 in numbers",
    items: [
      { value: "480+", label: "creatives delivered" },
      { value: "71%", label: "average completion rate" },
      { value: "3.4×", label: "median ROAS" },
      { value: "94%", label: "clients come back" },
    ],
  },
  slots: {
    eyebrow: "Case roulette",
    title: "Pull the lever — get three cases",
    subtitle:
      "Every window holds a real project from the portfolio and the number it delivered. Click a landed frame to watch the full video.",
    hint: "Pull",
    spin: "Spin the reels",
    idle: "Ready to spin",
    spinning: "Reels spinning",
    result: "Three cases on the board",
    jackpot: "Jackpot — three of a kind",
    empty: "Waiting for a spin",
    spins: "Spins",
  },
  testimonials: {
    eyebrow: "Reviews",
    title: "What clients say",
    items: [
      {
        quote:
          "First vendor that showed up with hypotheses and metrics instead of “looks nice”. The package paid for itself in week two of testing.",
        name: "Maria Levchenko",
        role: "Head of Growth, Lumen",
      },
      {
        quote:
          "The 3D renders are indistinguishable from a real shoot, and they are ruthless about deadlines. All the platform-adaptation pain is gone.",
        name: "Artem Gordeev",
        role: "Brand Director, Aureus",
      },
      {
        quote:
          "Third year together. The only studio that proposes what to improve instead of waiting for a spec.",
        name: "Irina Sokolova",
        role: "CMO, Nordvest",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked",
    items: [
      {
        q: "How much does a project cost?",
        a: "A package of ten performance creatives starts at €1,800. A brand film with 3D starts at €3,500. You get an exact quote within a day of the brief.",
      },
      {
        q: "What are the timelines?",
        a: "A creative package takes five working days. A film with 3D graphics takes two to four weeks depending on scene count.",
      },
      {
        q: "Can you work without existing footage?",
        a: "Yes. We can shoot it, build it from stock and CGI, or produce UGC with creators for your specific goal.",
      },
      {
        q: "How many revisions are included?",
        a: "Two rounds at script stage and two at edit stage. Anything beyond that is hourly, but it rarely comes to that.",
      },
      {
        q: "Who owns the source files?",
        a: "You do. After payment we hand over project files, sources and licences for every asset used.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us about the project",
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
      messagePlaceholder: "What is the product, what should the video achieve, any deadline",
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
    tagline: "Creative studio for video editing, 3D and 2D animation.",
    navTitle: "Sections",
    contactTitle: "Contact",
    socialTitle: "Social",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    madeWith: "Placeholder footage is CC-BY material by Blender Foundation.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { ru, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
