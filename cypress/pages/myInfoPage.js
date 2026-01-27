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
            thirdItemComboBox: '.oxd-select-dropdown > :nth-child(3)',
            PersonalDetailsButton: '[href="/web/index.php/pim/contactDetails/empNumber/7"]',
            validationPage: '.oxd-layout-context',
            genericSelectorField: "[data-v-1f99f73c='']",
            selectCombobox: '.oxd-select-text--arrow',
            itemComboBox: ':nth-child(31)',
            genericInputsMail: '.oxd-input',
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
    
    contactDetailsAdress(street1, street2, city, stateProvince, postalCode){
        cy.get(this.selectorsList().PersonalDetailsButton).click()
        cy.get(this.selectorsList().validationPage).should('be.visible')
        cy.get(this.selectorsList().genericSelectorField).eq(1).clear().type(street1)
        cy.get(this.selectorsList().genericSelectorField).eq(2).clear().type(street2)
        cy.get(this.selectorsList().genericSelectorField).eq(3).clear().type(city)
        cy.get(this.selectorsList().genericSelectorField).eq(4).clear().type(stateProvince)
        cy.get(this.selectorsList().genericSelectorField).eq(5).clear().type(postalCode)
        cy.get(this.selectorsList().selectCombobox).click()
        cy.get(this.selectorsList().itemComboBox).click()

    }

    contactDetailsContacts(homeFone, mobileFone, workFone, mail, otherMail) {
        cy.get(this.selectorsList().genericInputsMail).eq(6).clear().type(homeFone)
        cy.get(this.selectorsList().genericInputsMail).eq(7).clear().type(mobileFone)
        cy.get(this.selectorsList().genericInputsMail).eq(8).clear().type(workFone)
        cy.get(this.selectorsList().genericInputsMail).eq(9).clear().type(mail)
        cy.get(this.selectorsList().genericInputsMail).eq(10).clear().type(otherMail)
    }
}

export default MyInfopage