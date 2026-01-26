class MyInfopage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericNameField: ".oxd-input--active",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericComboBox: '.oxd-select-text--arrow',
            secondItemComboBox: ':nth-child(27)',
            thirdItemComboBox: '.oxd-select-dropdown > :nth-child(3)'
        }

        return selectors
    }

    personalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    employeedDetails(employeedId, otherId, licenseNumber, expiryDate) {
        cy.get(this.selectorsList().genericNameField).eq(3).clear().type(employeedId)
        cy.get(this.selectorsList().genericNameField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericNameField).eq(5).clear().type(licenseNumber)
        cy.get(this.selectorsList().genericNameField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    statusDetails() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().thirdItemComboBox).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('.oxd-text--toast-message')
    }   
}

export default MyInfopage