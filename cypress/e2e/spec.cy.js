describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-tau.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="name"]').type('Jorge Mikael');
    cy.get('input[name="email"]').type('teste@teste.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();
  })
})

