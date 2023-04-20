describe('App test', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Should render default cards ', () => {
    cy.visit('/');
    cy.get('.headerTitle').contains('HOME');

    cy.get('.CardContainer').should('have.length.of.at.most', 15);
    cy.get('.cardMessage').eq(2).should('have.text', 'Click for info');
  });

  it('Card can be clicked and modal should open', () => {
    cy.visit('/');
    cy.get('.headerTitle').contains('HOME');

    cy.get('.CardContainer').should('have.length.of.at.most', 15);

    cy.get('.cardMessage').eq(2).click();
    cy.get('.mainModalContainer').should('have.class', 'mainModalContainerOpen');
    cy.get('.mainModalLink').contains('Open full size in new window');
  });

  it('Main modal can be closed by button', () => {
    cy.visit('/');
    cy.get('.headerTitle').contains('HOME');

    cy.get('.CardContainer').should('have.length.of.at.most', 15);

    cy.get('.cardMessage').eq(2).click();
    cy.get('.mainModalContainer').should('have.class', 'mainModalContainerOpen');

    cy.get('.mainModalButton').click();
    cy.get('.mainModalContainer').should('not.have.class', 'mainModalContainerOpen');
  });

  it('Main modal can be closed by background', () => {
    cy.visit('/');
    cy.get('.headerTitle').contains('HOME');

    cy.get('.CardContainer').should('have.length.of.at.most', 15);

    cy.get('.cardMessage').eq(2).click();
    cy.get('.mainModalContainer').should('have.class', 'mainModalContainerOpen');

    cy.get('.mainModalContainer').click('topRight');
    cy.get('.mainModalContainer').should('not.have.class', 'mainModalContainerOpen');
  });
});
