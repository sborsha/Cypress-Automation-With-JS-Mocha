import LoginPage from "../pages/LoginPage"

describe('Test Login', () => {

  const loginPage = new LoginPage();

  it('Login with valid credentials', () => {
  
    loginPage.userLogin("John Doe","ThisIsNotAPassword");
    loginPage.userVerifyAppointmentPage();
  })

  it('Login with invalid credentials', () => {
  
    loginPage.userLogin("John Doe","John Doe");
    loginPage.userInvalidLogin();
  })
})