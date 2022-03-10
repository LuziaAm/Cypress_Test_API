/// <reference types="cypress"/>

const payloadAlteraBooks =  require('../payloads/alterar-book.json')

function alteraBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers:{
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: payloadAlteraBooks
    })
}

export { alteraBook }