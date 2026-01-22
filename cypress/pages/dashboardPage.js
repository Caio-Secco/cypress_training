class DashboardPage {
    
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible') //Valida se eralmente está no dashboard
    }

    /*clickButtonPage() {
        cy.get(this.selectorsList().myInfoButton).click()
    }*/
}

export default DashboardPage