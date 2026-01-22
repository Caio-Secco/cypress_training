class MenuPage {
    
    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            DashboardButton: '[href="/web/index.php/dashboard/index"]',
            DirectoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            MitenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            ClaimButton: '[href="/web/index.php/claim/viewClaimModule"]',
            BuzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
            RecruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            TimeButton: '[href="/web/index.php/time/viewTimeModule"]',
            LeaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            PimButton: '[href="/web/index.php/pim/viewPimModule"]',
            AdminButton: '[href="/web/index.php/admin/viewAdminModule"]'

        }
        
        return selectors
    }

    ButtonAdmin() {
        cy.get(this.selectorsList().AdminButton).click()
    }

    ButtonPim() {
        cy.get(this.selectorsList().PimButton).click()
    }

    ButtonLeave() {
        cy.get(this.selectorsList().LeaveButton).click()
    }

    ButtonTime() {
        cy.get(this.selectorsList().TimeButton).click()
    }

    ButtonRecruitment() {
        cy.get(this.selectorsList().RecruitmentButton).click()
    }

    ButtonMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    ButtonPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

    ButtonDashboard() {
        cy.get(this.selectorsList().DashboardButton).click()
    }

    ButtonDirectory() {
        cy.get(this.selectorsList().DirectoryButton).click()
    }

    ButtonMitenance() {
        cy.get(this.selectorsList().MitenanceButton).click()
    }

    ButtonClaim() {
        cy.get(this.selectorsList().ClaimButton).click()
    }

    ButtonBuzz() {
        cy.get(this.selectorsList().BuzzButton).click()
    }
}

export default MenuPage