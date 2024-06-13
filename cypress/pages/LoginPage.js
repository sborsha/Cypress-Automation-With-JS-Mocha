class LoginPage{
    userLogin(username,password){
        cy.visit("https://katalon-demo-cura.herokuapp.com/");

        cy.get('#btn-make-appointment').click();   //click Appoinment button for login

        cy.get("#txt-username").type(username);  //username field
        cy.get("#txt-password").type(password);  //password field
        cy.get("#btn-login").click()    //login button
        
    }

    // TO verify Appoinment title
    userVerifyAppointmentPage(){
        cy.get("div[class='col-sm-12 text-center'] h2").should('have.text','Make Appointment')
    }

    //verify login failed with invalid credentials
    userInvalidLogin(){
        cy.get(".lead.text-danger").should('have.text', 'Login failed! Please ensure the username and password are valid.');
    }
}
export default LoginPage;