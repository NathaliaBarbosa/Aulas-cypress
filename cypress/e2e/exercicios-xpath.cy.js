
/// <reference types="cypress" />
require('cypress-xpath');

const cadastro = require('../modules/cadastro/index-xpath.js');
const acesso = require('../modules/Login/login-xpath.js');

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
        acesso.acessarOMenuDeLogin();
        cadastro.iniciarCadastro(numeroEmail);
        cadastro.preencherCadastroECriarCadastro();   
        
        //a>b = elemente a que segue um elemente b
        cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a/b').should('contain.text', 'Aut PGATS Tests');
    });

    it('Acessar com usuário e senha corretos', () =>{
        acesso.acessarOMenuDeLogin();
        acesso.loginUsuarioExistente(numeroEmail);

        //a>b = elemente a que segue um elemente b
        cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a/b').should('contain.text', 'Aut PGATS Tests');
    });

    it('Não conseguir acessar ao inserir email e senha incorretas no login', () => {
        acesso.acessarOMenuDeLogin();
        acesso.loginComEmailESenhaIcorretos(numeroEmail);

        cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/p').should('be.visible').and('contain.text', 'Your email or password is incorrect!');
    });

    it('Efetuar a saida do sistema', () => {
        acesso.acessarOMenuDeLogin();
        acesso.loginUsuarioExistente(numeroEmail);

        cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a').click();
        cy.xpath('//*[@id="form"]/div/div/div[1]/div/h2').should('contain.text', 'Login to your account');
    });

    it('Validar erro ao tentar cadastrar usuário com email já registrado', () => {
        acesso.acessarOMenuDeLogin();
        cadastro.iniciarCadastro(numeroEmail);

        cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/p').should('be.visible').and('contain.text', 'Email Address already exist!');
    });

    it('Excluir usuário cadastrado na suite de testes', () => {
        acesso.acessarOMenuDeLogin();
        acesso.loginUsuarioExistente(numeroEmail);
        cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a').click();
    });
}); 

