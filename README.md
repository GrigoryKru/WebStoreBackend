***Online Store Backend API***

Node.js
PostgreSQL
Express

Backend API для интернет-магазина, построенный на Node.js с использованием Express и PostgreSQL.

***Технологии и зависимости***

**Основные зависимости:**
express@5.1.0 - Фреймворк для создания сервера
pg@8.14.1 - PostgreSQL клиент для Node.js
sequelize@6.37.7 - ORM для работы с базой данных
dotenv@16.4.7 - Загрузка переменных окружения
cors@2.8.5 - Middleware для обработки CORS

**Дополнительные зависимости**:
pg-hstore@2.3.4 - Поддержка hstore для PostgreSQL
Dev-зависимости
nodemon@3.1.9 - Автоматическая перезагрузка сервера при разработке

***Быстрый старт***

**Предварительные требования**

Node.js 18.x или выше
PostgreSQL 14.x или выше
npm 9.x или выше

**Установка**
1.Клонируйте репозиторий:
```git clone https://github.com/ваш-логин/online-store.git```
**Установите зависимости**:
```npm install express pg sequelize dotenv cors pg-hstore```
```npm install --save-dev nodemon```

**Создайте и заполните .env файл:**
```PORT=5000```
```DB_NAME=online_store```
```DB_USER=postgres```
```DB_PASSWORD=ваш_пароль```
```DB_HOST=localhost```
```DB_PORT=5432```

**Запустите сервер в режиме разработки:**
```npm run dev```
Сервер будет доступен по адресу: http://localhost:5000

***Команды***

```npm run dev``` - Запуск сервера в режиме разработки (с nodemon)
```npm start``` - Запуск сервера в production режиме