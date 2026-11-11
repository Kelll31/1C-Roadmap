<script setup>
import { computed, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'

const timeline = '/02_Timeline.html'
const stages = [
  {
    title: 'Подготовка', short: 'Старт', anchor: '-этап-0-подготовка', project: 'Учебная база',
    text: 'Установите платформу, создайте учебную базу и разберитесь с основами учёта и Git.'
  },
  {
    title: 'Язык и платформа', short: 'Язык', anchor: '-этап-1-язык-и-платформа', project: 'P0',
    text: 'Освойте синтаксис BSL, метаданные, управляемые формы и клиент-серверный код.'
  },
  {
    title: 'Учётные механизмы', short: 'Учёт', anchor: '-этап-2-учётные-механизмы', project: 'P1–P2',
    text: 'Проводите документы, пишите запросы и храните остатки в регистрах.'
  },
  {
    title: 'Отчёты и интерфейс', short: 'Отчёты', anchor: '-этап-3-отчёты-и-интерфейс', project: 'P3, P7',
    text: 'Соберите отчёт на СКД, сделайте печатную форму и настройте права доступа.'
  },
  {
    title: 'Типовые конфигурации', short: 'Типовые', anchor: '-этап-4-типовые-конфигурации--вход-в-работу', project: 'P8–P9',
    text: 'Поработайте с БП и УТ, доработайте типовую через расширение и соберите портфолио.'
  },
  {
    title: 'Надёжность и интеграции', short: 'Обмены', anchor: '-этап-5-надёжность-и-интеграции', project: 'P4–P6, P10–P12',
    text: 'Настройте обмен данными, разберитесь с транзакциями и управляемыми блокировками.'
  },
  {
    title: 'Командная разработка', short: 'Команда', anchor: '-этап-6-командная-разработка-и-качество', project: 'P13, P17',
    text: 'Настройте проверки и автотесты, работайте в EDT и отправьте изменения на ревью.'
  },
  {
    title: 'Специализация', short: 'Трек', anchor: '-этап-7-специализация', project: 'P14–P16',
    text: 'Выберите трек, углубитесь в задачи своей роли и выполните профильный проект.'
  }
].map((stage, index) => ({
  ...stage,
  index,
  number: String(index).padStart(2, '0'),
  link: `${timeline}#${stage.anchor}`
}))

const tracks = [
  ['Разработка у франчайзи', 'Доработки типовых и внедрение', 'developer-franchise'],
  ['Продукт и инхаус', 'Развитие систем внутри компании', 'developer-product'],
  ['Интеграции', 'Обмены, HTTP и очереди', 'integration'],
  ['Производительность', 'Диагностика, оптимизация и 1С:Эксперт', 'performance-expert'],
  ['Администрирование', 'Кластеры, резервное копирование и мониторинг', 'administrator-operator'],
  ['QA и автотесты', 'Сценарии и проверка качества', 'qa-automation'],
  ['Аналитика и консалтинг', 'Требования, учёт и настройка типовых', 'analyst-consultant'],
  ['1С:Элемент и мобильная разработка', 'Веб-приложения и мобильные клиенты', 'element-and-mobile']
]

const storageKey = '1c-roadmap-progress'
const firstJobCount = 5
const fullPath = ref(true)
const completed = ref([])
const activeStage = computed(() => stages.find((stage) => !completed.value.includes(stage.index)))
const visibleStages = computed(() => fullPath.value ? stages : stages.slice(0, firstJobCount))
const startLink = computed(() => withBase(activeStage.value?.link ?? timeline))

onMounted(() => {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) ?? '[]')
    if (Array.isArray(saved)) {
      completed.value = stages.filter((stage) => saved.includes(stage.index)).map((stage) => stage.index)
    }
  } catch {
    // The roadmap remains usable when browser storage is unavailable.
  }
})

function toggleStage(index) {
  completed.value = completed.value.includes(index)
    ? completed.value.filter((stage) => stage !== index)
    : [...completed.value, index]
  try {
    localStorage.setItem(storageKey, JSON.stringify(completed.value))
  } catch {
    // Keep the marks for the current visit.
  }
}
</script>

