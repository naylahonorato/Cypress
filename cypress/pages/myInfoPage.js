class MyInfoPage{
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton:".--close",
            submitButton: "[type='submit']",
            genericCombobox: ".oxd-select-text-input",
            secondItemCombobox: ':nth-child(27) > span',
            thirdItemCombobox: '.oxd-select-dropdown > :nth-child(3)'
        }

        return selectors
    }
   
    fillPersonalDetails(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    
    fillEmployeeDetails(employeeId,otherId,driversLicenseId,driversLicenseDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()

    }
   
    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast')
    }

    fillStatus(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().thirdItemCombobox).click()

    }
    
   
}

export default MyInfoPage