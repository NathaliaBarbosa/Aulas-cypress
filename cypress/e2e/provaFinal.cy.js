
/// <reference types="cypress" />

const cadastro = require('../modules/cadastro/index.js');
const acesso = require('../modules/Login/login.js');
const menu = require('../modules/menus/acesso-menus.js');
const produto = require('../modules/produtos/produtos.js');
const carrinho = require('../modules/carrinho/carrinho.js');

//teste
//testeNathy@teste.com / 147856

describe('Validação dos cenarios de testes do site', () => {
    let numeroGerado = Date.now();
    const numeroEmail = numeroGerado;

    it('Cadastrar um novo usuário com sucesso', () => {
        //aut-pgats-0403@tests.com
        //Aut PGATS Tests - 123456
        //cy.get() -> procurar elementos baseados em css selector
        //cy.contains()->procurar elementos baseados em textos
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        cadastro.iniciarCadastro(numeroEmail);
        cadastro.preencherCadastroECriarCadastro();   
        
        //a>b = elemente a que segue um elemente b
        cy.get('a > b').should('contain.text', 'Aut PGATS Tests');
    });

    it('Acessar com usuário e senha corretos', () =>{
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        acesso.loginUsuarioExistente(numeroEmail);

        //a>b = elemente a que segue um elemente b
        cy.get('a > b').should('contain', 'Aut PGATS Tests');
    });

    it('Não conseguir acessar ao inserir email e senha incorretas no login', () => {
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        acesso.loginComEmailESenhaIcorretos(numeroEmail);

        cy.get('.login-form > form > p').should('be.visible').and('contain.text', 'Your email or password is incorrect!');
    });

    it('Efetuar a saida do sistema', () => {
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        acesso.loginUsuarioExistente(numeroEmail);

        cy.get('a[href*=logout]').click();
    });

    it('Validar erro ao tentar cadastrar usuário com email já registrado', () => {
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        cadastro.iniciarCadastro(numeroEmail);

        cy.get('.signup-form > form > p').should('be.visible').and('contain.text', 'Email Address already exist!');
    });

    it('Validar visualização da pagina de produtos e a visualização dos detalhes', () => {
       menu.acessarHomePage();
       menu.acessarOMenuDeProdutos();
       produto.viewProductDoPrimeiroProduto();
       cy.get('.product-information > h2').should('be.visible').and('not.be.empty'); 
       cy.get('.product-information > p').should('be.visible').and('not.be.empty');
       cy.get('.product-information > span > span').should('be.visible').and('not.be.empty');
       cy.contains('.product-information > p > b', 'Availability:').should('be.visible').and('not.be.empty');
       cy.contains('.product-information > p > b', 'Condition:').should('be.visible').and('not.be.empty');
       cy.contains('.product-information > p > b', 'Brand:').should('be.visible').and('not.be.empty');    
    });

    it('Validar funcionamento correto da pesquisa de produtos', () => {
        const produtoEscolhido = 'Men Tshirt';
        menu.acessarHomePage();
        menu.acessarOMenuDeProdutos();
        produto.pesquisarProdutoNaTelaDeProduto(produtoEscolhido);
        cy.get('.features_items .title').should('be.visible').and('contain.text', 'Searched Products');
        cy.get('.productinfo > p').should('be.visible').and('contain.text', produtoEscolhido);

    });

    it('Validar correto cadastro de assinatura', () => {
        menu.acessarHomePage();
        cadastro.enviarSubscription(`aut-pgats-${numeroEmail}@tests.com`);
        cy.contains('.alert-success.alert', 'You have been successfully subscribed!', { timeout: 10000 }).should('be.visible');

    });

    it('Excluir usuário cadastrado na suite de testes', () => {
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        acesso.loginUsuarioExistente(numeroEmail);
        cy.get('a[href*=delete_account]').click();
    });
}); 

describe('Com Faker - Validação dos cenarios de testes do site', () => {
    let numeroGerado = Date.now();
    const numeroEmail = numeroGerado;


    it('Cadastrar um novo usuário com sucesso', () => {
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        cadastro.iniciarCadastro(numeroEmail);
        cadastro.preencherCadastroECriarCadastroComFaker();   
        
        //a>b = elemente a que segue um elemente b
        cy.get('a > b').should('contain.text', 'Aut PGATS Tests');
    });
})

describe ('Validação de fluxos completos', () => {
    const numerosEmail = [];
    
    for(let i = 0; i < 2; i++){
        //o 1 é só para ter certeza que vão ser diferente
        let numeroGerado = Date.now()+1;
        numerosEmail.push(numeroGerado);
    }


    it('Validar criação de conta com a efetuação de um pedido com sucesso e depois a deletação da conta', () => {
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        cadastro.iniciarCadastro(numerosEmail[0]);
        cadastro.preencherCadastroECriarCadastroComFaker();
        cy.get('a > b').should('contain.text', 'Aut PGATS Tests');
        produto.selecionarOPrimeiroProdutoParaOCarrinho();
        produto.clicarEmContinuarShopping();
        produto.selecionarOSegundoProdutoParaOCarrinho();
        produto.clicarEmContinuarShopping();
        menu.acessarOMenuDeCarrinho();
        produto.continuarParaCheckout();
        carrinho.validarInformacoesUsuarioDelivery();
        carrinho.validarInformacoesUsuarioBilling();
        carrinho.validarOsProdutosNaTelaDeCheckout();
        carrinho.inserirComentarioEContinuar();
        carrinho.inserirDadosCartaoEContinuar();
        cy.get('.row > div > p').should('contain.text', 'Congratulations! Your order has been confirmed!');
        cy.get('a[href*=delete_account]').click();
        cy.get('.row > div > h2 > b').should('contain.text', 'Account Deleted!');
    })

    //como não sei se o usuário fica cadastrado para sempre achei melhor gerar um novo
    it('Cadastrar um novo usuário com sucesso', () => {
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        cadastro.iniciarCadastro(numerosEmail[1]);
        cadastro.preencherCadastroECriarCadastroComFaker();   
        
        cy.get('a > b').should('contain.text', 'Aut PGATS Tests');
    });

    it('Validar acesso de conta existente com solicitação de pedido e depois efetuar o delete da conta', () => {
        menu.acessarHomePage();
        menu.acessarOMenuDeLogin();
        acesso.loginUsuarioExistenteComFaker(numerosEmail[1], cadastro.dadosUsuario.senha);
        cy.get('a > b').should('contain.text', 'Aut PGATS Tests');
        produto.selecionarOPrimeiroProdutoParaOCarrinho();
        produto.clicarEmContinuarShopping();
        produto.selecionarOSegundoProdutoParaOCarrinho();
        produto.clicarEmContinuarShopping();
        menu.acessarOMenuDeCarrinho();
        produto.continuarParaCheckout();
        carrinho.validarInformacoesUsuarioDelivery();
        carrinho.validarInformacoesUsuarioBilling();
        carrinho.validarOsProdutosNaTelaDeCheckout();
        carrinho.inserirComentarioEContinuar();
        carrinho.inserirDadosCartaoEContinuar();
        cy.get('.row > div > p').should('contain.text', 'Congratulations! Your order has been confirmed!');
        cy.get('a[href*=delete_account]').click();
        cy.get('.row > div > h2 > b').should('contain.text', 'Account Deleted!');

    })
})

