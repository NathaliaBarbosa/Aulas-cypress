
const {dadosUsuario } = require('../cadastro/index.js')

function loginUsuarioExistente(numeroEmail){
    cy.get('[data-qa="login-email"]').type(`aut-pgats-${numeroEmail}@tests.com`);
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').click();
};

function loginComEmailESenhaIcorretos(numeroEmail) {
    cy.get('[data-qa="login-email"]').type(`pgats-${numeroEmail}@tests.com`);
    cy.get('[data-qa="login-password"]').type('1234');
    cy.get('[data-qa="login-button"]').click();
};

function loginUsuarioExistenteComFaker(numeroEmail, senha){
    cy.get('[data-qa="login-email"]').type(`aut-pgats-${numeroEmail}@tests.com`);
    cy.get('[data-qa="login-password"]').type(dadosUsuario.senha);
    cy.get('[data-qa="login-button"]').click();

}

module.exports = {
    loginUsuarioExistente,
    loginComEmailESenhaIcorretos,
    loginUsuarioExistenteComFaker
}