import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {

 it('User Info Update - Sucess', () => {
    
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails('First Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'Other Id', 'Drivers Licenses','2025-01-28')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})