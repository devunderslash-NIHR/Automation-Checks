/// <reference types="Cypress" />
describe('JDR SideBar Tests', function () {

    const username = Cypress.env('jdrusername')
    const password = Cypress.env('jdrpassword')

    beforeEach('JDR_LogIn', function () {
        cy.visit('https://www.joindementiaresearch.nihr.ac.uk/')
        cy.wait(5000)
        cy.get('.username').type(username, {log: false})
        cy.get('.password').type(password,  {log: false})
        cy.get('.form-signin > :nth-child(3) > input').click()
        cy.wait(5000)
    })



it('JDR_SearchByUsername', function () {
        cy.get('.col-md-4 > ul > :nth-child(1) > a').invoke('attr', 'href').then(href=>{
            cy.visit("https://www.joindementiaresearch.nihr.ac.uk"+href); 
        })
        cy.wait(2000)
        cy.get('.form-control').type('paconsulting.com')
        cy.get('.col-md-2 > .btn').click()
        cy.get(':nth-child(2):visible').contains('@paconsulting.com')
    })

    it('JDR_SearchVolunteers', function () {
        cy.get('.col-md-4 > ul > :nth-child(3) > a').invoke('attr', 'href').then(href=>{
            cy.visit("https://www.joindementiaresearch.nihr.ac.uk"+href); 
        })
        cy.wait(2000)
        cy.get(':nth-child(8) > :nth-child(2) > .form-control').type('kevin.officer@paconsulting.com')
        cy.get(':nth-child(9) > :nth-child(4) > .btn').click()
        cy.get('.volunteerListItem')
        .should('contain', 'Mr Kevin Officer')
        .and('contain', 'PO Box 875')
        .and('contain', '01/01/1901')
        cy.get('.challengeQuestionLink').click()
        cy.get('#challengeQuestions56432')
        .should('contain', 'Question 1')
        .and('contain', 'Question 2')
        .and('contain', 'na')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
     })

     it('JDR_SearchByDuplicates', function () {
        cy.get('.col-md-4 > ul > :nth-child(4) > a').invoke('attr', 'href').then(href=>{
            cy.visit("https://www.joindementiaresearch.nihr.ac.uk"+href); 
        })
        cy.wait(2000)
        cy.get('#duplicatePanel0 > .panel-heading > .panel-title').click()
        var text1
        var text2
        cy.get('#collapse0 > .duplicateForm > .panel-body > :nth-child(4) > :nth-child(3)').eq(0).should(($div1) => {
            text1 = $div1.text()
        })
        cy.get('#collapse0 > .duplicateForm > .panel-body > :nth-child(4) > :nth-child(3)').should(($div2) => {
            text2 = $div2.text()
            cy.expect(text1).to.equal(text2)
        })
        cy.get('#duplicatePanel1 > .panel-heading > .panel-title').click()
        cy.wait(1000)
        cy.get('#collapse1 > .duplicateForm > .panel-body > :nth-child(2) > a > .col-md-2').should(($div3) => {
            text1 = $div3.text()
        })
        cy.get('#collapse1 > .duplicateForm > .panel-body > :nth-child(4) > a > .col-md-2').should(($div4)=>{
            text2 = $div4.text()
            cy.expect(text1).to.equal(text2)
        })
    })


    it('JDR_Feasibility', function () {
        cy.get('.col-md-4 > ul > :nth-child(5) > a').invoke('attr', 'href').then(href=>{
                 cy.visit("https://www.joindementiaresearch.nihr.ac.uk"+href); 
             })
             cy.get('#gender10').check()
             cy.get('#minAge1').type("21")
             cy.get('#maxAge1').type("40")
             cy.get('#diagnosisDateMonthnull_blank2').check()
             cy.get('#subtypeDiagnosisnamenull_blank3').check()
             cy.get('#symptoms4 > [value="Severe"]').click()
             cy.get('#MinMmseScorenull_blank5').click()
             cy.get('#region_id9 > [value="11"]').click()
             cy.get('#distanceFromHospitalTrust10').select('up to 100 miles')
             cy.get('#hospitalTrust10').select('ABERTAY UNIVERSITY')
             cy.get('#disabilitiesname612').check()
             cy.get('#disabilitiesExclusionName612').check()
             cy.get('#medicalConditionName1013').check()
             cy.get('#medicalExclusionNameNone13').check()
             cy.get('#medications514').check()
             cy.get('#testedForApoe415').select('No')
             cy.get('#positiveApoe416').select('No')
             cy.get('#testedAmyloidPlaque17').select('No')
             cy.get('#positiveAmyloidPlaque18').select('No')
             cy.get('#hasCarer21').select('No')
             cy.get('#isCarer22').select('No')
             cy.get('#caresForDementiaPerson23').select('No')
             cy.get('#contactOtherStudies24').select('No')
             cy.get('#dementiaHistoryFamily25').select('Not Known')
             cy.get('#preferredLanguage26').select('English')
             cy.get('#ethnicGroup27').select('Irish (White)')
             cy.get('#typeOfAccommodation28').select('No')
             cy.get('#carerRelationship30').select('Other (please specify)')
             cy.get('#howDidYouFindOutAboutJDR32').select('Newspaper')
             cy.get('.btn').contains('Submit Search').click()
         })

    })