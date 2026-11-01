
/// <reference types="cypress" />

const cadastro = require('../modules/cadastro/index.js');
const acesso = require('../modules/Login/login.js');

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
        cy.get('a > b').should('contain.text', 'Aut PGATS Tests');
    });

    it('Com Faker - Cadastrar um novo usuário com sucesso', () => {
        //aut-pgats-0403@tests.com
        //Aut PGATS Tests - 123456
        //cy.get() -> procurar elementos baseados em css selector
        //cy.contains()->procurar elementos baseados em textos
        acesso.acessarOMenuDeLogin();
        cadastro.iniciarCadastro(numeroEmail);
        cadastro.preencherCadastroECriarCadastroComFaker();   
        
        //a>b = elemente a que segue um elemente b
        cy.get('a > b').should('contain.text', 'Aut PGATS Tests');
    });

    it('Acessar com usuário e senha corretos', () =>{
        acesso.acessarOMenuDeLogin();
        acesso.loginUsuarioExistente(numeroEmail);

        //a>b = elemente a que segue um elemente b
        cy.get('a > b').should('contain', 'Aut PGATS Tests');
    });

    it('Não conseguir acessar ao inserir email e senha incorretas no login', () => {
        acesso.acessarOMenuDeLogin();
        acesso.loginComEmailESenhaIcorretos(numeroEmail);

        cy.get('.login-form > form > p').should('be.visible').and('contain.text', 'Your email or password is incorrect!');
    });

    it('Efetuar a saida do sistema', () => {
        acesso.acessarOMenuDeLogin();
        acesso.loginUsuarioExistente(numeroEmail);

        cy.get('a[href*=logout]').click();
        cy.get('.login-form > h2').should('contain.text', 'Login to your account');
    });

    it('Validar erro ao tentar cadastrar usuário com email já registrado', () => {
        acesso.acessarOMenuDeLogin();
        cadastro.iniciarCadastro(numeroEmail);

        cy.get('.signup-form > form > p').should('be.visible').and('contain.text', 'Email Address already exist!');
    });

    it('Excluir usuário cadastrado na suite de testes', () => {
        acesso.acessarOMenuDeLogin();
        acesso.loginUsuarioExistente(numeroEmail);
        cy.get('a[href*=delete_account]').click();
    });
}); 

