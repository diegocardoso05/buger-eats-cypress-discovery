var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '34999999999',
            address: {
                postalcode: '38401494',
                street: 'Rua Luiz Carlos Prestes',
                number: '50',
                details: 'casa',
                district: 'Pacaembu',
                city_state: 'Uberlândia/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}