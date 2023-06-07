import '@testing-library/cypress/add-commands'

Cypress.Commands.add('getToken', (user, passwd) => {
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
    .then((token) => {
      return token
    })
})
