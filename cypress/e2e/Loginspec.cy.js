import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const pageLogin = new LoginPage()
const pageDashboard = new DashboardPage()
const pageMenu = new MenuPage()

describe('Página de Login', () => {

  const selectorsList = {

    
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericNameField: ".oxd-input--active",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericComboBox: '.oxd-select-text--arrow',
    secondItemComboBox: ':nth-child(27)',
    thirdItemComboBox: '.oxd-select-dropdown > :nth-child(3)'
  }

  it('Deve acessar a página de login e realizar o cadastro com sucesso', () => {
    pageLogin.accessLoginPage()
    pageLogin.loginWhithUser(userData.userSuccess.username, userData.userSuccess.password)

    pageDashboard.checkDashboardPage()

    pageMenu.ButtonMyInfo()
 
    cy.get(selectorsList.firstNameField).clear().type('Caio')
    cy.get(selectorsList.middleNameField).clear().type('teste')
    cy.get(selectorsList.lastNameField).clear().type('1234')
    cy.get(selectorsList.genericNameField).eq(3).clear().type('caioba')
    cy.get(selectorsList.genericNameField).eq(4).clear().type('caiobatwo')
    cy.get(selectorsList.genericNameField).eq(5).clear().type('caiobatree')
    cy.get(selectorsList.genericNameField).eq(6).clear().type('2002-04-30')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(selectorsList.secondItemComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get(selectorsList.thirdItemComboBox).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-text--toast-message')
  })
})