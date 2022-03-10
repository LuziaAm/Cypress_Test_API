import * as PUTBooks from '../requests/PUTBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('PUT Books', () => {
    it('Alterar novo livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.alteraBook(resAllBooks.body[0].id).should((resAlteraBooks) => {
                expect(resAlteraBooks.status).to.eq(200);
                expect(resAlteraBooks.body).to.be.not.null;
                expect(resAlteraBooks.body.title).to.be.eq('Altera');
            });
        });
    });
    it('Criar e alterar novo livro', () => {
        POSTBooks.addBook().then((resAddBooks) => {
            PUTBooks.alteraBook(resAddBooks.body.id).should((resAlteraBooks) => {
                expect(resAlteraBooks.status).to.eq(200);
                expect(resAlteraBooks.body).to.be.not.null;
                expect(resAlteraBooks.body.title).to.be.eq('Altera');
            });
        });

    });
});
