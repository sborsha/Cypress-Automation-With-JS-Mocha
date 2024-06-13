import LoginPage from "../pages/LoginPage";
import Appointment from "../pages/Appointment";

describe("To Give an Appointment", ()=>{

    const loginPage = new LoginPage();
    const appointment = new Appointment();

    beforeEach(()=>{
        loginPage.userLogin("John Doe","ThisIsNotAPassword");
        loginPage.userVerifyAppointmentPage(); 
    })
    it('Appoinment', ()=>{
        appointment.facility();
        appointment.checkReadAdmissionbtn();
        appointment.checkHealthcareProgram();
        appointment.selectDate("26/7/24");
        appointment.getComment("Comments");
        appointment.btnBookAppointment();
        //cy.wait(3000);

    })

    it('Verify to Appointment if it Confirm', ()=>{
        appointment.facility();
        appointment.checkReadAdmissionbtn();
        appointment.checkHealthcareProgram();
        appointment.selectDate("26/7/24");
        appointment.getComment("Comments");
        appointment.btnBookAppointment();
        appointment.verifyAppointment();
    })
})