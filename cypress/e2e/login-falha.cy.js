describe('Login no site Adopet', () => {
    it('Falha no login do sistema', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="input-loginEmail"]').type('Jorge Mikael')
        cy.get('[data-test="input-loginPassword"]').type('teste@teste.com')
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
})