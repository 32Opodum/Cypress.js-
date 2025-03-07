describe('Проверка авторизации', function () {

    it('Ввести правильный логин правильный пароль', function () {
         cy.visit('https://login.qa.studio/');               // зайти на сайт
        (cy.get('#mail')).type('german@dolnikov.ru'); // Ввести правильный логин
        (cy.get('#pass')).type('iLoveqastudio1');     // Ввести правильный пароль
        (cy.get('#loginButton')).click();             //  Нажать войти
        (cy.get('#messageHeader')).contains('Авторизация прошла успешно'); // Проверить нужный текст 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик

     })
 }) 

 


it('Ввести правильный логин неправильный пароль', function () {
    cy.visit('https://login.qa.studio/');               // зайти на сайт
   (cy.get('#mail')).type('german@dolnikov.ru'); // Ввести правильный логин
   (cy.get('#pass')).type('iLoveqastudio7');     // Ввести неправильный пароль
   (cy.get('#loginButton')).click();             //  Нажать войти
   (cy.get('#messageHeader')).contains('Такого логина или пароля нет'); // Проверить нужный текст 
   cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик

})




it('Ввести неправильный логин правильный пароль', function () {
    cy.visit('https://login.qa.studio/');               // зайти на сайт
   (cy.get('#mail')).type('german111@dolnikov.ru'); // Ввести неправильный логин
   (cy.get('#pass')).type('iLoveqastudio1');     // Ввести правильный пароль
   (cy.get('#loginButton')).click();             //  Нажать войти
   (cy.get('#messageHeader')).contains('Такого логина или пароля нет'); // Проверить нужный текст 
   cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик

})




it('восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');               // зайти на сайт
    cy.get('#forgotEmailButton').click();      // Нажать «Забыли пароль»
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click(); // отправить код
    cy.get('#message').contains('Успешно отправили пароль на e-mail'); // Проверить нужный текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик
})




it('проверка валидации', function () {
    cy.visit('https://login.qa.studio/');               // зайти на сайт
   (cy.get('#mail')).type('germandolnikov.ru'); // Ввести логин без @
   (cy.get('#pass')).type('iLoveqastudio1');     // Ввести правильный пароль
   (cy.get('#loginButton')).click();             //  Нажать войти
   (cy.get('#messageHeader')).contains('Нужно исправить проблему валидации'); // Проверить нужный текст 
   cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик

})



it('на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');               // зайти на сайт
   (cy.get('#mail')).type('GerMan@Dolnikov.ru'); // Ввести  логин
   (cy.get('#pass')).type('iLoveqastudio1');     // Ввести правильный пароль
   (cy.get('#loginButton')).click();             //  Нажать войти
   (cy.get('#messageHeader')).contains('Авторизация прошла успешно'); // Проверить нужный текст 
   cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // и наличие кнопки крестик

})





describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });

