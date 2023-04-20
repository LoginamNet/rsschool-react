describe('Search test', () => {
  it('Should update search field on input', () => {
    cy.visit('/');
    cy.wait(500);

    cy.get('.searchInput').type('Cat');
    cy.get('.searchInput').should('have.value', 'Cat');
  });

  it('Should update search field and find on enter press', () => {
    cy.visit('/');
    cy.wait(500);

    cy.get('.searchInput').type('Cat');
    cy.get('.searchInput').type('{enter}');
    cy.get('.searchInput').should('have.value', 'Cat');
    cy.get('.CardContainer').should('have.length.of.at.most', 15);
  });

  it('Should update search field and find on find button press', () => {
    cy.visit('/');
    cy.wait(500);

    cy.get('.searchInput').type('Dog');
    cy.get('.searchButton').click();
    cy.get('.searchInput').should('have.value', 'Dog');
    cy.get('.CardContainer').should('have.length.of.at.most', 15);
  });

  it('Should show error on empty search request', () => {
    cy.visit('/');
    cy.wait(500);

    cy.get('.searchInput').type('Dog');
    cy.get('.searchButton').click();
    cy.get('.searchInput').should('have.value', 'Dog');
    cy.get('.CardContainer').should('have.length.of.at.most', 15);

    cy.get('.searchInput').clear();
    cy.get('.searchButton').click();
    cy.get('.noCardsHeader').contains('Hmm, something`s wrong..');
  });

  it('Just a test to remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  });
});
