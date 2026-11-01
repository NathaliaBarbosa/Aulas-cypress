
/// <reference types="cypress" />
describe('Automation Exercise', () => {
    it('Cadastrar um novo usuário com sucesso', () => {
        //aut-pgats-0403@tests.com
        //Aut PGATS Tests - 123456
        //cy.get() -> procurar elementos baseados em css selector
        //cy. contains()->procurar elementos baseados em textos
        cy.visit('https://www.automationexercise.com')
        cy.get('a[href*=login]').click()

        const numeroGerado = Date.now();

        cy.get('[data-qa="signup-name"]').type(`Aut PGATS Tests`)
        cy.get('[data-qa="signup-email"]').type(`aut-pgats-${numeroGerado}@tests.com`)
        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender2').check()
        cy.get('[data-qa="password"]').type('123456')
        cy.get('[data-qa="days"]').select('18')
        cy.get('[data-qa="months"]').select('September')
        cy.get('[data-qa="years"]').select('1992')
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('[data-qa="first_name"]').type('teste')
        cy.get('[data-qa="last_name"]').type('automação')
        cy.get('[data-qa="company"]').type('PGATS')
        cy.get('[data-qa="address"]').type('av testes')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('britsh columbia')
        cy.get('[data-qa="city"]').type('Vancouver')
        cy.get('[data-qa="zipcode"]').type('67567')
        cy.get('[data-qa="mobile_number"]').type('11985858785')
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()

        cy.get('a[href="/delete_account"]').click()
    });
});