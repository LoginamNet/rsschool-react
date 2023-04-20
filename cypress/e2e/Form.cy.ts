describe('Form test', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Should render Form page press submit and get validation errors', () => {
    cy.visit('/form');
    cy.get('.headerTitle').contains('FORM');

    cy.get('.formSubmit').click();
    cy.contains('*Please, enter your name above!').should('exist');
    cy.contains('*Everybody has a birthday!').should('exist');
    cy.contains('*Just a photo, nothing to afraid there!').should('exist');
    cy.contains('*You are interresting! Tell us your story!').should('exist');
  });

  it('Should show error when lowercase name is printed', () => {
    cy.visit('/form');
    cy.get('.headerTitle').contains('FORM');

    cy.get('.nameInput').type('name');
    cy.get('.formSubmit').click();

    cy.contains('*Сapital letter first - Alex').should('exist');
  });

  it('Should enter all required data submit and add new cart', () => {
    cy.visit('/form');
    cy.get('.headerTitle').contains('FORM');

    cy.get('.nameInput').type('Name');
    cy.get('.dateInput').type('2020-05-12');
    cy.get('.fileInput').attachFile('example.jpg');
    cy.get('.textarea').type('Some text!');

    cy.get('.formSubmit').click();

    cy.get('.formCardsContainer').should('exist');
    cy.get('.formCardContainer').should('have.length.of.at.most', 1);
  });

  it('Should enter all required data submit with ckecked checkbox and add new cart', () => {
    cy.visit('/form');
    cy.get('.headerTitle').contains('FORM');

    cy.get('.nameInput').type('Name2');
    cy.get('.dateInput').type('2020-06-13');
    cy.get('.checkInput').check();
    cy.get('.fileInput').attachFile('example.jpg');
    cy.get('.textarea').type('Some text!');

    cy.get('.formSubmit').click();
    cy.get('.formCardsContainer').should('exist');
    cy.get('.formCardContainer').should('have.length.of.at.most', 1);
  });

  it('Should open and close form popup on correct submition', () => {
    cy.visit('/form');
    cy.get('.headerTitle').contains('FORM');

    cy.get('.nameInput').type('Name');
    cy.get('.dateInput').type('2020-05-12');
    cy.get('.fileInput').attachFile('example.jpg');
    cy.get('.textarea').type('Some text!');

    cy.get('.formSubmit').click();

    cy.get('.formModalContainer').should('have.class', 'formModalContainerOpen');

    cy.get('.formModalButton').click();

    cy.get('.formModalContainer').should('not.have.class', 'formModalContainerOpen');
  });
});
