export const siteName = 'Роадмап 1С'
export const siteUrl = 'https://kelll31.github.io/1C-Roadmap/'
export const siteDescription = 'Как стать 1С-разработчиком с нуля. Восемь этапов обучения, 18 проектов для портфолио, подготовка к первой работе и треки специализации.'

const titles = {
  'index.md': 'Роадмап 1С-разработчика 2026 — обучение с нуля',
  'README.md': 'Обзор роадмапа 1С и как им пользоваться',
  '02_Timeline.md': 'План обучения 1С-разработчика по этапам',
  '06_FAQ_and_Tips.md': 'Вопросы начинающих 1С-разработчиков',
  '07_Projects.md': '18 практических проектов по 1С для портфолио',
  '08_Interview.md': 'Собеседование на 1С-разработчика: вопросы и задания',
  '11_Checklists.md': 'Чек-листы 1С-разработчика',
  'tracks/README.md': 'Треки специализации в 1С'
}

const descriptions = {
  'index.md': siteDescription,
  'README.md': 'Как пользоваться роадмапом 1С. Сравните короткий путь до первой работы и полный маршрут, узнайте, что установить и по каким критериям двигаться дальше.',
  '01_Strategy.md': 'Стратегия освоения 1С в 2026 году. Как выбрать инструменты, типовую конфигурацию и специализацию под задачи франчайзи, продукта или внутренней команды.',
  '02_Timeline.md': 'Пошаговый план изучения 1С. Начните с учебной базы и BSL, освоите запросы, регистры и СКД, затем перейдите к типовым конфигурациям и интеграциям.',
  '03_Competencies.md': 'Матрица навыков Junior, Middle и Senior по модели фирмы «1С». Оцените свой уровень по практическим задачам и найдите темы, которые стоит подтянуть.',
  '04_Certifications.md': 'Как готовиться к 1С:Профессионалу и 1С:Специалисту. Формат экзаменов, порядок сдачи и связь сертификации с этапами обучения и карьерой.',
  '05_Resources.md': 'Подборка материалов для изучения 1С. Учебная версия, официальная документация, книги, курсы, сообщества и открытые инструменты разработчика.',
  '06_FAQ_and_Tips.md': 'Ответы на вопросы об обучении 1С, Конфигураторе, EDT, Git и первой работе. Типичные ошибки в коде и на проектах с примерами исправлений.',
  '07_Projects.md': 'Практика по 1С от P0 до P17. Решайте задачи на BSL, запросы, СКД, расширения и интеграции, проверяйте себя по критериям и собирайте портфолио.',
  '08_Interview.md': 'Подготовка к собеседованию на 1С-разработчика. Банк вопросов, реальные тестовые задания, упражнения для live coding и вопросы работодателю.',
  '09_AI_Development.md': 'Как применять ИИ в разработке на 1С. 1С:Напарник, подготовка контекста, проверка сгенерированного BSL-кода и работа с конфиденциальными данными.',
  '10_Domain_and_Law.md': 'Предметная область для разработчика 1С. Бухгалтерский и налоговый учёт, НДС, электронный документооборот, маркировка и требования к данным.',
  '11_Checklists.md': 'Чек-листы для самопроверки и работы на проектах 1С. Код-ревью BSL, запросы, проведение документов, безопасность, интеграции и подготовка к релизу.',
  '12_Glossary.md': 'Словарь терминов 1С:Предприятия. Краткие определения для разработчика о метаданных, управляемых формах, регистрах, СКД, инструментах и учёте.',
  '13_Career.md': 'Как найти первую работу в 1С. Варианты входа в профессию, требования вакансий, советы по резюме и портфолио и ориентиры по рынку труда.',
  'tracks/README.md': 'Сравните восемь специализаций в 1С. Узнайте, какие задачи решают разработчики, аналитики, администраторы и специалисты по интеграциям, QA и производительности.',
  'tracks/developer-franchise.md': 'Трек разработчика 1С у франчайзи. Научитесь дорабатывать типовые конфигурации, обновлять базы, внедрять расширения и сдавать задачи заказчику.',
  'tracks/developer-product.md': 'Трек разработчика 1С в продукте и инхаусе. Доработки внутренних систем, командная разработка, тестирование, релизы и развитие архитектуры.',
  'tracks/integration.md': 'Трек интеграций 1С. Освойте HTTP-сервисы, обмены, EnterpriseData, очереди и обработку сбоев на примерах и практических задачах.',
  'tracks/performance-expert.md': 'Трек производительности 1С. Диагностика медленных запросов и блокировок, технологический журнал, нагрузочные испытания и подготовка к 1С:Эксперту.',
  'tracks/administrator-operator.md': 'Трек администратора 1С. Развёртывание кластера и СУБД, резервное копирование, мониторинг, автоматизация и подготовка к 1С:Эксплуататору.',
  'tracks/qa-automation.md': 'Трек QA для проектов 1С. Сценарии Vanessa Automation, модульные тесты YAxUnit и подключение автоматических проверок к CI.',
  'tracks/analyst-consultant.md': 'Трек аналитика и консультанта 1С. Сбор требований, моделирование процессов, настройка типовых конфигураций, приёмка и работа с пользователями.',
  'tracks/element-and-mobile.md': 'Трек 1С:Элемент и мобильной разработки. Сравните веб-приложения на Элементе с мобильной платформой 1С и выберите проект для практики.',
  'all.md': 'Обзор экосистемы 1С в 2026 году. Версии платформы, типовые решения, БСП, EDT, интеграции, мобильная разработка и инструменты контроля качества.',
  'SOURCES.md': 'Реестр источников роадмапа 1С с датами сверки. Первоисточники по платформе, инструментам, экзаменам, законодательству и рынку труда.',
  'CHANGELOG.md': 'История изменений роадмапа 1С. Новые разделы и проекты, обновления по экосистеме и исправления к предыдущим редакциям.',
  'CONTRIBUTING.md': 'Как улучшить роадмап 1С на GitHub. Правила правок Markdown, работы с источниками и проверки ссылок, диаграмм и сборки сайта.',
  'CODE_OF_CONDUCT.md': 'Правила общения в сообществе роадмапа 1С. Принципы взаимодействия, примеры неприемлемого поведения и порядок обращения к сопровождающим.',
  'SECURITY.md': 'Как сообщить об уязвимости и какие меры безопасности учитывать в 1С. Доступы, обработка данных и ссылки на официальные рекомендации.'
}

