/// <reference types="Cypress" />
describe ('BPoR UAT Study Radio Button Tests', function(){

    it('Study Location toggle test', function(){
        cy.visit("https://bepartofresearch-uat.nihr.ac.uk/trial-details/trial-detail?trialId=1")
        cy.get('.location-toggle').click()
        cy.get('.location-toggle, .tag, .tag--ziggurat').eq('1').click()
        cy.get('.map-toggle').click()
        cy.get('.list-toggle').click()
        cy.get('.location-toggle').click()
        cy.log("UAT Location Toggles Completed")
        
    })

    it('Ask To Take Part Modal test', function(){
        cy.get('.toggle-modal').contains("Ask to take part").click()
        cy.get('#take-part-modal').should('contain', 'Contact Information')
        .and('contain', 'Study Location')
        .and('contain', 'Questions to ask')
        cy.get('#take-part-modal > .c-modal__pane > .branded-panel > .branded-panel__content > .btn > .fa').click()
    })

    it('Ask To Take Part Modal test', function(){
        cy.get('.toggle-modal').contains("Ask to take part").click()
        cy.get('#take-part-modal').should('contain', 'Contact Information')
        .and('contain', 'Study Location')
        .and('contain', 'Questions to ask')
        cy.get('#take-part-modal > .c-modal__pane > .branded-panel > .branded-panel__content > .btn > .fa').click()
    })

    // it('UAT feedback test', function(){
     
    //     cy.get('.radio-toolbar, [label = contact_team_radio]').eq('0').click()
    //     cy.get('.radio-toolbar, [label = contact_team_radio]').eq('2').click()
    //     cy.on('window:alert', (str) => {
    //         expect(str).to.contain("Thank you for your feedback")
    //     })

    // })

    it('Checking Feedback Form XHR', () => {
        cy.visit('https://bepartofresearch-uat.nihr.ac.uk/trial-details/trial-detail?trialId=1')
        cy.contains('Agree').click()
        cy.get('.radio-toolbar').contains('No').click()
        cy.get('.radio-toolbar').contains('I will take no action').click()
        cy.intercept('https://bepartofresearch-api-uat.nihr.ac.uk/feedback/study').as('feedBackSent')
        cy.wait('@feedBackSent').then((interception) => {
          assert.isNotNull(interception.request.body, 'check data')
          cy.wrap(interception.request.body).should("have.property", "feedback1", "No")
          cy.wrap(interception.request.body).should("have.property", "feedback2", "I will take no action")
          cy.log(interception.request.body)
        })
      })


})