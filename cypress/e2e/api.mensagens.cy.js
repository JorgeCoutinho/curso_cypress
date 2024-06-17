// Teste com probelemas
describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcwOTA0MTMwNSwiZXhwIjoxNzA5MzAwNTA1fQ.nhiaUyKdvN8RVxCkvne2gyI5n_pYnY_OMMdogMMqOlc`

    //Atenção, o token possui um prazo de validade. Dessa forma, você deverá realizar o login e copiar o toker presente no Local Storage do seu navegador.

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-tau.vercel.app/static/css/main.26ceb43b.css',
            headers: { authorization }

        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')

        })
    })
})