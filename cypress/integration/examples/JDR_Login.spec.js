/// <reference types="Cypress" />

describe('JDR Login', function () {

    const username = Cypress.env('jdrusername')
    const password = Cypress.env('jdrpassword')

    beforeEach('LogIn Test', function () {
        cy.visit('https://www.joindementiaresearch.nihr.ac.uk/')
        cy.wait(5000)
        cy.get('.username').type(username, {log: false})
        cy.get('.password').type(password,  {log: false})
        cy.get('.form-signin > :nth-child(3) > input').click()
        cy.wait(5000)
    })


     it('View Study Test', function () {
         cy.get('.col-md-4 > ul > :nth-child(6) > a').invoke('attr', 'href').then(href=>{
             cy.visit("https://www.joindementiaresearch.nihr.ac.uk"+href); 
         })
         //cy.get(':nth-child(2) > .study-title-data > a').click()
         cy.get('[name="studyList"] > :nth-child(2) > :nth-child(1) > .form-control').type('test')
         cy.get(':nth-child(2) > .study-title-data > a').click()
            cy.server()
        
     })

    

         it('LogOut Test', function () {  
            cy.get('p > .MyAccount').click()
            cy.wait(2000)
            cy.get('.helpText > :nth-child(2)').contains("Here you can edit your account details and edit your password")
            cy.get('.form-logout > [type="submit"]').click()
            cy.wait(2000)
            cy.url().should('eq', 'https://www.joindementiaresearch.nihr.ac.uk/home?logout')
            cy.get('.popover-content').contains("You have successfully logged out. For security purposes we suggest you close your browser window.")
        })
    

})