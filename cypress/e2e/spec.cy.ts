describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/about');
  });
  it('Does not do much!', () => {
    cy.wait(500);
    cy.get('.headerTitle').contains('ABOUT US');
  });
});
