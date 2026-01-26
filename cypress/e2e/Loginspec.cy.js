import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const pageLogin = new LoginPage()
const pageDashboard = new DashboardPage()

describe('Testes Orange', () => {

  it('Login - Success - Deve acessar a página de login e salvar com sucesso', () => {
    pageLogin.accessLoginPage()
    pageLogin.loginWhithUser(userData.userSuccess.username, userData.userSuccess.password)
    pageDashboard.checkDashboardPage()
  })


    it('Login - Fail - Deve tentar acessar com dados inválidos e retornar mensagem de erro', () => {
      pageLogin.accessLoginPage()
      pageLogin.loginWhithUser(userData.userFail.username, userData.userFail.password)
      pageLogin.alertFail()

    })

  })