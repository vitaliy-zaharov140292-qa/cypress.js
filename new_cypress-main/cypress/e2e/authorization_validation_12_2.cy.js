describe('Проверка авторизации', function () {

    it('Правильный логин и правильный пароль - №1 (Позитивный тест-кейс)', function () {
     cy.visit ('https://login.qa.studio/'); // Зашли на сайт

     cy.get('#mail').type ('german@dolnikov.ru'); // Ввели правильный логин
     cy.get('#pass').type ('iLoveqastudio1'); // Ввели правильный пароль
     cy.get('#loginButton').click(); // Нажал кнопку "Войти" 

     cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
     cy.get('#messageHeader').should('be.visible'); // Текст после авторизации виден пользователю 
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
     
    it('Проверка логики функции - "Восстановить пароль" - №2 (Позитивный тест-кейс)', function () {
        cy.visit ('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажал кнопку "Восстановить пароль"

        cy.get('#mailForgot').type ('vitalzaharov140292@yandex.ru'); // Ввели почту (любую)
        cy.get('#restoreEmailButton').click(); // Нажал кнопку "Отправить код"
   
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю что после ввода почты вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст после ввода почты виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
      
       })

       it('Правильный логин и не правильный пароль - №3 (Негативный тест-кейс)', function () {
        cy.visit ('https://login.qa.studio/'); // Зашли на сайт
   
        cy.get('#mail').type ('german@dolnikov.ru'); // Ввели правильный логин
        cy.get('#pass').type ('iLoveqastudio2'); // Ввели неправильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку "Войти" 
   
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст после авторизации виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
       })

       it('Не правильный логин и правильный пароль - №4 (Негативный тест-кейс)', function () {
        cy.visit ('https://login.qa.studio/'); // Зашли на сайт
   
        cy.get('#mail').type ('vitaliy@zakharov.ru'); // Ввели не правильный логин
        cy.get('#pass').type ('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку "Войти" 
   
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст после авторизации виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
       })

       it('Логин без @ и правильный пароль. Проверка валидации - №5 (Негативный тест-кейс)', function () {
        cy.visit ('https://login.qa.studio/'); // Зашли на сайт
   
        cy.get('#mail').type ('germandolnikov.ru'); // Ввели правильный логин
        cy.get('#pass').type ('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку "Войти" 
   
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст после авторизации виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
       })

       it('Проверка на приведение к строчным буквам - №6', function () {
        cy.visit ('https://login.qa.studio/'); // Зашли на сайт
   
        cy.get('#mail').type ('GerMan@Dolnikov.ru'); // Ввели логин с использованием заглавных букв
        cy.get('#pass').type ('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').click(); // Нажал кнопку "Войти" 
   
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст после авторизации виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
       })


         
 });
