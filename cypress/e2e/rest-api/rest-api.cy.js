/// <reference types="cypress" />

describe('Rest API', () => {
  it('should create an account', () => {
    cy.request({
      method: 'POST',
      url: 'https://barrigarest.wcaquino.me/signin',
      body: {
        email: 'denis@email',
        redirecionar: 'false',
        senha: 'dd',
      },
    })
      .its('body.token')
      .should('not.be.empty')
  })
})
