# Інструкція для встановлення проекту

## Через Git:
1. Переконайтеся, що на ПК встановлений Git, Node.js
2. Скопіювати посилання репозиторію і в терміналі виконати "git clone <*посилання*>"
3. Перейти в папку проекту і встановити залежності "npm install"
4. Запустити проект "npm start" або "npm run dev"
5. Перейти за посилання, відображуваним в терміналі, або відкрити "http://localhost:5173/" в браузері

## Власноруч
1. Переконайтеся, що на ПК встановлений Node.js
2. Завантажити файли проекту за допомогою кнопки "Code"
3. Перейти в папку проекту і встановити залежності "npm install"
4. Запустити проект "npm start" або "npm run dev"
5. Перейти за посилання, відображуваним в терміналі, або відкрити "http://localhost:5173/" в браузері

# Якщо проект не запускається або не працює
Спробуйте очистити і повторно встановити залежності "rm -rf node_modules", "npm install"
Переконайтеся що у вас встановлений та запущений сервер **info-protection5-server**

## Інструкція користування
- Блок "Text" використовується для ввода тексту через завантаження файлу, шляхом натискання на відповідну кнопку або настивнувши на кнопку "показати" та вводу з клавіатури
- Блоки "Public Key", "Private Key" використовується відповідно поперельному блоку, для задання піблічного та приватного ключів відповідно
- Кнопки "Public Key Gen", "Private Key Gen" використовуються для генерування публічних і приватнихключів відповідно. Для зміни критеріїв генерування можна ввести в поля "p" та "q" відповідні значення
- Кнопки "crypt", "decrypt" виконують операцію шифрування, дешифрування відповідно
- Результати операція генерування ключів та шифрування, дешифрування завантажуються файлами
