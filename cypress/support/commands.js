import '@testing-library/cypress/add-commands'

Cypress.Commands.add('getToken', (user, passwd) => {
  cy.request({
    method: 'POST',
    url: '/signin',
    body: {
      email: 'denis@email',
      redirecionar: 'false',
      senha: 'dd',
    },
  })
    .its('body.token')
    .should('not.be.empty')
    .then((token) => {
      return token
    })
})

Cypress.Commands.add('resetRest', () => {
  cy.getToken('denis@email', 'dd').then((token) => {
    cy.request({
      method: 'GET',
      url: '/reset',
      headers: { Authorization: `JWT ${token}` },
    })
      .its('status')
      .should('be.equal', 200)
  })
})
