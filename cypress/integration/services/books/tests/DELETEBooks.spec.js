import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from'../requests/POSTBooks.request';

describe('DELETE Books', () => {
    it('Deletar novo livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            //cy.log(resAllBooks.body[0].id)
            DELETEBooks.deleteBooks(resAllBooks.body[0].id).should((resDeleteBooks) => {
                expect(resDeleteBooks.status).to.eq(200);
            })
        })
    });
    it('Criar e Excluir novo livro', () => {
        POSTBooks.addBook().then((resAddBooks) => {
            DELETEBooks.deleteBooks(resAddBooks.body.id).should((resDeleteBooks) => {
                expect(resDeleteBooks.status).to.eq(200);
            })
        })
    });
});
