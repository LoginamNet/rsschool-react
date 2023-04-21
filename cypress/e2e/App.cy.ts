describe('App test', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Should render Main page', () => {
    cy.visit('/');

    cy.get('.headerTitle').contains('HOME');
  });

  it('Should render About us page', () => {
    cy.visit('/about');

    cy.get('.headerTitle').contains('ABOUT US');
  });

  it('Should render Form page', () => {
    cy.visit('/form');

    cy.get('.headerTitle').contains('FORM');
  });

  it('Should render 404 page', () => {
    cy.visit('/wrong-page');

    cy.get('.headerTitle').contains('404');
  });
});