<template>
  <main class="roadmap-home">
    <section class="roadmap-hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <div class="release-label"><span aria-hidden="true"></span> Редакция · сентябрь 2026</div>
        <h1 id="home-title">Роадмап<br><span>1С-разработчика</span></h1>
        <p class="hero-description">От первой учебной базы до работы и специализации. Изучайте платформу по этапам и собирайте портфолио на практических проектах.</p>
        <div class="hero-actions">
          <a class="roadmap-button primary" :href="startLink">
            {{ completed.length === stages.length ? 'Открыть план' : completed.length ? 'Продолжить обучение' : 'Начать обучение' }}
            <span aria-hidden="true">→</span>
          </a>
          <a class="roadmap-button secondary" href="#route">Смотреть этапы <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero-metrics">
          <a href="#route"><strong>{{ stages.length }}</strong><span>этапов</span></a>
          <a :href="withBase('/07_Projects.html')"><strong>18</strong><span>проектов</span></a>
          <a href="#tracks"><strong>{{ tracks.length }}</strong><span>специализаций</span></a>
        </div>
      </div>

      <div class="route-board">
        <div class="board-heading">
          <span class="board-label"><span class="board-cross" aria-hidden="true"></span> Карта маршрута</span>
          <span class="board-tag">1С:Предприятие</span>
        </div>
        <ol class="board-map" aria-label="Этапы роадмапа">
          <li v-for="stage in stages" :key="stage.index" class="board-point"
              :class="{ 'is-current': stage === activeStage, 'is-complete': completed.includes(stage.index) }">
            <a :href="withBase(stage.link)" :aria-label="`Этап ${stage.index}. ${stage.title}`">
              <span class="board-node">{{ completed.includes(stage.index) ? '✓' : stage.number }}</span>
              <span class="board-name">{{ stage.short }}</span>
            </a>
          </li>
        </ol>
        <div class="board-progress">
          <label for="route-progress">Ваш прогресс</label>
          <span aria-live="polite">{{ completed.length }} из {{ stages.length }} этапов</span>
          <progress id="route-progress" :value="completed.length" :max="stages.length"></progress>
        </div>
      </div>
    </section>

    <section id="route" class="home-section" aria-labelledby="route-title">
      <div class="section-heading">
        <div>
          <h2 id="route-title">Этапы обучения</h2>
          <p>На каждом этапе есть практика и критерии завершения.</p>
        </div>
        <div class="route-filter" role="group" aria-label="Вариант маршрута">
          <button type="button" :aria-pressed="!fullPath" @click="fullPath = false">До первой работы</button>
          <button type="button" :aria-pressed="fullPath" @click="fullPath = true">Полный путь</button>
        </div>
      </div>
      <ol class="stage-list">
        <li v-for="stage in visibleStages" :key="stage.index" class="stage-card"
            :class="{ 'stage-current': stage === activeStage }">
          <div class="stage-meta">
            <span class="stage-number">{{ stage.number }}</span>
            <span class="stage-project">{{ stage.project }}</span>
          </div>
          <h3><a :href="withBase(stage.link)">{{ stage.title }} <span aria-hidden="true">↗</span></a></h3>
          <p>{{ stage.text }}</p>
          <label class="stage-status">
            <input type="checkbox" :checked="completed.includes(stage.index)" @change="toggleStage(stage.index)">
            <span>Пройден</span>
            <span class="visually-hidden">этап {{ stage.index }}. {{ stage.title }}</span>
          </label>
        </li>
      </ol>
    </section>

    <section id="tracks" class="home-section" aria-labelledby="tracks-title">
      <div class="section-heading">
        <div>
          <h2 id="tracks-title">Треки специализации</h2>
          <p>Выберите направление, когда освоите базу.</p>
        </div>
        <a class="roadmap-button secondary" :href="withBase('/tracks/README.html')">Сравнить треки <span aria-hidden="true">↗</span></a>
      </div>
      <ul class="track-list">
        <li v-for="[title, text, file] in tracks" :key="file">
          <a class="track-link" :href="withBase(`/tracks/${file}.html`)">
            <span><strong>{{ title }}</strong><small>{{ text }}</small></span>
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </section>

    <footer class="home-footer">
      <span>Открытый проект сообщества · MIT</span>
      <nav aria-label="О проекте">
        <a :href="withBase('/README.html')">О роадмапе</a>
        <a :href="withBase('/SOURCES.html')">Источники</a>
        <a href="https://github.com/Kelll31/1C-Roadmap">GitHub ↗</a>
      </nav>
    </footer>
  </main>
</template>
