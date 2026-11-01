// const { da } = require('@faker-js/faker');
const {dadosUsuario } = require('../cadastro/index.js')

function validarInformacoesUsuarioDelivery (){
    cy.get('#address_delivery > .address_firstname').should('contain.text',`Mrs. ${dadosUsuario.primeiroNome} ` + `${dadosUsuario.ultimoNome}`);
    cy.get('#address_delivery > .address_address1 ').eq(0).should('contain.text', dadosUsuario.empresa);
    cy.get('#address_delivery > .address_address1 ').eq(1).should('contain.text', dadosUsuario.endereco);
    cy.get('#address_delivery > .address_city ')
        .should('contain.text', dadosUsuario.cidade)
        .and('contain.text', dadosUsuario.estado)
        .and('contain.text',dadosUsuario.zipcode);
    cy.get('#address_delivery > .address_country_name').should('contain.text', 'Canada');
    cy.get('#address_delivery > .address_phone').should('contain.text', dadosUsuario.celular);
}

function validarInformacoesUsuarioBilling (){
    cy.get('#address_delivery > .address_firstname').should('contain.text',`Mrs. ${dadosUsuario.primeiroNome} ` + `${dadosUsuario.ultimoNome}`);
    cy.get('#address_delivery > .address_address1 ').eq(0).should('contain.text', dadosUsuario.empresa);
    cy.get('#address_delivery > .address_address1 ').eq(1).should('contain.text', dadosUsuario.endereco);
    cy.get('#address_delivery > .address_city ')
        .should('contain.text', dadosUsuario.cidade)
        .and('contain.text', dadosUsuario.estado)
        .and('contain.text',dadosUsuario.zipcode);
    cy.get('#address_delivery > .address_country_name').should('contain.text', 'Canada');
    cy.get('#address_delivery > .address_phone').should('contain.text', dadosUsuario.celular);
}

function validarOsProdutosNaTelaDeCheckout (){
    cy.get('a[href="/product_details/1"]').should('contain.text', 'Blue Top');
    cy.get('a[href="/product_details/2"]').should('contain.text', 'Men Tshirt');
}

function inserirComentarioEContinuar () {
    cy.get('textarea[name="message"]').type(dadosUsuario.texto);
    cy.get('a[href="/payment"]').click();
}

function inserirDadosCartaoEContinuar () {
    cy.get('[data-qa="name-on-card"]').type(dadosUsuario.primeiroNome);
    cy.get('[data-qa="card-number"]').type(dadosUsuario.cartaoNumero);
    cy.get('[data-qa="cvc"]').type(dadosUsuario.cartaoCVV);
    cy.get('[data-qa="expiry-month"]').type(dadosUsuario.cartaoMes);
    cy.get('[data-qa="expiry-year"]').type('2035');
    cy.get('[data-qa="pay-button"]').click();

}

module.exports = {
   validarInformacoesUsuarioDelivery,
   validarInformacoesUsuarioBilling,
   validarOsProdutosNaTelaDeCheckout,
   inserirComentarioEContinuar,
   inserirDadosCartaoEContinuar
}