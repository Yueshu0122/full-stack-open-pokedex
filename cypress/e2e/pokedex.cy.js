// cypress/e2e/pokedex.cy.js

describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to ivysaur page and see chlorophyll', function () {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})