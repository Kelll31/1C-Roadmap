
# Roadmap 1С-разработчика

> Полный путь от Junior до Senior+ с рекомендованными ресурсами, расписанием изучения и ссылками на официальную документацию, курсы, книги и сообщества.

---

## Оглавление
1. [Как пользоваться](#как-пользоваться)
2. [График обучения](#график-обучения)
3. [Уровни и компетенции](#уровни-и-компетенции)
4. [Сертификации](#сертификации)
5. [Полезные сообщества](#полезные-сообщества)
6. [Стек инструментов](#стек-инструментов)
7. [FAQ](#faq)

---

## Как пользоваться
* Читайте roadmap последовательно или точечно по пробелам в знаниях.
* Каждому грейду соответствует блок «Что учить» и «Где читать/смотреть».
* Ссылки открываются в новой вкладке; большинство ресурсов бесплатные.
* Рекомендуемый минимальный темп приведён в разделе «График обучения».

## График обучения
| Период | Цель | Основные ресурсы |
|--------|------|------------------|
| 0–1 месяц | Установка платформы, первые формы | [Учебная 1С 8.3](https://e-office24.ru/support/course/free-samouchitel-1c/) · YouTube [Азы программирования 1С (3 ч)](https://www.youtube.com/watch?v=AH9uowkPPFA) |
| 1–3 месяц | Конфигурирование, объекты метаданных | Книга «1С для начинающих» · ITS [Руководство разработчика гл. 1–4](https://its.1c.ru/db/v838doc/browse/13/-1/5) |
| 3–6 месяц | СКД, печатные формы, Git | Плейлист [СКД 51 урок](https://www.youtube.com/playlist?list=PL...) · Видео [GitHub в 1С:EDT](https://www.youtube.com/watch?v=L09iFm8BROI) |
| 6–12 месяц | Сертификация «Профессионал» | Тренажёр [1С:Профессионал вопросы](https://1c.ru/prof/prof.htm) |
| 1–2 год | Интеграции REST, обмен данными | Статья [Оптимизация запросов](https://habr.com/ru/companies/automacon/articles/750414/) · OneScript [Документация](https://github.com/oscript-library) |
| 2–3 год | DevOps, CI/CD, тесты | gitsync, v8runner, Vanessa-Automation |
| 3+ лет | Архитектура, high-load | Блог «1С:Зазеркалье» · Форум [1С:ERP](https://1c.ru/bf/) |

## Уровни и компетенции

```
flowchart LR
    %% Основная линия развития
    J[Junior<br/>👶 0-1 год] --> JP[Junior+<br/>📚 6-18 мес]
    JP --> M[Middle<br/>⚡ 1.5-3 года]
    M --> MP[Middle+<br/>🔧 ~4 года]
    MP --> S[Senior<br/>🏗️ 5+ лет]
    S --> SP[Senior+<br/>👑 Эксперт]

    %% Компетенции Junior
    J --> J1[Платформа 1С: 1<br/>Установка, режимы]
    J --> J2[Конфигурации: 1<br/>Базовые объекты]
    J --> J3[Язык и БД: 1<br/>SELECT запросы]
    J --> J4[Отчеты: 1<br/>Простые формы]

    %% Компетенции Junior+
    JP --> JP1[Платформа: 2<br/>Клиент-сервер]
    JP --> JP2[Конфигурации: 2<br/>Расширения]
    JP --> JP3[Язык: 2<br/>Процедуры, функции]
    JP --> JP4[СКД: 2<br/>Печатные формы]
    JP --> JP5[API: 1<br/>Первые интеграции]

    %% Компетенции Middle
    M --> M1[Платформа: 3<br/>Кластеры]
    M --> M2[Метаданные: 3<br/>БСП, типовые]
    M --> M3[Запросы: 3<br/>Оптимизация]
    M --> M4[СКД: 3<br/>Сложные отчеты]
    M --> M5[REST API: 2<br/>HTTP-сервисы]
    M --> M6[Git: 1<br/>Базовый DevOps]
    M --> M7[Архитектура: 1<br/>Проектирование]

    %% Компетенции Middle+
    MP --> MP1[Платформа: 4<br/>Масштабирование]
    MP --> MP2[Конфигурации: 4<br/>Сложные решения]
    MP --> MP3[Производительность: 2<br/>Профилирование]
    MP --> MP4[DevOps: 2<br/>CI/CD пайплайны]
    MP --> MP5[API: 3<br/>Микросервисы]
    MP --> MP6[Лидерство: 1<br/>Менторство]

    %% Компетенции Senior
    S --> S1[Платформа: 5<br/>Эксперт уровень]
    S --> S2[Архитектура: 4<br/>Корпоративные системы]
    S --> S3[DevOps: 3<br/>Docker, K8s]
    S --> S4[API: 4<br/>Enterprise интеграции]
    S --> S5[Менеджмент: 3<br/>Команды, пресейл]

    %% Компетенции Senior+
    SP --> SP1[Мастерство: 5<br/>Все области]
    SP --> SP2[Архитектура: 5<br/>High-load решения]
    SP --> SP3[DevOps: 4<br/>Полная автоматизация]
    SP --> SP4[Лидерство: 5<br/>Техническое руководство]

    %% Стили для уровней
    classDef junior fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef juniorplus fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    classDef middle fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    classDef middleplus fill:#fce4ec,stroke:#c2185b,stroke-width:2px
    classDef senior fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    classDef seniorplus fill:#ffebee,stroke:#d32f2f,stroke-width:3px

    %% Применение стилей
    class J,J1,J2,J3,J4 junior
    class JP,JP1,JP2,JP3,JP4,JP5 juniorplus
    class M,M1,M2,M3,M4,M5,M6,M7 middle
    class MP,MP1,MP2,MP3,MP4,MP5,MP6 middleplus
    class S,S1,S2,S3,S4,S5 senior
    class SP,SP1,SP2,SP3,SP4 seniorplus
```

### Junior
**Что учить**
* Платформа 1С: установка, режимы.
* Базовые объекты конфигурации.
* Встроенный язык, запросы SELECT.

**Где читать/смотреть**
* Учебник: [М. Радченко «1С программирование для начинающих»](https://dtf.ru/topraiting/3268264-luchshie-knigi-po-1s-top-10-reiting-2024)
* Видео: [Курс «1С с нуля» (плейлист)](https://www.youtube.com/watch?v=Gj5C5jB4Ee4)
* Документация: [Раздел «Основы»](https://its.1c.ru/db/v838doc)

### Junior+
* Расширения, СКД, регистры.
* Курс: [Основы конфигурирования (УчЦ №1)](https://skillbox.ru/course/profession-1c/)
* Видео: [Печатные формы за 60 мин](https://www.youtube.com/watch?v=fiZdHxK9vdg)

### Middle
* Обмен данными (XML, EnterpriseData), HTTP-сервисы.
* OneScript + opm: <https://github.com/oscript-library>
* Сертификат: [1С:Специалист](https://rarus-soft.ru/partnership/education/certification/)

### Middle+
* Повышение производительности, кластеризация.
* Кейс Infostart [Нагрузочное тестирование](https://habr.com/ru/companies/automacon/articles/750414/)
* Инфостарт Meetup записи.

### Senior
* Архитектура 1С:ЕРП, масштабирование.
* DevOps-пайплайны (Docker, GitHub Actions).
* Блог «Жёлтый клуб»: <https://wonderland.v8.1c.ru>

### Senior+
* Аудит, техническое лидерство.
* Сертификация [1С:Эксперт](https://practicum.yandex.ru/blog/kak-proyti-sertifikaciyu-1c/)
* Доклады Infostart Event.

## Сертификации
| Экзамен | Описание | Ссылка |
|---------|----------|--------|
| 1С:Профессионал | 30 вопросов, 30 мин | <https://1c.ru/prof/prof.htm> |
| 1С:Специалист | Практика, 5 часов | <https://rarus-soft.ru/partnership/education/certification/> |
| 1С:Эксперт | Тест + интервью | <https://practicum.yandex.ru/blog/kak-proyti-sertifikaciyu-1c/> |

## Полезные сообщества
* Форум Mista: <https://forum.mista.ru>
* Infostart: <https://infostart.ru>
* Telegram @e1c_community (общий), @FastCodeIM (DevOps).
* GitHub: <https://github.com/topics/1c>

## Стек инструментов
* IDE: Конфигуратор, 1С:EDT. Руководство <https://its.1c.ru/db/edtdoc>
* VCS: gitsync, v8unpack.
* CI/CD: v8runner, Docker, GitHub Actions.
* Тесты: Vanessa-Automation, xUnitFor1C.

## FAQ
**Q:** Сколько времени до Middle?
**A:** При среднем темпе ≈ 18 месяцев и практике ≥ 1000 ч.

**Q:** Нужен ли английский?
**A:** Для чтения исходников и Postgres-документации достаточно уровня Intermediate.

---

> Обновляется раз в квартал. Issues и pull-requestы приветствуются!
