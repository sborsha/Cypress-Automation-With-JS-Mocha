class Appointment{
    
    facility(){
        cy.get('#combo_facility')
        .select('Hongkong CURA Healthcare Center')
    }

    checkReadAdmissionbtn(){
        cy.get("#chk_hospotal_readmission").check().should('be.checked');
    }

    //click Medicaid box 
    checkHealthcareProgram(){
        cy.get("#radio_program_medicaid").check().should('have.value', "Medicaid");
    }

    //Date select
    selectDate(date){
        cy.get("#txt_visit_date").type(date);
        cy.get(":nth-child(5) > .col-sm-offset-3").click();

    }

    getComment(comment){
        cy.get('#txt_comment').type(comment);
    }

    btnBookAppointment(){
        cy.get('#btn-book-appointment').click();
    }

    //Verification Appoinment
    verifyAppointment(){
        cy.get("div[class='col-xs-12 text-center'] h2").should('have.text','Appointment Confirmation');
        cy.get(".lead").should('contain.text', "Please be informed that your appointment has been booked as following:");
    }

}

export default Appointment;