

describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    it('Deve preencher os campos do login incorretamente a e exibir mensagens ao usuário', () => {
        cy.get('[data-test="input-loginEmail"]').type('ana@emai');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('Esqueci minha senha').should('be.visible');
    })
})


