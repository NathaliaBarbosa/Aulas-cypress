require('cypress-xpath');

function acessarOMenuDeLogin(){
    cy.visit('https://automationexercise.com/');
    cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a').click();
}

function loginUsuarioExistente(numeroEmail){
    cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]').type(`aut-pgats-${numeroEmail}@tests.com`);
    cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]').type('123456');
    cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/button').click();
};

function loginComEmailESenhaIcorretos(numeroEmail) {
    cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]').type(`pgats-${numeroEmail}@tests.com`);
    cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]').type('1234');
    cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/button').click();
};

module.exports = {
    loginUsuarioExistente,
    loginComEmailESenhaIcorretos,
    acessarOMenuDeLogin
}