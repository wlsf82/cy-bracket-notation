describe('SWAG Labs', () => {
  context('Checkout', () => {
    beforeEach(() => {
      cy['loginPage_fillFormAndSubmit']()
    })

    it('successfully goes through the whole checkout process', () => {
      cy['shoppingCartPage.addItem']('backpack')
      cy['shoppingCartPage.addItem']('bolt-t-shirt')
      cy['shoppingCartPage.countCartItems']().should('be.equal', 2)
      cy['shoppingCartPage.goToYourCart']()

      cy['yourCartPage.countItems']().should('be.equal', 2)
      cy['yourCartPage.moveToNextCheckoutStep']()

      cy['yourInfoPage.fillFormAndSubmit']('Walmyr', 'Filho', '12345')

      cy['checkoutOverviewPage.countItems']().should('be.equal', 2)
      cy['checkoutOverviewPage.finishCheckout']()

      cy['checkoutCompletePage.confirmCompletion']()
    })
  })

  context('Login', () => {
    it('unsuccessfully logs in', () => {
      cy.loginPage_fillFormAndSubmit('standard_user', 'invalid-password')

      cy['loginPage.getError']()
        .should('contain', 'Username and password do not match any user in this service')
    })
  })
})
