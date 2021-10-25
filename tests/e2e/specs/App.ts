
describe('App.vue', () => {
  const SITE_URL = '/';

  beforeEach(() => {
    cy.visit(SITE_URL);
  });

  it('visits correct page', () => {

    // assert
    cy.url().should('equal', Cypress.config().baseUrl + SITE_URL);

  });

  it('loads game', () => {

    // assert
    cy.contains('h1', 'Tic Tac Toe');

  });

});
