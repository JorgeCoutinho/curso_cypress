// Teste com probelemas
describe('Api Adopet', () => {
    
    //Atenção, o token possui um prazo de validade. Dessa forma, você deverá realizar o login e copiar o toker presente no Local Storage do seu navegador.

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-tau.vercel.app/static/css/main.26ceb43b.css',
            headers: Cypress.env()

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')

        })
    })
})