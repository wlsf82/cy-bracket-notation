Cypress.Commands.add('checkoutCompletePage.confirmCompletion', () => {
  cy.contains('.title', 'Checkout: Complete!').should('be.visible')
  cy.contains('.complete-header', 'THANK YOU FOR YOUR ORDER').should('be.visible')
  cy.get('.pony_express').should('be.visible')
  cy.contains('button', 'Back Home')
    .should('be.visible')
    .and('be.enabled')
})
