Cypress.Commands.add('shoppingCartPage.addItem', item => {
  cy.get(`[data-test="add-to-cart-sauce-labs-${item}"]`).click()
})

Cypress.Commands.add('shoppingCartPage.countCartItems', () => {
  cy.get('.shopping_cart_badge')
    .then($shoppingCartBadge => {
      return parseInt($shoppingCartBadge[0].innerText)
    })
})

Cypress.Commands.add('shoppingCartPage.goToYourCart', () => {
  cy.get('.shopping_cart_link').click()
})
