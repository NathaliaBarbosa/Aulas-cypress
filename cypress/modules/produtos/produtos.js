function viewProductDoPrimeiroProduto(){
    cy.get('a[href="/product_details/1"]').click();
    cy.title().should('eq', 'Automation Exercise - Product Details');
}

function pesquisarProdutoNaTelaDeProduto(nomeProduto){
    cy.get('input[id="search_product"]').should('be.visible').click();
    cy.get('input[id="search_product"]').type(nomeProduto);
    cy.get('button[id="submit_search"]').click();
}

function selecionarOPrimeiroProdutoParaOCarrinho(){
    cy.get('a[href="/product_details/1"]').scrollIntoView();
    cy.get('img[src="/get_product_picture/1"]')
        .closest('.product-image-wrapper')
        .find('.productinfo > a[data-product-id="1"]')
        .should('be.visible')
        .click();
    
}

function selecionarOSegundoProdutoParaOCarrinho(){
    cy.get('a[href="/product_details/2"]').scrollIntoView();
    cy.get('img[src="/get_product_picture/2"]')
        .closest('.product-image-wrapper')
        .find('.productinfo > a[data-product-id="2"]')
        .should('be.visible')
        .click();
    
}

function clicarEmContinuarShopping (){
    cy.get('.modal-title').should('contain.text', 'Added!');
    cy.get('.modal-footer')
        .contains('.btn-success', 'Continue Shopping')    
        .click();
}

function continuarParaCheckout (){
    cy.get('.check_out').contains('.btn-default', 'Proceed To Checkout').click();
}

module.exports = {
    viewProductDoPrimeiroProduto,
    pesquisarProdutoNaTelaDeProduto,
    selecionarOPrimeiroProdutoParaOCarrinho,
    selecionarOSegundoProdutoParaOCarrinho,
    clicarEmContinuarShopping,
    continuarParaCheckout
}