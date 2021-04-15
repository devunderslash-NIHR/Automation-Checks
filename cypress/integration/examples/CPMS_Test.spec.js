/// <reference types="Cypress" />

describe('CPMS UAT Login', function () {

    const username = Cypress.env('username')
    const password = Cypress.env('password')

    beforeEach('LogIn', function () {
        cy.visit('https://uat.cpms.crncc.nihr.ac.uk/')
        cy.get('#username').type(username, {log: false})
        cy.get('#login-part1 > .form-group > .col-xs-12 > .btn').click()
        cy.get('#password').type(password,  {log: false})
        cy.get('#chkRemember').check()
        cy.get(':nth-child(4) > .col-xs-12 > .btn').click()
        cy.wait(5000)
       // cy.get('#cookie-bar > p').contains('I Understand').click()
    })

    it('Check Numbers', function () {

        cy.get('.menu-label').contains('Studies').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click({ force: true })
        cy.get(".breadcrumbs").then(function (getheaderCPMStxt) {
            var headerCPMStxt = getheaderCPMStxt.text()
            var headerCPMSnum = parseInt(headerCPMStxt.match(/(\d+)/))
            cy.get(':nth-child(1) > .col-lg-12').then(function (getrightAlignText) {
                var rightAlignText = getrightAlignText.text()
                var rightAlignNum = parseInt(rightAlignText.match(/(\d+)/))
                expect(headerCPMSnum).to.equal(rightAlignNum)
            })
        })
    })

    it('Check Users', function () {

        cy.get('.menu-label').contains('User List').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').then(function (gettext) {
            var text = parseInt(gettext.text())
            var expected = 1
            expect(text).to.equal(expected)
        })
        cy.get(':nth-child(1) > [style="word-break: break-all"] > a').then(function (gettext) {
            var text = gettext.text()
            expect(text).to.be.a('string')
        })

        cy.get('tbody > :nth-child(1) > :nth-child(3) > a').then(function (gettext) {
            var text = gettext.text()
            expect(text).to.be.a('string')
        } )
    })

    

})