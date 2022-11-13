Cypress.Commands.add('yourCartPage.countItems', () => {
  cy.get('.cart_item').its('length')
})

Cypress.Commands.add('yourCartPage.moveToNextCheckoutStep', () => {
  cy.get('[data-test="checkout"]').click()
})
