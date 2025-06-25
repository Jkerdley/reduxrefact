# Контакты — управление контактами с Redux

![React](https://img.shields.io/badge/React-18.2-blue)
![Redux](https://img.shields.io/badge/Redux-5.0-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)

Приложение для управления контактами с использованием классического подхода Redux.

## 📦 Особенности

- Полная интеграция Redux (без Toolkit)
- Типизированные экшены и редьюсеры
- Асинхронные операции через Redux Thunk
- Группировка контактов
- Избранные контакты
- Поиск и фильтрация

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm start

# Сборка для production
npm run build
```

## 🏗️ Архитектура

```
/src
├── store/              # Redux хранилище
│   ├── actions/        # Экшены и thunk
│   ├── reducers/       # Редьюсеры
│   ├── selectors/      # Селекторы
│   ├── types/          # Action types
│   └── store.ts        # Конфигурация хранилища

├── components/         # UI компоненты
├── hooks/              # Кастомные хуки
├── pages/              # Страницы приложения
├── types/              # Типы TypeScript
└── constants/          # Константы приложения
```

## 🔧 Технологии

- React 18
- Redux + Thunk
- TypeScript
- React Bootstrap
- React Router 6
