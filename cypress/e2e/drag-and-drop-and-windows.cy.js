//.invoke() ele retira um atributo, no caso aqui ele
//ta tirando o atributo target que é o responsavel por abrir o link em outra aba
describe('', ()=>{
    it('Multiplas abas', () => {
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.contains('click here')
        .invoke('removeAttr', 'target')
        .click()
    })

    it('drag and drop', () => {
        //DataTransfer = ele armazena um conteudo e leva para outro ponto
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        
    })
})