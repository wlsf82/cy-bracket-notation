Cypress.Commands.add('loginPage.fillFormAndSubmit', (
  user = 'standard_user',
  password = 'secret_sauce',
) => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type(user)
  cy.get('[data-test="password"]').type(password, { log: false })
  cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('loginPage.getError', () => {
  cy.get('[data-test="error"]')
    .then($error => {
      return $error[0].innerText
    })
})
