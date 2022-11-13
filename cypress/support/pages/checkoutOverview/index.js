Cypress.Commands.add('checkoutOverviewPage.countItems', () => {
  cy.get('.cart_item').its('length')
})

Cypress.Commands.add('checkoutOverviewPage.finishCheckout', () => {
  cy.get('[data-test="finish"]').click()
})
