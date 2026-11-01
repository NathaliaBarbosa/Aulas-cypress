
function acessarHomePage(){
    cy.visit('/');
    cy.get('.features_items > h2').should('be.visible').and('contain.text', 'Features Items');
}

function acessarOMenuDeLogin(){
    cy.get('a[href*=login]').click();
    cy.title().should('eq', 'Automation Exercise - Signup / Login')
    cy.get('.login-form > h2').should('contain.text', 'Login to your account');
}

function acessarOMenuDeProdutos(){
    cy.get('.nav.navbar-nav a[href*="products"]').click();
    cy.title().should('eq', 'Automation Exercise - All Products')
    cy.get('.features_items > h2').should('be.visible').and('contain.text','All Products')
}

function acessarOMenuDeCarrinho(){
    cy.get('a[href*=view_cart]').contains('Cart').scrollIntoView();
    cy.get('.shop-menu > .navbar-nav > li > a[href*=view_cart]').contains('Cart').should('be.visible').click();
    cy.title().should('eq', 'Automation Exercise - Checkout');
}

module.exports = {
    acessarHomePage,
    acessarOMenuDeLogin,
    acessarOMenuDeProdutos,
    acessarOMenuDeCarrinho
}

