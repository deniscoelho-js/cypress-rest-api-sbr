/// <reference types="cypress" />

describe('Rest API', () => {
  it('should create an account', () => {
    cy.getToken('denis@email', 'dd').then((token) => {
      cy.request({
        url: 'https://barrigarest.wcaquino.me/contas',
        method: 'POST',
        headers: { Authorization: `JWT ${token}` },
        body: {
          nome: 'conta via rest',
        },
      }).as('response')
    })
    cy.get('@response').then((res) => {
      expect(res.status).to.be.equal(201)
      expect(res.body).to.have.property('id')
      expect(res.body).to.have.property('nome', 'conta via rest')
    })
  })
})
