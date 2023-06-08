/// <reference types="cypress" />

describe('Rest API', () => {
  let token

  before(() => {
    cy.getToken('denis@email', 'dd').then((tkn) => {
      token = tkn
    })
  })

  beforeEach(() => {
    cy.resetRest()
  })

  it('should create an account', () => {
    cy.request({
      url: '/contas',
      method: 'POST',
      headers: { Authorization: `JWT ${token}` },
      body: {
        nome: 'conta via rest',
      },
    }).as('response')

    cy.get('@response').then((res) => {
      expect(res.status).to.be.equal(201)
      expect(res.body).to.have.property('id')
      expect(res.body).to.have.property('nome', 'conta via rest')
    })
  })
})
