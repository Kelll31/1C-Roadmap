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
