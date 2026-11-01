const {gerarDadosUsuario} = require('../../support/factory/dados-cadastro.js');

const dadosUsuario = gerarDadosUsuario();

function iniciarCadastro(numeroEmail){
    cy.get('[data-qa="signup-name"]').type(`Aut PGATS Tests`);
    cy.get('[data-qa="signup-email"]').type(`aut-pgats-${numeroEmail}@tests.com`);
    cy.get('[data-qa="signup-button"]').click();
}

function preencherCadastroECriarCadastroComFaker(){
    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').type(dadosUsuario.senha);
    cy.get('[data-qa="days"]').select('18');
    cy.get('[data-qa="months"]').select('September');
    cy.get('[data-qa="years"]').select('1992');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type(dadosUsuario.primeiroNome);
    cy.get('[data-qa="last_name"]').type(dadosUsuario.ultimoNome);
    cy.get('[data-qa="company"]').type(dadosUsuario.empresa);
    cy.get('[data-qa="address"]').type(dadosUsuario.endereco);
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type(dadosUsuario.estado);
    cy.get('[data-qa="city"]').type(dadosUsuario.cidade);
    cy.get('[data-qa="zipcode"]').type(dadosUsuario.zipcode);
    cy.get('[data-qa="mobile_number"]').type(dadosUsuario.celular);
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"] > b').should('be.visible').and('contain.text', 'Account Created!');
    cy.get('[data-qa="continue-button"]').click();
}

function preencherCadastroECriarCadastro(){
    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').type('123456');
    cy.get('[data-qa="days"]').select('18');
    cy.get('[data-qa="months"]').select('September');
    cy.get('[data-qa="years"]').select('1992');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('teste');
    cy.get('[data-qa="last_name"]').type('automação');
    cy.get('[data-qa="company"]').type('PGATS');
    cy.get('[data-qa="address"]').type('av testes');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('britsh columbia');
    cy.get('[data-qa="city"]').type('Vancouver');
    cy.get('[data-qa="zipcode"]').type('67567');
    cy.get('[data-qa="mobile_number"]').type('11985858785');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"] > b').should('be.visible').and('contain.text', 'Account Created!');
    cy.get('[data-qa="continue-button"]').click();
}

function enviarSubscription (email) {
    cy.get('#footer').scrollIntoView();
    cy.get('.single-widget > h2').should('be.visible').and('contain.text', 'Subscription');
    cy.get('#susbscribe_email').should('be.visible').click();
    cy.get('#susbscribe_email').type(email);
    cy.get('button[id="subscribe"]').click();
}

module.exports = {
    iniciarCadastro,
    preencherCadastroECriarCadastro,
    preencherCadastroECriarCadastroComFaker,
    enviarSubscription, 
    dadosUsuario
}