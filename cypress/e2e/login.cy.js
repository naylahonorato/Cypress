import userData from '../fixtures/users/userData.json'

describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid : ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }



  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})