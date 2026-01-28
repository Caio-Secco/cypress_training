class PimPage {

    selectorsList() {
        const selectors = {
            genericInput: "[placeholder='Type for hints...']",
            employeeId: "[data-v-1f99f73c='']",
            genericSelect: '.oxd-select-text--arrow',
            optionStatus:':nth-child(3) > span',
            optionIncluide:'.oxd-select-dropdown > :nth-child(2) > span',
            optionJob: ':nth-child(3) > span',
            optionSubUnit: '.oxd-select-dropdown > :nth-child(3)',
            selectSupervisor: ':nth-child(4) > span',
            submitButton: "[type='submit']",
            addButton: '.oxd-button--secondary',
            EmployeeGrid: '.orangehrm-card-container',
            firstName: "[name='firstName']",
            middleName: "[name='middleName']",
            lastName: "[name='lastName']",
            inputId: "[data-v-1f99f73c='']"


        }

        return selectors
    }

    EmployeeInformation(name, id) {
        cy.get(this.selectorsList().genericInput).eq(0).type(name)
        cy.get(this.selectorsList().employeeId).eq(1).type(id)
        cy.get(this.selectorsList().genericSelect).eq(0).click()
        cy.get(this.selectorsList().optionStatus).click()
        cy.get(this.selectorsList().genericSelect).eq(1).click()
        cy.get(this.selectorsList().optionIncluide).click()
        cy.get(this.selectorsList().genericInput).eq(1).type('D')
        cy.get(this.selectorsList().selectSupervisor).click()
        cy.get(this.selectorsList().genericSelect).eq(2).click()
        cy.get(this.selectorsList().optionJob).click()
        cy.get(this.selectorsList().genericSelect).eq(3).click()
        cy.get(this.selectorsList().optionSubUnit).click()
    }

    EmployeeAdd(nameAdd, middleNameAdd, lastNameAdd, otherId) {
        cy.get(this.selectorsList().addButton).eq(1).click()
        cy.get(this.selectorsList().EmployeeGrid).should('be.visible')
        cy.get(this.selectorsList().firstName).type(nameAdd)
        cy.get(this.selectorsList().middleName).type(middleNameAdd)
        cy.get(this.selectorsList().lastName).type(lastNameAdd)
        cy.get(this.selectorsList().inputId).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().submitButton).click()
        cy.get('.oxd-text--toast-message').contains('Successfully Saved')
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).click()
        cy.get('.oxd-toast')
    }

    
}

export default PimPage