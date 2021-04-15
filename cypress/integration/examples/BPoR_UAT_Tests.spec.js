/// <reference types="Cypress" />
describe ('BPoR UAT Initial Tests', function(){

    it('Search Results Above 3000', function(){
        cy.visit("https://bepartofresearch-uat.nihr.ac.uk/results/search-results?query=*&location=&search=%257B%2522query%2522%253A%2522*%2522%252C%2522facetDef%2522%253A%257B%2522Gender%2522%253A%255B%255D%252C%2522Study%2520Status%2522%253A%255B%2522Recruiting%2522%255D%252C%2522Updated%2520Within%2522%253A%255B%255D%252C%2522Age%2520Range%2522%253A%255B%255D%252C%2522Health%2520Tag%2522%253A%255B%255D%257D%252C%2522rows%2522%253A%252210%2522%252C%2522offset%2522%253A%25220%2522%252C%2522openurl%2522%253A%2522yes%2522%252C%2522dist%2522%253A0%252C%2522sortBy%2522%253Anull%252C%2522sortOrder%2522%253Anull%257D")
        cy.wait(1000)
        cy.get('.header > .ds-6').then(function(gettext){ 
            var fulltext = gettext.text()
            var getnumber = parseInt(fulltext.match(/(\d+)/))
            expect(getnumber).to.be.at.least(3000)
            cy.log("test 1 completed")
        })
    })

    it('Check Filter Removal Works', function (){
        cy.get('.tag__close').click()
        cy.get('.px-2').click()
        cy.wait(1000)
        cy.log("test 2 completed")
    })

    it('Get Full Search Results Number (Above 30000)', function(){
       // cy.get('.header > .ds-6').contains(30279)
        cy.get('.header > .ds-6').then(function(gettext){ 
            var fulltext = gettext.text()
            var getnumber = parseInt(fulltext.match(/(\d+)/))
            expect(getnumber).to.be.at.least(30000)
            cy.log("test 3 completed")
        })

    })

    it('Target First Study and Click To Open', function(){

         cy.get('.search-result:visible').find('.col, .col-lg-auto, .btn, .btn--action, .ds-4, .my-2').eq('7').click()
        cy.log("test 4 completed")
      })

})