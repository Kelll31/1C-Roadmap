import { defineConfig } from 'vitepress'
import { slug } from 'github-slugger'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { seo, siteDescription, siteName } from './seo.mjs'

const repository = 'https://github.com/Kelll31/1C-Roadmap'
const chapter = (text, file) => ({ text, link: `/${file}` })
const pagesPath = (process.env.PAGES_BASE_PATH ?? '1C-Roadmap').replace(/^\/+|\/+$/g, '')

export default defineConfig(withMermaid({
  lang: 'ru',
  title: siteName,
  description: siteDescription,
  base: pagesPath ? `/${pagesPath}/` : '/',
  srcExclude: ['.github/**'],
  appearance: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f8f7f2' }],
    ['meta', { name: 'robots', content: 'max-image-preview:large' }]
  ],
  ...seo,
  markdown: {
    anchor: { slugify: slug },
    config(md) {
      const renderFence = md.renderer.rules.fence
      md.renderer.rules.fence = (tokens, index, options, env, self) => {
        const rendered = renderFence(tokens, index, options, env, self)
        if (tokens[index].info.trim() === 'mermaid') {
          return `<DiagramViewer>\n${rendered}\n</DiagramViewer>\n`
        }
        return rendered
      }
      const renderLink = md.renderer.rules.link_open
      md.renderer.rules.link_open = (tokens, index, options, env, self) => {
        const token = tokens[index]
        if (token.attrGet('href') === 'LICENSE') {
          token.attrSet('href', `${repository}/blob/main/LICENSE`)
        }
        return renderLink
          ? renderLink(tokens, index, options, env, self)
          : self.renderToken(tokens, index, options)
      }
    }
  },
  mermaid: { securityLevel: 'strict' },
  themeConfig: {
    siteTitle: siteName,
    nav: [
      chapter('Этапы', '02_Timeline'),
      chapter('Проекты', '07_Projects'),
      chapter('Треки', 'tracks/README')
    ],
    socialLinks: [{ icon: 'github', link: repository }],
    sidebar: [
      {
        text: 'Роадмап',
        items: [
          chapter('Обзор', 'README'),
          chapter('Стратегия', '01_Strategy'),
          chapter('План обучения', '02_Timeline'),
          chapter('Матрица компетенций', '03_Competencies')
        ]
      },
      {
        text: 'Практика и карьера',
        items: [
          chapter('Проекты для портфолио', '07_Projects'),
          chapter('Сертификация', '04_Certifications'),
          chapter('Собеседование', '08_Interview'),
          chapter('Первая работа', '13_Career')
        ]
      },
      {
        text: 'Специализации',
        collapsed: true,
        items: [
          chapter('Как выбрать трек', 'tracks/README'),
          chapter('Разработка у франчайзи', 'tracks/developer-franchise'),
          chapter('Продукт и инхаус', 'tracks/developer-product'),
          chapter('Интеграции', 'tracks/integration'),
          chapter('Производительность', 'tracks/performance-expert'),
          chapter('Администрирование', 'tracks/administrator-operator'),
          chapter('QA и автотесты', 'tracks/qa-automation'),
          chapter('Аналитика и консалтинг', 'tracks/analyst-consultant'),
          chapter('1С:Элемент и мобильная разработка', 'tracks/element-and-mobile')
        ]
      },
      {
        text: 'Справочник',
        collapsed: true,
        items: [
          chapter('Ресурсы', '05_Resources'),
          chapter('FAQ', '06_FAQ_and_Tips'),
          chapter('ИИ в разработке', '09_AI_Development'),
          chapter('Предметная область и законы', '10_Domain_and_Law'),
          chapter('Чек-листы', '11_Checklists'),
          chapter('Глоссарий', '12_Glossary'),
          chapter('Обзор экосистемы', 'all'),
          chapter('Реестр источников', 'SOURCES'),
          chapter('Журнал изменений', 'CHANGELOG')
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск по роадмапу' },
          modal: {
            displayDetails: 'Показать подробности',
            resetButtonTitle: 'Сбросить поиск',
            backButtonTitle: 'Назад',
            noResultsText: 'Ничего не найдено',
            footer: { selectText: 'открыть', navigateText: 'выбрать', closeText: 'закрыть' }
          }
        }
      }
    },
    outline: { level: [2, 3], label: 'На этой странице' },
    sidebarMenuLabel: 'Разделы',
    returnToTopLabel: 'К началу',
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    docFooter: { prev: 'Назад', next: 'Дальше' },
    lastUpdated: { text: 'Обновлено' },
    editLink: { pattern: `${repository}/edit/main/:path`, text: 'Править на GitHub' },
    notFound: {
      title: 'Страница не найдена',
      quote: 'Вернитесь на главную, чтобы выбрать раздел роадмапа.',
      linkText: 'На главную',
      linkLabel: 'Перейти на главную'
    }
  }
}))
