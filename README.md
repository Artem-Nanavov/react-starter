## Про проект

Проект создан для того, чтобы просто склонить и начать работу, без всякой мутатени и настройки всего webpack/eslint ... 

## Перед началом работы (для vscode)

1. Установите расширения eslint && prettier для вашей IDE
2. Создайте в корне проекта папку `.vscode`
3. В папке `.vscode` создайте файл `settings.json`
4. В файле `settings.json` добавте следующие
```
{
  "editor.formatOnSave": false,
  "eslint.autoFixOnSave": true,
}
```

## Как разворачивать приложение

1. `git clone https://github.com/Artem-Nanavov/react-mobx-starter.git`
2. `npm i`
3. npm run dev
4. Приложение открывать по адресу `http://localhost:3000`


## Рабочий процесс

1. Берем задачу в трелло
1. Создаем новую ветку от `master`, именуем `{fix|feature|refactor}/{id тикета в трелло}`
1. Когда работа закончена создаем merge request

## Архитектура

`assets` - картинки, библиотечные стили и прочий треш

`components` - Все компоненты из которых строятся страницы (/components/pageName/... -> все локальные зависимости для это страницы
(components, constants, hooks, assets и т.д.))

`components/shared` - все общие компоненты

`core/constants` - общие переменные

`core/hooks` - общие хуки

`core/providers` - глобальные провайдеры

`core/services/api` - работа с бекендом

`core/styles` - общие стили

`layouts` - лайауты

`locales` - json-ки с переводами

`public` - тут хранятся pdf-ки, которые раздаются в приложении, но в последствии планируется заменить их на забор с сервера.



## Порядок импортов

1. Зависимости (`import React from 'react'`)
1. Общие функции(хуки, компоненты), которые хранятся в `core`
1. Локальные компоненты
1. Ассеты
1. Стили
