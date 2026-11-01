const { faker } = require('@faker-js/faker');

function gerarDadosUsuario (){
    return{
     senha: faker.string.alpha(6),
     primeiroNome: faker.person.firstName(),
     ultimoNome: faker.person.lastName(),
     empresa: faker.company.name(),
     endereco: faker.location.streetAddress(),
     estado: faker.location.state(),
     cidade: faker.location.city(),
     zipcode: faker.location.zipCode(),
     celular: faker.phone.number(),
     texto: faker.lorem.sentence(),
     cartaoNumero: faker.finance.creditCardNumber(),
     cartaoCVV: faker.finance.creditCardCVV(),
     cartaoMes: faker.date.month()

    }
}

module.exports = {
    gerarDadosUsuario
}