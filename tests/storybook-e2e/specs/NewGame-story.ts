// MyComponent.spec.js

describe('New Game', () => {

  it('get confirmation when game is not over', () => {

    // arrange
    cy.visit('/iframe.html?path=/story/components-newgame--game-not-over');

    // act
    cy.get('[data-cy="newGame"]').click();

    // assert
    cy.get('[data-cy="newGame"]').should('not.exist');
    cy.get('[data-cy="yes"]').should('exist');

    // act
    cy.get('[data-cy="yes"]').click();

    // assert
    cy.get('[data-cy="yes"]').should('not.exist');
    cy.get('[data-cy="newGame"]').should('exist');

  });

  it('no confirmation when game is over', () => {

    // arrange
    cy.visit('/iframe.html?path=/story/components-newgame--game-over');

    // act
    cy.get('[data-cy="newGame"]').click();

    // assert
    cy.get('[data-cy="newGame"]').should('exist');

  });

});

// TODO: listen for frame events and validate click was pushed
// https://stackoverflow.com/questions/63462886/test-angular-component-output-using-storybook-and-cypress
