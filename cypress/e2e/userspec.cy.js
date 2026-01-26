import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfopage from '../pages/myinfoPage'

const pageLogin = new LoginPage()
const pageDashboard = new DashboardPage()
const pageMenu = new MenuPage()
const pageMyInfo = new MyInfopage()

describe('Testes Orange', () => {

  it('Login - Success - Deve acessar a página de login, incluir todos os dados e salvar com sucesso', () => {
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