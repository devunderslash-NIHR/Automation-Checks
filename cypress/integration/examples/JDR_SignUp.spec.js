/// <reference types="Cypress" />

describe('JDR Signup Test', function () {

    it('JDR_Visit', function () {
        cy.visit('https://www.joindementiaresearch.nihr.ac.uk/')
        cy.wait(1000)
        cy.get('#cookieContainerId').find(':nth-child(2) > .cookie-clickable').click()
        
        // cy.get('#login-part1 > .form-group > .col-xs-12 > .btn').click()
        // cy.get('#password').type('7FApd2uUjfVxnH4g')
        // cy.get('#chkRemember').check()
        // cy.get(':nth-child(4) > .col-xs-12 > .btn').click()
        // cy.get('#cookie-bar > p').contains('I Understand').click()
    })

    it('JDR_SignUp_Page1', function() {
        cy.get('aside.col-md-4 > section > ul > :nth-child(1) > a').click()
        cy.wait(1000)
        cy.get('#cookieContainerId > .container').find(':nth-child(2) > .cookie-clickable').click()
        cy.get('.greyBox').contains('What you will need before you start')
        cy.get('.formPageTitle').contains('Choose login')
        cy.get('#email').type('tester@tester.com')
        cy.get('#email2').type('tester@tester.com')
        cy.get('#username').type('user1')
        cy.get('#password').type('YouArELivingInC0Vidtimes')
        cy.get('#password2').type('YouArELivingInC0Vidtimes')
        cy.get('#password-strength-meter').should('have.value', 4)
        cy.get('#challengeQuestion1IdName').select('What is the name of your favourite childhood friend?').should('have.value', '2')
        cy.get('#challengeQuestion1Response').type('Friends Name')
        cy.get('#challengeQuestion2Idname').select('In what city or town was your first job?').should('have.value', '4')
        cy.get('#challengeQuestion2Response').type('Belfast')
        cy.get('#challengeQuestion3IdName').select('What is the name of your first school?').should('have.value', '7')
        cy.get('#challengeQuestion3Response').type('School')
        cy.get('button').contains("Continue to step 2").click()

    })

    it('JDR_SignUp_Page2', function() {
        
        cy.get('#prefix').select('Ms').should('have.value', 'Ms')
        cy.get('#firstName').type('FirstName')
        cy.get('#middleName').type('MiddleName')
        cy.get('#surname').type('LastName')
        cy.get('.input-group > .datepicker-button > .glyphicon').click()
        cy.get('#cell1-dateOfBirth').click()
        cy.get('#gender').select('Female').should('have.value', 2)
        cy.get('#personAddressPostcode').type('BT370NQ')
        cy.get('.postcodeLookupButton').click()
        cy.get('.lookupSelectionParent > .form-control').select('5 Mount Pleasant Road, Newtownabbey, County Antrim, BT37 0NQ').should('have.value',4)
        cy.wait(1000)
        cy.get('#personAddressLine1').should('have.value', '5 Mount Pleasant Road')
        cy.get('#personAddressCity').should('have.value', 'Newtownabbey')
        cy.get('#personAddressCountry').should('have.value', 'County Antrim')
        cy.get('#telephone').type('07712345678')
        cy.get('#ethnicGroup').select('Any other White background (White)').should('have.value','Any other White background (White)')
        cy.wait(1000)
        cy.get("#suffersMemoryProblems0").click()
        cy.get('#diagnoses1').click()
        cy.get('#medicalConditionName12').click()
        cy.get('#disabilitiesname6').click()
        cy.get('#symptoms0').click()
        cy.get('#medications1').click()
        cy.get('#hasCarer1').click()
        cy.get('#keptUpToDate').select('Email').should('have.value', 'Email')
        cy.get('#receiveLocalLetter').select('Email').should('have.value', 'Email')
        cy.get('#welcomePack').select('Email').should('have.value', 'Email')
        cy.get('#contactOtherStudies0').click()
        cy.get('#howDidYouFindOutAboutJDR').select('Event exhibition').should('have.value', 9)
        cy.get('#declarationAccepted').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    

})