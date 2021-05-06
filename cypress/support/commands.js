Cypress.Commands.add('loginUser', (valid_user_id, valid_password) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('online_url') + 'rest/j_spring_security_check',
    form: true,
    body: {
      j_username: valid_user_id,
      j_password: valid_password,
    },
  })

  cy.log('Successful User Login')
})
