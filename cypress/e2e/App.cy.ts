describe('App test', () => {
  it('Should render Main page', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get('.headerTitle').contains('HOME');
  });

  it('Should render About us page', () => {
    cy.visit('/about');
    cy.wait(500);
    cy.get('.headerTitle').contains('ABOUT US');
  });

  it('Should render Form page', () => {
    cy.visit('/form');
    cy.wait(500);
    cy.get('.headerTitle').contains('FORM');
  });

  it('Should render 404 page', () => {
    cy.visit('/wrong-page');
    cy.wait(500);
    cy.get('.headerTitle').contains('404');
  });

  it('Just a test to remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  });
});
