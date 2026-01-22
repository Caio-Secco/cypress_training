import userData from '../fixtures/userData.json'

describe('Página de Login', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericNameField: ".oxd-input--active",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it('Deve acessar a página de login e realizar o cadastro com sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid) //Valida se eralmente está no dashboard
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Caio')
    cy.get(selectorsList.middleNameField).clear().type('teste')
    cy.get(selectorsList.lastNameField).clear().type('1234')
    cy.get(selectorsList.genericNameField).eq(3).clear().type('caioba')
    cy.get(selectorsList.genericNameField).eq(4).clear().type('caiobatwo')
    cy.get(selectorsList.genericNameField).eq(5).clear().type('caiobatree')
    cy.get(selectorsList.genericNameField).eq(6).clear().type('2002-04-30')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-text--toast-message')
  })
})