describe('cy-bracket-notation', () => {
  it('uses cy commands using brackets', () => {
    cy['visit']('https://example.cypress.io')
  })

  it('uses the "login.fillForm" custom cmd', () => {
    cy['login.fillForm']()
  })

  it('uses the "shoppingCart.addItem" custom cmd', () => {
    cy['shoppingCart.addItem']('Cypress T-shirt')
    cy['shoppingCart.addItem']('Cypress sticker')
  })
})
