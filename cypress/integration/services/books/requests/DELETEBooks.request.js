//Verbo|Método - Endpoint - Motivo(request).extensão
/// <reference types="cypress"/>
function deleteBooks(idBook) {
    return cy.request({
        method: 'GET',
        url: `Books/${idBook}`,
        failOnStatusCode: false //Para poder testar o statuscode 404, não quebra o test.
    })//Responsável por fazer a requisição ao serviço - Comunica com a API.
}

export { deleteBooks };