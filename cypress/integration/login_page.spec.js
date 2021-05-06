import * as lp from '../fixtures/html_related/login_page_selectors.json'

describe('User Login Page Testing', () => {
  beforeEach(function () {
    cy.visit(Cypress.env('online_url'))
  })

  it('Main Comoponents Check', () => {
    cy.get(lp.page_name).should('contain', 'Login')

    cy.get(lp.user_id_text).should('contain', 'User ID:')

    cy.get(lp.user_id_input).should('be.empty').invoke('attr', 'type').should('eq', 'text')

    cy.get(lp.password_text).should('contain', 'Password:')

    cy.get(lp.password_input).should('be.empty').invoke('attr', 'type').should('eq', 'password')

    cy.get(lp.login_button).invoke('attr', 'type').should('eq', 'submit')

    cy.get(lp.help_button).should('contain', 'Having trouble logging in?').invoke('attr', 'href').should('contain', 'rest/recoverAccount')

    cy.get(lp.terms_and_conditions_link)
      .should('contain', 'Terms and Conditions')
      .invoke('attr', 'href')
      .should('eq', 'https://domain_name/terms-and-conditions/')

    cy.get(lp.terms_of_use_link).should('contain', 'Terms of Use').invoke('attr', 'href').should('eq', 'https://www.domain_name/terms-of-use/')

    cy.get(lp.accessibility_policy_link)
      .should('contain', 'Accessibility Policy')
      .invoke('attr', 'href')
      .should('eq', 'https://www.domain_name/accessibility-policy/')

    cy.get(lp.privacy_link).should('contain', 'Privacy').invoke('attr', 'href').should('eq', 'https://www.domain_name/privacy/')
  })

  it('Successful User Login', () => {
    cy.get(lp.user_id_input).type(Cypress.env('valid_user_id'))

    cy.get(lp.password_input).type(Cypress.env('valid_password'))

    cy.get(lp.login_button).click()

    cy.get('div').should('contain', 'find property')
  })

  it('Unsuccessful User Login (Invalid Password)', () => {
    cy.get(lp.user_id_input).type(Cypress.env('valid_user_id'))

    cy.get(lp.password_input).type(Cypress.env('valid_password') + 'hgdn')

    cy.get(lp.login_button).click()

    cy.get(lp.error_message)
      .should('contain', 'You have entered an incorrect login name and/or password, please try again.')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('Unsuccessful User Login (Invalid User ID)', () => {
    cy.get(lp.user_id_input).type(Cypress.env('valid_user_id') + 'hgdn')

    cy.get(lp.password_input).type(Cypress.env('valid_password'))

    cy.get(lp.login_button).click()

    cy.get(lp.error_message)
      .should('contain', 'You have entered an incorrect login name and/or password, please try again.')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('Unsuccessful User Login (Blank User ID)', () => {
    cy.get(lp.password_input).type(Cypress.env('valid_password'))

    cy.get(lp.login_button).click()

    cy.get(lp.error_message)
      .should('contain', 'You have entered an incorrect login name and/or password, please try again.')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('Unsuccessful User Login (Blank Password)', () => {
    cy.get(lp.user_id_input).type(Cypress.env('valid_user_id'))

    cy.get(lp.login_button).click('')

    cy.get(lp.error_message)
      .should('contain', 'You have entered an incorrect login name and/or password, please try again.')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('Unsuccessful User Login (Blank User ID and Password)', () => {
    cy.get(lp.login_button).click()

    cy.get(lp.error_message)
      .should('contain', 'You have entered an incorrect login name and/or password, please try again.')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('Unsuccessful User Login (Blank Space as User ID)', () => {
    cy.get(lp.user_id_input).type(' ')

    cy.get(lp.password_input).type(Cypress.env('valid_password'))

    cy.get(lp.login_button).click()

    cy.get(lp.error_message)
      .should('contain', 'You have entered an incorrect login name and/or password, please try again.')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('Unsuccessful User Login (Blank Space as Password)', () => {
    cy.get(lp.user_id_input).type(Cypress.env('valid_user_id'))

    cy.get(lp.password_input).type(' ')

    cy.get(lp.login_button).click('')

    cy.get(lp.error_message)
      .should('contain', 'You have entered an incorrect login name and/or password, please try again.')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  it('Unsuccessful User Login (Blank Space as User ID and Password)', () => {
    cy.get(lp.user_id_input).type(' ')

    cy.get(lp.password_input).type(' ')

    cy.get(lp.login_button).click()

    cy.get(lp.error_message)
      .should('contain', 'You have entered an incorrect login name and/or password, please try again.')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })
})
