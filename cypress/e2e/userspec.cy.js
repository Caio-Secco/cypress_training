import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfopage from '../pages/myinfoPage'
import PimPage from '../pages/pimPage'

const Chance = require('chance')

const chance = new Chance()
const pageLogin = new LoginPage()
const pageDashboard = new DashboardPage()
const pageMenu = new MenuPage()
const pageMyInfo = new MyInfopage()
const pagePim = new PimPage()

describe('Testes Orange', () => {

  beforeEach(() => {
    pageLogin.accessLoginPage()
    pageLogin.loginWhithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    )
    pageDashboard.checkDashboardPage()
    pageMenu.ButtonMyInfo()
  })

  it('Deve fazer o login corretamente ser redirecionado para a página de MyInfo, incluir os dados corretamente e salvar.', () => {

    pageMyInfo.personalDetails(chance.first(), chance.last(), chance.string())
    pageMyInfo.employeedDetails(chance.ssn({ ssnFour: true }), chance.ssn({ ssnFour: true }), chance.ssn({ ssnFour: true }), chance.date({ string: true }))
    pageMyInfo.statusDetails()

    pageMyInfo.contactDetailsAdress(
      chance.street(),
      chance.street(),
      chance.city(),
      chance.state({ full: true }),
      chance.postal()
    )
    pageMyInfo.contactDetailsContacts(
      chance.phone(),
      chance.phone(),
      chance.phone(),
      chance.email(),
      chance.email()
    )
    pageMyInfo.saveForm()

  })

  it.only('Deve acessar á página de PIM, incluir os dados corretamente, incluir o cadastro e após a remove-lo', () => {

    pageMenu.ButtonPim()
    pagePim.EmployeeInformation('teste', '123', 'caio')
    pagePim.saveForm()
  })

})