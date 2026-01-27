import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfopage from '../pages/myinfoPage'

const Chance = require('chance')

const chance = new Chance()
const pageLogin = new LoginPage()
const pageDashboard = new DashboardPage()
const pageMenu = new MenuPage()
const pageMyInfo = new MyInfopage()

describe('Testes Orange', () => {

  it('Deve fazer o login corretamente ser redirecionado para a página de MyInfo, incluir os dados corretamente e salvar.', () => {
    pageLogin.accessLoginPage()
    pageLogin.loginWhithUser(userData.userSuccess.username, userData.userSuccess.password)

    pageDashboard.checkDashboardPage()

    pageMenu.ButtonMyInfo()

    pageMyInfo.personalDetails(chance.first(), chance.last(), chance.string())
    pageMyInfo.employeedDetails('employeed', 'orherTest', '1324', '2026-01-26')
    pageMyInfo.statusDetails()

    pageMyInfo.contactDetailsAdress(chance.street(), chance.street(), chance.city(), chance.state({ full: true }), chance.postal())
    pageMyInfo.contactDetailsContacts(chance.phone(), chance.phone(), chance.phone(), chance.email(), chance.email())
    pageMyInfo.saveForm()

  })

})