require('cypress-xpath');


function iniciarCadastro(numeroEmail){
    cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]').type(`Aut PGATS Tests`)
    cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]').type(`aut-pgats-${numeroEmail}@tests.com`)
    cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/button').click()
}

function preencherCadastroECriarCadastro(){
    cy.xpath('//*[@id="id_gender2"]').check()
    cy.xpath('//*[@id="password"]').type('123456')
    cy.xpath('//*[@id="days"]').click()
    cy.xpath('//*[@id="days"]/option[21]').select('20')
    cy.xpath('//*[@id="months"]/option[11]').select('September')
    cy.xpath('//*[@id="years"]/option[27]').select('1992')
    cy.xpath('//*[@id="newsletter"]').check()
    cy.xpath('//*[@id="optin"]').check()
    cy.xpath('//*[@id="first_name"]').type('teste')
    cy.xpath('//*[@id="last_name"]').type('automação')
    cy.xpath('//*[@id="company"]').type('PGATS')
    cy.xpath('//*[@id="address1"]').type('av testes')
    cy.xpath('//*[@id="country"]/option[3]').select('Canada')
    cy.xpath('//*[@id="state"]').type('britsh columbia')
    cy.xpath('//*[@id="city"]').type('Vancouver')
    cy.xpath('//*[@id="zipcode"]').type('67567')
    cy.xpath('//*[@id="mobile_number"]').type('11985858785')
    cy.xpath('//*[@id="form"]/div/div/div/div/form/button').click()
    cy.xpath('//*[@id="form"]/div/div/div/div/a').click()
}

module.exports = {
    iniciarCadastro,
    preencherCadastroECriarCadastro,
}