const imageUrl = new URL('roadmap-cover.jpg', siteUrl).href
const imageAlt = 'Роадмап 1С-разработчика с картой восьми этапов обучения'
const property = (name, content) => ['meta', { property: name, content }]
const meta = (name, content) => ['meta', { name, content }]

function canonicalUrl(path, cleanUrls) {
  const page = path.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, cleanUrls ? '' : '.html')
  return new URL(page, siteUrl).href
}

function structuredData(path, title, url, description, cleanUrls) {
  if (path === 'index.md') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url,
      description,
      inLanguage: 'ru'
    }
  }

  const trail = [[siteName, siteUrl]]
  if (path.startsWith('tracks/') && path !== 'tracks/README.md') {
    trail.push([titles['tracks/README.md'], canonicalUrl('tracks/README.md', cleanUrls)])
  }
  trail.push([title, url])
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, item], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item
    }))
  }
}

export const seo = {
  lastUpdated: true,
  sitemap: { hostname: siteUrl, lastmodDateOnly: true },
  transformPageData(page, { siteConfig }) {
    const path = page.relativePath
    if (path === '404.md') return

    const home = path === 'index.md'
    const title = titles[path] ?? page.title
    const description = page.frontmatter.description ?? descriptions[path] ?? siteDescription
    const url = canonicalUrl(path, siteConfig.cleanUrls)
    const schema = structuredData(path, title, url, description, siteConfig.cleanUrls)
    const head = [
      ['link', { rel: 'canonical', href: url }],
      property('og:type', home ? 'website' : 'article'),
      property('og:site_name', siteName),
      property('og:locale', 'ru_RU'),
      property('og:title', title),
      property('og:description', description),
      property('og:url', url),
      property('og:image', imageUrl),
      property('og:image:type', 'image/jpeg'),
      property('og:image:width', '1200'),
      property('og:image:height', '630'),
      property('og:image:alt', imageAlt),
      meta('twitter:card', 'summary_large_image'),
      meta('twitter:image:alt', imageAlt),
      ['script', { type: 'application/ld+json' }, JSON.stringify(schema).replaceAll('<', '\\u003c')]
    ]
    return {
      title,
      titleTemplate: home ? false : page.titleTemplate,
      description,
      frontmatter: { ...page.frontmatter, head: [...(page.frontmatter.head ?? []), ...head] }
    }
  },
  transformHead({ page }) {
    if (page === '404.md') return [meta('robots', 'noindex')]
  }
}
