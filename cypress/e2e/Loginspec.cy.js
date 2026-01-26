import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfopage from '../pages/myinfoPage'

const pageLogin = new LoginPage()
const pageDashboard = new DashboardPage()
const pageMenu = new MenuPage()
const pageMyInfo = new MyInfopage()

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

    pageMyInfo.personalDetails('caiotest', 'testtwo', 'seccotest')
    pageMyInfo.employeedDetails('employeed', 'orherTest', '1324', '2026-01-26')
    pageMyInfo.statusDetails()
    pageMyInfo.saveForm()
 
    
    
    
    
  })
})